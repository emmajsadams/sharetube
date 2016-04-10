import 'babel-polyfill'
// import sagaMiddleware from 'redux-saga'

import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import configureStore from './configureStore'
import MainContainer from './containers/mainContainer'

const store = configureStore({})

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} />
    </Router>
  </Provider>
), document.getElementById('react-mount'))
