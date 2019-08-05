import React from 'react'

import {connect} from 'react-redux'
import {fontSizeChange} from "../../store/actions"

class SelectionFontSize extends React.Component {
  fontSizeUpdate = (value) => {
    if (value === 'increment') {
      if (this.props.fontSize >= 50) return
      this.props.fontSizeChange(this.props.fontSize + 1)
    } else if (value === 'decrement') {
      if (this.props.fontSize <= 10) return
      this.props.fontSizeChange(this.props.fontSize - 1)
    }
  }

  render() {
    const {fontSizeChange, fontSize} = this.props

    return (
      <div className="step-content__column">
        <h3 className="step-content__title">
          Font size
        </h3>
        <div className="parameter-selection">
          <div className="parameter-selection__item active parameter-selection__item--counter">
            <div className="parameter-selection__item-label parameter-selection__item-label--custom">
              {fontSize}
            </div>
            <div className="parameter-selection__counter">
              <div className="parameter-selection__counter-item parameter-selection__counter-item--plus"
                   onClick={() => this.fontSizeUpdate('increment')}/>
              <div className="parameter-selection__counter-item parameter-selection__counter-item--minus"
                   onClick={() => this.fontSizeUpdate('decrement')}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({fontSize}) => {
  return {fontSize}
}

const mapDispatchToProps = {fontSizeChange}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionFontSize)