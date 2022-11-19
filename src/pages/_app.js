import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import RouteGuard from '../components/RouteGuard'
import { SystemModalContextProvider } from '../Modals/SystemModal/SystemModalContext'
import { store } from '../state/store'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'normalize.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <RouteGuard>
        <SystemModalContextProvider>
          <Component {...pageProps} />
        </SystemModalContextProvider>
      </RouteGuard>
      <ToastContainer />
    </Provider>
  )
}

export default App
