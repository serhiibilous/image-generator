// Libraries
import React from 'react'
import {connect} from 'react-redux'

// Components
import Header from './partials/header'
import Footer from './partials/footer'
import StepWelcome from './sections/section-welcome'
import StepConfiguration from './sections/section-configuration'

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
