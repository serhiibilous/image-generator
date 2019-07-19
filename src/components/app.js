// Libraries
import React from 'react'
import {connect} from 'react-redux'

// Components
import Header from './header'
import Footer from './footer'
import StepWelcome from './step-welcome'
import StepConfiguration from './step-configuration'

const App = ({step, contentColor}) => {
  return (
    <div className="content" style={{background: contentColor}}>
      <Header/>
      {step === 'configuration' && <StepConfiguration/>}
      {step === 'welcome' && <StepWelcome/>}
      <Footer/>
    </div>
  )
}

const mapStateToProps = ({step, contentColor}) => {
  return {step, contentColor}
}

export default connect(mapStateToProps)(App)
