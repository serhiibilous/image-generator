// Libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Styles
import './styles/main.scss'

//Redux
import {Provider} from 'react-redux'
import store from './store/store'

// Components
import App from './components/app'
import ErrorBoundary from './components/error-boundary'

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App/>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)
