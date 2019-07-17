import React from 'react'

// Images
import Logo from "../images/logo.svg"
import Label from "../images/label.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <img src={Logo} alt=""/>
        </div>
      </div>
      <div className="header__label">
        <img src={Label} alt=""/>
      </div>
    </header>
  )
}

export default Header
