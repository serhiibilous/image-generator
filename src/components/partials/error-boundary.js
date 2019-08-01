import React from 'react'

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    const {error} = this.state

    if (error) {
      return (
        <div>
          <h2>
            Error
          </h2>
        </div>
      )
    }

    return (
      this.props.children
    )
  }
}
