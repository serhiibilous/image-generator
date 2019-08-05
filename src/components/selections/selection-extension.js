import React from 'react'

import IconExtensionLabel from '../images/icon-extension-label'
import {connect} from 'react-redux'
import {extensionChange} from "../../store/actions";

class SelectionExtension extends React.Component {
  render() {
    const {extensionChange, extension, extensionList} = this.props

    return (
      <div className="step-content__column">
        <h3 className="step-content__title">
          File Extension
        </h3>
        <div className="parameter-selection">
          <div className="parameter-selection__item active">
            <div className="parameter-selection__item-label">jpg.</div>
          </div>
          <div className="parameter-selection__item disabled">
            <IconExtensionLabel />
            <div className="parameter-selection__item-label">pdf.</div>
          </div>
          {/*{extensionList.map((themeItem) => {
            const cssClassActive = (themeItem.name === extension) ? 'active' : ''
            const cssClassDisabled = (themeItem.name === 'pdf') ? 'disabled' : ''
            const cssClass = `parameter-selection__item ${cssClassActive} ${cssClassDisabled}`
            return (
              <div className={cssClass} key={themeItem.name}>
                <div className="parameter-selection__item-label"
                     onClick={() => {if (themeItem.name !== 'pdf') extensionChange(themeItem.name)}}>{themeItem.name}.
                </div>
              </div>
            )
          })}*/}
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