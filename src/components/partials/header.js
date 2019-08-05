import React from 'react'
import {connect} from "react-redux"

import IconLabel from '../images/icon-label'
import GoodquesLogo from '../images/goodques-logo'

const Header = ({step}) => {
  return (
    <header className="content-header">
      <div className="content-header__container">
        {step === 'configuration' && <GoodquesLogo/>}
      </div>
      <div className="content-header__label">
        <IconLabel/>
      </div>
    </header>
  )
}

const mapStateToProps = ({step}) => {
  return {step}
}

export default connect(mapStateToProps)(Header)
