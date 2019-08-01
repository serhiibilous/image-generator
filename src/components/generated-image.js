import React from 'react'
import Logo from "./images/logo"
import IconQuotes from "./images/icon-quotes"
import {textChange} from "../store/actions"

import {connect} from 'react-redux'

class GeneratedImage extends React.Component {
  render() {
    const {imageContainer, theme, text, fontSize} = this.props
    const styles = {
      background: theme.configuration.Background,
      color: theme.configuration.Text,
      fontSize: `${fontSize}px`
    }

    return (
      <div className="step-content__image-wrapper" ref={imageContainer}>
        <div className="step-content__image-content" style={styles}>
          <div>
            <div className="step-content__image-quotes">
              <IconQuotes color={theme.configuration.Quotes}/>
            </div>
            <div>{text}</div>
          </div>
        </div>
        <Logo coverColor={theme.configuration.Background}
              firstColor={theme.configuration.LogoFirst}
              secondColor={theme.configuration.LogoSecond}/>
      </div>
    )
  }
}

const mapStateToProps = ({text, theme, fontSize}) => {
  return {text, theme, fontSize}
}

const mapDispatchToProps = {textChange}

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedImage)
