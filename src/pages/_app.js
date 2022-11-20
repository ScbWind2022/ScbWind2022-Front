import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'

import RouteGuard from '../components/RouteGuard'
import { SystemModalContextProvider } from '../Modals/SystemModal/SystemModalContext'
import '../styles/globals.css'
import { store } from '../state/store'
import { RootThemeProvider } from '../styles/index'

import 'normalize.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <RootThemeProvider>
        <SystemModalContextProvider>
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </SystemModalContextProvider>
      </RootThemeProvider>
    </Provider>
  )
}

export default App
