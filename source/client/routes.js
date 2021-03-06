import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'

import App from './containers/App'
// import Home from './containers/Home'
import MangaHome from './containers/MangaHome'
// import MangaInfo from './containers/MangaInfo'
import MangaViewer from './containers/MangaViewer'
import NotFound from './containers/NotFound'

import Admin from './containers/Admin'

// Sync routing history with redux store
const history = syncHistoryWithStore(browserHistory, store)


// <Route onEnter={requireLogin}>
// </Route>

// Route configuration
export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={MangaHome} />
      <Route path="/manga" component={MangaHome} />
      <Route path="/manga/:id" component={MangaViewer} />

      {/* Auth!! */}
      <Route path="/admin" component={Admin} />

      <Route path="*" component={NotFound} status={404} />
    </Route>
  </Router>
)
