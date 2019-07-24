// Libraries
import React, {Fragment} from 'react'
import {connect} from 'react-redux'

// Components
import Header from './header'
import Footer from './footer'
import StepWelcome from './step-welcome'
import StepConfiguration from './step-configuration'

const App = ({step}) => {
  return (
    <div className="content">
      {step === 'welcome' && <Fragment>
        <Header/>
        <StepWelcome/>
        <Footer/>
      </Fragment>}
      {step === 'configuration' && <StepConfiguration/>}
    </div>
  )
}

const mapStateToProps = ({step}) => {
  return {step}
}

export default connect(mapStateToProps)(App)
