import React from 'react'
import Logo from "../images/logo"
import IconQuotes from "../images/icon-quotes"
import {textChange} from "../../store/actions"
import {convertHexObjectToColor} from '../../utils/convert-hex-object-to-color'

import {connect} from 'react-redux'

class GeneratedImage extends React.Component {
  render() {
    const {imageContainer, theme, text, fontSize} = this.props
    const styles = {
      background: convertHexObjectToColor(theme.configuration.Background, 'rgba'),
      color: convertHexObjectToColor(theme.configuration.Text, 'rgba'),
      fontSize: `${fontSize}px`
    }

    return (
      <div className="step-content__image-wrapper" ref={imageContainer}>
        <div className="step-content__image-content" style={styles}>
          <div>
            <div className="step-content__image-quotes">
              <IconQuotes color={convertHexObjectToColor(theme.configuration.Quotes, 'rgba')}/>
            </div>
            <div>
              <span className="step-content__image-text"
                    style={{borderColor: convertHexObjectToColor(theme.configuration.Cursor, 'rgba')}}>
                {text}&nbsp;
              </span>
            </div>
          </div>
        </div>
        <Logo coverColor={convertHexObjectToColor(theme.configuration.Background, 'rgba')}
              firstColor={convertHexObjectToColor(theme.configuration.LogoFirst, 'rgba')}
              secondColor={convertHexObjectToColor(theme.configuration.LogoSecond, 'rgba')}/>
      </div>
    )
  }
}

const mapStateToProps = ({text, theme, fontSize}) => {
  return {text, theme, fontSize}
}

const mapDispatchToProps = {textChange}

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedImage)
