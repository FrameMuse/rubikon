import "./DashboardLayout.scss"

import { ReactNode } from "react"

interface DashboardLayoutProps {
  children: ReactNode
}

function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      {props.children}
    </div>
  )
}

export default DashboardLayout
