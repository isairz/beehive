import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './Root'

// Define the target container for our application
const rootElement = document.getElementById('root')

// Accept HMR
if (module.hot) {
  module.hot.accept()
}

// Render application to target container
ReactDOM.render(
  <AppContainer><Root /></AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const root = require('./Root').default // eslint-disable-line
    ReactDOM.render(
      <AppContainer><Root /></AppContainer>,
      rootElement
    )
  })
}
