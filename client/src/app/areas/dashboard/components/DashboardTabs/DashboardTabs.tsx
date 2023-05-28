import "./DashboardTabs.scss"

import { ReactNode } from "react"

interface DashboardTabsProps {
  children: ReactNode
}

function DashboardTabs(props: DashboardTabsProps) {
  return (
    <div className="dashboard-tabs">
      {props.children}
    </div>
  )
}

export default DashboardTabs
