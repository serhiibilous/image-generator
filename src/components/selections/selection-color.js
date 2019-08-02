import React from 'react'

import {connect} from 'react-redux'
import {themeChange, showCustomThemeTooltip} from "../../store/actions"

import IconEyedropper from '../images/icon-eyedropper'
import CustomThemeTooltip from '../partials/custom-theme-tooltip'

class SelectionColor extends React.Component {
  tooltip = React.createRef()

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.tooltip.current && !this.tooltip.current.contains(event.target)) {
      this.props.showCustomThemeTooltip(false)
      this.props.themeChange( this.props.theme.name)
    }
  }

  render() {
    const {themeChange, showCustomThemeTooltip, theme, themesList, customThemeTooltip} = this.props

    return (
      <div className="step-content__column">
        <h3 className="step-content__title">
          Color
        </h3>
        <div className="parameter-selection">
          {themesList.map((themeItem) => {
            const cssClassActive = (themeItem.name === theme.name) ? 'active' : ''
            const cssClass = `parameter-selection__item ${cssClassActive}`
            const selectItemText = (themeItem.used) ? '' : '?'
            const customSelectItem = themeItem.name === 'custom'
            const selectedItemBg = !themeItem.used ? '#e8e8e8' : themeItem.configuration.Background

            return (
              <div className={cssClass} key={themeItem.name}>
                <div className="parameter-selection__item-label"
                     onClick={() => {
                       themeChange(themeItem.name)
                       showCustomThemeTooltip(false)
                     }}
                     style={{backgroundColor: selectedItemBg}}>{selectItemText}</div>
                {customSelectItem &&
                <div className="parameter-selection__item-label parameter-selection__item-label--eyedropper"
                     onClick={() => showCustomThemeTooltip(true)}>
                  <IconEyedropper color={customThemeTooltip ? "#F46946" : "#a6a6a6"}/>
                </div>}
              </div>
            )
          })}
          {customThemeTooltip && <CustomThemeTooltip tooltip={this.tooltip}/>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({themesList, theme, customThemeTooltip}) => {
  return {themesList, theme, customThemeTooltip}
}

const mapDispatchToProps = {themeChange, showCustomThemeTooltip}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionColor)