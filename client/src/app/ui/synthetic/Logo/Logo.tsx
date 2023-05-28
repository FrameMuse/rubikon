import "./Logo.scss"

import { StaticRoutes } from "app/AppRoutes"
import { NavLink } from "react-router-dom"

interface LogoProps {
  title?: string
  to?: string
}

function Logo(props: LogoProps) {
  return (
    <NavLink className="logo" to={props.to || StaticRoutes.Home}>
      {props.title || `Мед-Помощь`}
    </NavLink>
  )
}

export default Logo
