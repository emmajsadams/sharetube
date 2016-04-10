import 'babel-polyfill'
// import sagaMiddleware from 'redux-saga'

import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, Redirect, browserHistory } from 'react-router'

import configureStore from './configureStore'
import MainContainer from './containers/mainContainer'

const prefix = process.env.ROUTE_PREFIX || '/'
const store = configureStore({})

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={prefix} component={MainContainer} />
      <Redirect from="/" to={prefix} />
    </Router>
  </Provider>
), document.getElementById('react-mount'))
