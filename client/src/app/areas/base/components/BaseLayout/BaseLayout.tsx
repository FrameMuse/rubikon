import "./BaseLayout.scss"

import QueryBoundary from "app/containers/QueryBoundary"
import { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { UserType } from "store/reducers/user/types"

import Header from "../Header/Header"


interface BaseLayout {
  children?: ReactNode
}

function BaseLayout(props: BaseLayout) {
  return (
    <div className="base-layout">
      <Header />
      <main>
        <QueryBoundary userType={UserType.Admin}>
          {props.children || <Outlet />}
        </QueryBoundary>
      </main>
    </div>
  )
}

export default BaseLayout
