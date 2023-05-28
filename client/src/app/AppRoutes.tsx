import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import BaseLayout from "./areas/base/components/BaseLayout/BaseLayout"
import Column from "./layouts/Column/Column"
import TextBox from "./layouts/TextBox/TextBox"
import ErrorCover from "./ui/synthetic/ErrorCover/ErrorCover"
import HomeView from "./views/home/HomeView"

function AppRoutes() {
  const location = useLocation()
  // Reset scroll.
  useEffect(() => window.scrollTo(0, 0), [location.pathname])

  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path={StaticRoutes.Home} element={<HomeView />} />

        <Route path="*" element={(
          <Column justifyItems="center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ErrorCover>
              <TextBox>
                <h3>Не найдено</h3>
                <p>Данная страница не найдена.</p>
              </TextBox>
            </ErrorCover>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Column>
        )} />
      </Route>
    </Routes>
  )
}

/**
 * Only base routes are declared globally, local (deeper) ones better keep isolated (to not export).
 */
export enum StaticRoutes {
  Home = "/",

  Doctor = "/doctor",
  Doctors = "/doctors",

  Patient = "/patient",
  Patients = "/patients",
}

export default AppRoutes
