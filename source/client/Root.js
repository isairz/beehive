import React from 'react'
import { Provider } from 'react-redux'

import routes from './routes'
import store from './store'

import './containers/globals.css'

export default () => (
  <Provider store={store}>
    {routes}
  </Provider>
)
