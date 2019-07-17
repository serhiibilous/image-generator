import React from 'react'

import {connect} from 'react-redux'
import {extensionChange} from "../store/actions";

class SelectionExtension extends React.Component {
  render() {
    const {extensionChange, extension, extensionList} = this.props

    return (
      <div className="step-content__column">
        <h3 className="step-content__title">
          File Extension
        </h3>
        <div className="parameter-selection">
          {extensionList.map((extensionItem) => {
            let cssClass = 'parameter-selection__input parameter-selection__input--' + extensionItem.name
            let elementId = 'select-color-' + extensionItem.name
            return (
              <div className="parameter-selection__item" key={elementId}>
                <input type="radio" name='extension'
                       className={cssClass} id={elementId}
                       disabled={'pdf' === extensionItem.value}
                       onChange={() => extensionChange(extensionItem.value)}
                       value={extensionItem.value} checked={extension === extensionItem.value}/>
                <label htmlFor={elementId}>{extensionItem.value}.</label>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({extension, extensionList}) => {
  return {extension, extensionList}
}

const mapDispatchToProps = {extensionChange}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionExtension)