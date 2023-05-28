import "./Header.scss"

import { ProfileWidget } from "app/entities/user"
import Logo from "app/ui/synthetic/Logo/Logo"

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="header-wrap">
          <Logo />
          <div className="header-right">
            <ProfileWidget />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
