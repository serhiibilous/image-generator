import React from 'react'
import {connect} from "react-redux"

import LabelIcon from '../images/label-icon'
import GoodquesLogo from '../images/goodques-logo'

const Header = ({step}) => {
  return (
    <header className="content-header">
      <div className="content-header__container">
        {step === 'configuration' && <GoodquesLogo/>}
      </div>
      <div className="content-header__label">
        <LabelIcon/>
      </div>
    </header>
  )
}

const mapStateToProps = ({step}) => {
  return {step}
}

export default connect(mapStateToProps)(Header)
