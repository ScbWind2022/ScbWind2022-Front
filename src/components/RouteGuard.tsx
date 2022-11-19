import { useEffect, useState } from 'react'

import Cookies from 'cookies-js'
import { useRouter } from 'next/router'

const AUTH_COOKIE = '_user_access_token'

export default function RouteGuard({ children }) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    authCheck(router.asPath)

    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)

    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
  }, [])

  function authCheck(url) {
    const publicPaths = ['/login', '/register']
    const path = url.split('?')[0]
    const userIsAuthorized = Cookies.get(AUTH_COOKIE)
    if (!userIsAuthorized && !publicPaths.includes(path)) {
      setAuthorized(false)
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      })
    } else {
      setAuthorized(true)
    }
  }

  return authorized && children
}
