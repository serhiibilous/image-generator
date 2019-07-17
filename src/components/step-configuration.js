// Libraries
import React from 'react'
import html2canvas from "html2canvas"

// Components
import SelectionColor from './selection-color'
import SelectionExtension from './selection-extension'
import SelectionText from './selection-text'
import GeneratedImage from './generated-image'

// Redux
import {textChange} from '../store/actions'
import {connect} from 'react-redux'

// Utils
import imageNameCreator from '../utils/image-name-creator'

// Images
import footprintIcon from '../images/footprint.svg'

class StepConfiguration extends React.Component {
  imageContainer = React.createRef()
  imageLink = React.createRef()

  state = {
    image: null,
    imageName: null
  }

  prepareBodyStyle = () => {
    document.body.classList.toggle('body--overflowed')
  }

  buildImage = () => {
    window.scrollTo(0, 0)
    this.prepareBodyStyle()
    let element = this.imageContainer.current
    html2canvas(element, {scale: 3.6}).then(canvas => {
      this.prepareBodyStyle()
      let image = canvas.toDataURL('image/jpeg')
      const imageName = imageNameCreator()
      this.setState({image, imageName})
      this.imageLink.current.click()
    })
  }

  render() {
    const {image, imageName} = this.state

    return (
      <div className="step-configuration">
        <div className="step-configuration__head">
          <h1 className="step-configuration__title">
            Simple image generator
          </h1>
          <p>
            Paste or type text to entry field then press export button.
          </p>
        </div>
        <div className="step-configuration__container">
          <span className="step-configuration__footprint">
            <img src={footprintIcon} alt="STEP 1 (Settings)"/>
          </span>
          <div>
            <h2 className="step-title">
              <span>
                <span className="font-weight-900">STEP 1</span> (Settings)
              </span>
            </h2>
          </div>
          <div className="step-content">
            <div className="step-content__image">
              <GeneratedImage imageContainer={this.imageContainer}/>
            </div>
            <div className="step-content__configuration">
              <SelectionText/>
              <div className="step-content__column-wrapper">
                <SelectionColor/>
                <SelectionExtension/>
              </div>
            </div>
          </div>
        </div>
        <div className="step-configuration__container">
          <span className="step-configuration__footprint">
            <img src={footprintIcon} alt="STEP 2 (Export)"/>
          </span>
          <div>
            <h2 className="step-title">
              <span>
                <span className="font-weight-900">STEP 2</span> (Export)
              </span>
              <button onClick={this.buildImage} type="button"
                      className="button button--primary">Save as jpg
              </button>
              <a href={image} download={imageName} className="hide" ref={this.imageLink}/>
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({text, color}) => {
  return {text, color}
}

const mapDispatchToProps = {textChange}

export default connect(mapStateToProps, mapDispatchToProps)(StepConfiguration)
