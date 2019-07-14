import React from 'react'
import html2canvas from 'html2canvas'

// Images
import Label from './images/label.svg'
import Logo from './images/logo.svg'

//
import Footer from './components/footer'
import StepWelcome from './components/step-welcome'

export default class App extends React.Component {
  imageContainer = React.createRef()

  state = {
    image: null,
    step: 'welcome'
  }

  buildImage = () => {
    let element = this.imageContainer.current
    console.log(element, this.imageContainer)
    html2canvas(element).then(canvas => {
      this.setState({
        image: canvas.toDataURL()
      })
    })
  }

  render() {
    const {image, step} = this.state

    const styles = {
      height: 100,
      width: 100,
      background: '#fe0000',
      textAlign: 'center'
    }

    return (
      <div className="content">
        <div className="content__image">
          <img src={Label} alt=""/>
        </div>
        {step !== 'welcome' &&
        <div>
          <div style={styles} ref={this.imageContainer} className="test">
            <div>App</div>
          </div>
          <div>
            <button onClick={this.buildImage}>Click</button>
          </div>
          {image && <div>
            <img src={image} alt="image"/>
          </div>}
        </div>}
        {step === 'welcome' &&
        <div>
          <div className="content__logo">
            <img src={Logo} alt=""/>
          </div>
          <StepWelcome/>
        </div>}
        <Footer/>
      </div>
    )
  }
}