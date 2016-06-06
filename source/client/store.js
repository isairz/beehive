import thunkMiddleware from 'redux-thunk'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import reducers from '../common/reducers'
import { routerReducer } from 'react-router-redux'
import actionTypeMiddleware from 'utils/redux/actionTypeMiddleware'

const rootReducer = combineReducers(
  Object.assign(
    {},
    reducers,
    { routing: routerReducer }
  )
)

const configureStore = (initialState = {}) => {
  const store = compose(
    applyMiddleware(
      actionTypeMiddleware,
      thunkMiddleware,
      apiMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept(
      '../common/reducers',
      () => {
        const nextReducer = require('../common/reducers')
        store.replaceReducer(nextReducer)
      }
    )
  }

  return store
}

const store = configureStore(window.__INITIAL_STATE__ || {})

export default store
