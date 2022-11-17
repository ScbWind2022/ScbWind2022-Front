import Router from 'next/router'
import NProgress from 'nprogress'

import 'normalize.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
