import React from 'react'

import {connect} from 'react-redux'
import {colorChange} from "../store/actions";

class SelectionColor extends React.Component {
  render() {
    const {colorChange, color, colorsList} = this.props

    return (
      <div className="step-content__column">
        <h3 className="step-content__title">
          Color
        </h3>
        <div className="parameter-selection">
          {colorsList.map((colorItem) => {
            let cssClass = 'parameter-selection__input parameter-selection__input--' + colorItem.name
            let elementId = 'select-color-' + colorItem.name
            return (
              <div className="parameter-selection__item" key={elementId}>
                <input type="radio" name='bg-color'
                       className={cssClass} id={elementId}
                       onChange={() => colorChange(colorItem.value)}
                       value={colorItem.value} checked={color === colorItem.value}/>
                <label style={{backgroundColor: colorItem.value}} htmlFor={elementId}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({color, colorsList}) => {
  return {color, colorsList}
}

const mapDispatchToProps = {colorChange}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionColor)