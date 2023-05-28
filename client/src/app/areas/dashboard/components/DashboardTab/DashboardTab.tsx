import "./DashboardTab.scss"

import TabLink from "app/ui/synthetic/TabRouter/TabLink"
import { ReactNode } from "react"

interface DashboardTabProps {
  to: string | number
  children: ReactNode
}

function DashboardTab(props: DashboardTabProps) {
  return (
    <TabLink className="dashboard-tab" to={props.to}>
      <div className="dashboard-tab__text">
        {props.children}
      </div>
    </TabLink>
  )
}

export default DashboardTab
