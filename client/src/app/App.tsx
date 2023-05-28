import "assets/scss/base.scss"
import "react-modal-global/styles/modal.scss"
import "react-toastify/scss/main.scss"

import { ReactNode, StrictMode, Suspense, useEffect } from "react"
import ReactGA from "react-ga4"
import { ModalContainer } from "react-modal-global"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter, useLocation } from "react-router-dom"
import { ToastContainer, ToastOptions } from "react-toastify"
import { PersistGate } from "redux-persist/integration/react"
import initGA from "services/ga"
import initSentry from "services/sentry"
import store, { persistor } from "store/store"

import AppRoutes from "./AppRoutes"
import CookiesNotice from "./containers/CookiesNotice/CookiesNotice"
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary"
import ErrorFallback from "./containers/ErrorFallback/ErrorFallback"
import Loader from "./ui/synthetic/Loader/Loader"

/**
 * TODO: Better move it from here
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const DEFAULT_TOAST_CONFIG: ToastOptions<{}> = {
  position: "bottom-center"
}

export const APP_TITLE = "Algo Academy"
export function formatAppTitle(...titles: (string | null | undefined)[]): string {
  if (titles.length > 0) {
    return [...titles, APP_TITLE].filter(Boolean).join(" | ")
  }

  return APP_TITLE
}

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallback={ErrorFallback}>
          <AppProviders>
            <AppRoutes />

            <ServicesInit />
            <GALocation />

            <CookiesNotice />
            <ModalContainer />
            <ToastContainer {...DEFAULT_TOAST_CONFIG} />
          </AppProviders>
        </ErrorBoundary>
      </Suspense>
    </StrictMode>
  )
}

function AppProviders(props: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {props.children}
        </PersistGate>
      </StoreProvider>
    </BrowserRouter>
  )
}

function ServicesInit() {
  useEffect(() => {
    initGA()
    initSentry()
  }, [])

  return null
}

function GALocation() {
  const location = useLocation()

  useEffect(() => {
    const hitType = "pageview"
    const path = location.pathname + location.hash

    ReactGA.send({ hitType, page: path })
  }, [location])

  return null
}

export default App
