import React from 'react'
import {connect} from "react-redux"
import ColorPicker from '../color-picker'
import IconResetAll from '../images/icon-reset-all'

import {changeThemeStyle, showCustomThemeTooltip, themeChange, changeCustomThemeStyle} from '../../store/actions'

class CustomThemeTooltip extends React.Component {
  state = {
    changedStyles: true,
    color: null,
    currentStyle: 'Background',
    customConfiguration: this.props.themesList.find((el) => el.name === 'custom').configuration,
    colorPickerValue: this.props.themesList.find((el) => el.name === 'custom').configuration.Background
  }

  handleChange = (color) => {
    console.log(color)
    const customConfiguration = this.state.customConfiguration
    this.setState({
      changedStyles: false,
      colorPickerValue: color.hex,
      customConfiguration: {
        ...customConfiguration,
        [this.state.currentStyle]: color.hex
      }
    })
    this.props.changeThemeStyle(customConfiguration)
  }

  selectStyle = (event, configuration) => {
    this.setState({
      currentStyle: configuration,
      colorPickerValue: this.state.customConfiguration[configuration]
    })
  }

  resetAllStyles = () => {
    const customConfiguration = this.props.themesList.find((el) => el.name === 'custom').configuration
    this.setState({
      changedStyles: true,
      colorPickerValue: customConfiguration.Background,
      customConfiguration: customConfiguration
    })
    this.props.changeThemeStyle(customConfiguration)
  }

  applyThemeStyle = () => {
    this.props.changeCustomThemeStyle(this.state.customConfiguration)
  }

  render() {
    const {currentStyle, colorPickerValue, customConfiguration, changedStyles} = this.state
    const {showCustomThemeTooltip, themeChange, theme, tooltip} = this.props

    return (
      <div className="custom-theme-tooltip" ref={tooltip}>
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
        <div className="custom-theme-tooltip__step custom-theme-tooltip__step--buttons">
          <button type="button"
                  className="button button--link button--with-icon"
                  onClick={() => this.resetAllStyles()}
                  disabled={changedStyles}>
            <IconResetAll/> RESET ALL
          </button>
          <div>
            <button type="button" className="button button--link" onClick={() => {
              showCustomThemeTooltip(false)
              themeChange(theme.name)
            }}>Cancel
            </button>
            <button type="button" className="button button--primary" onClick={() => {
              this.applyThemeStyle()
              showCustomThemeTooltip(false)
            }}>Apply
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({themesList, theme}) => {
  return {themesList, theme}
}

const mapDispatchToProps = {changeThemeStyle, showCustomThemeTooltip, themeChange, changeCustomThemeStyle}

export default connect(mapStateToProps, mapDispatchToProps)(CustomThemeTooltip)
