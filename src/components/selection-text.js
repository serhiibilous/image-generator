import React from 'react'

import {connect} from 'react-redux'
import {textChange} from "../store/actions";

class SelectionText extends React.Component {

  state = {
    maxTextLength: 300,
    textLength: 0
  }

  countSymbols = (event) => {
    this.setState({
      textLength: event.target.value.length
    })
    console.log(event.target.value)
  }

  render() {
    const {textChange, text} = this.props
    const {maxTextLength, textLength} = this.state
    const cssClassLengthText = textLength < 300 ? 'color-orange' : ''

    return (
      <div className="step-content__textarea-wrapper">
        <h3 className="step-content__title">
          Content
        </h3>
        <textarea maxLength="300" value={text} onChange={(event) => {
          textChange(event.target.value);
          this.countSymbols(event)
        }}
                  className="step-content__textarea" placeholder="Your text here"/>
        <div className="step-content__text-length">
          <span className={cssClassLengthText}>{textLength}</span> \ {maxTextLength}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({text}) => {
  return {text}
}

const mapDispatchToProps = {textChange}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionText)