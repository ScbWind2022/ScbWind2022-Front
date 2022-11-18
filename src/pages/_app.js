import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'

// import RouteGuard from '../components/RouteGuard'
import { store } from '../state/store'

import 'normalize.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <RouteGuard> */}
      <Component {...pageProps} />
      {/* </RouteGuard> */}
    </Provider>
  )
}

export default App
