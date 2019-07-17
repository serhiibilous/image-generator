import React, {Fragment} from 'react'
import WelcomeImage from '../images/welcome-image.svg'

import {stepChange} from '../store/actions'

// import {bindActionCreators} from "redux"
import {connect} from 'react-redux'

class StepWelcome extends React.Component {
  render() {
    const {stepChange} = this.props

    return (
      <Fragment>
        <div className="step-welcome">
          <div className="step-welcome__image">
            <img src={WelcomeImage} alt="Welcome Image"/>
          </div>
          <div>
            <h1 className="step-welcome__title">
              Welcome to GOODQUES
              simple image generator
            </h1>
            <p className="step-welcome__text">
              Make images for instagram profile in oke click of the mouse
            </p>
          </div>
          <div className="step-welcome__button">
            <button className="button button--primary"
                    onClick={() => stepChange('configuration')}>
              Start creating
            </button>
          </div>
        </div>
      </Fragment>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     stepChange
//   }, dispatch)
// }

const mapDispatchToProps = {stepChange}

export default connect(null, mapDispatchToProps)(StepWelcome)
