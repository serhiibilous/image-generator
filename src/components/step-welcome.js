import React from 'react'
import WelcomeImage from '../images/welcome-image.svg'

export default function StepWelcome() {
  return (
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
        <button className="button button--primary">Start creating</button>
      </div>
    </div>
  )
}
