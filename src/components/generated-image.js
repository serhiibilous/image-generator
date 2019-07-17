import React from 'react'
import Logo from "./logo"
import IconQuotes from "./icon-quotes"
import {textChange} from "../store/actions"

import {connect} from 'react-redux'

class GeneratedImage extends React.Component {
  render() {
    const {imageContainer, color, text} = this.props
    const colorRed = '#f46946'
    const colorDarkRed = '#7f210a'
    const colorWhite = '#ffffff'

    const styles = {
      height: 'calc(100% - 20px)',
      width: '100%',
      background: color,
      textAlign: 'left',
      padding: '40px',
      fontSize: '15px',
      fontWeight: 900,
      lineHeight: 1.4,
      letterSpacing: '0.09px',
      fontFamily: 'GothamPro',
      color: color === '#d1fdfe' ? '#95c8cf' : '#fff',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0 0 3px 0'
    }

    return (
      <div ref={imageContainer} style={{position: 'relative', width: '100%'}}>
        <div style={styles}>
          <div>
            <div style={{margin: '0 0 5px'}}>
              <IconQuotes color={color === colorRed ? colorDarkRed : colorRed}/>
            </div>
            <div>{text}</div>
          </div>
        </div>
        <Logo coverColor={color}
              firstColor={color === '#d1fdfe' ? '#B4DFE5' : colorWhite}
              secondColor={color === colorRed ? colorWhite : colorRed}/>
      </div>
    )
  }
}

const mapStateToProps = ({text, color}) => {
  return {text, color}
}

const mapDispatchToProps = {textChange}

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedImage)
