import React from 'react'
import {connect} from "react-redux"
import ColorPicker from '../color-picker'

import {changeCustomThemeStyle, showCustomThemeTooltip, themeChange} from '../../store/actions'

class CustomThemeTooltip extends React.Component {
  state = {
    color: null,
    currentStyle: 'Background',
    colorPickerValue: '#f46946',
    customConfiguration: this.props.themesList.find((el) => el.name === 'custom').configuration
  }

  handleChange = (color) => {
    this.setState({
      colorPickerValue: color.hex,
      customConfiguration: {
        ...this.state.customConfiguration,
        [this.state.currentStyle]: color.hex
      }
    })
    this.props.changeCustomThemeStyle(this.state.customConfiguration)
  }

  selectStyle = (event, configuration) => {
    this.setState({
      currentStyle: configuration,
      colorPickerValue: this.state.customConfiguration[configuration]
    })
  }

  render() {
    const {currentStyle, colorPickerValue, customConfiguration} = this.state
    return (
      <div className="custom-theme-tooltip">
        <div className="custom-theme-tooltip__step">
          <h2 className="custom-theme-tooltip__title">
            Choose colors for all elements
          </h2>
          <div className="custom-theme-tooltip__column-wrapper">
            <div className="custom-theme-tooltip__column">
              {Object.keys(customConfiguration).map((configuration) => {
                const styleBorderColor = (customConfiguration[configuration] === '#FFFFFF') ? '' : customConfiguration[configuration]
                const styleBg = {
                  background: customConfiguration[configuration],
                  borderColor: styleBorderColor
                }

                let cssClassStyle = currentStyle === configuration ? 'active' : ''
                cssClassStyle += " custom-theme-tooltip__style"

                return (
                  <div className="custom-theme-tooltip__item" key={configuration}>
                    <div className="custom-theme-tooltip__item-name">
                      {configuration}
                    </div>
                    <div className={cssClassStyle}
                         onClick={(event) => this.selectStyle(event, configuration)}>
                      <span className="custom-theme-tooltip__item-bg" style={styleBg}/>
                      <span
                        className="custom-theme-tooltip__item-color">{customConfiguration[configuration]}</span>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="custom-theme-tooltip__column">
              <ColorPicker onChange={this.handleChange} color={colorPickerValue}/>
            </div>
          </div>
        </div>
        <div className="custom-theme-tooltip__step">

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({themesList}) => {
  return {themesList}
}

const mapDispatchToProps = {changeCustomThemeStyle}

export default connect(mapStateToProps, mapDispatchToProps)(CustomThemeTooltip)