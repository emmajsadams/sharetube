import 'babel-polyfill';

import React from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import VideoContainer from './containers/videoContainer'

const store = configureStore({})

render((
  <Provider store={store}>
    <VideoContainer/>
  </Provider>
), document.body)

/*
<Router history={browserHistory}>
  <Route path="/" component={VideoContainer}/>
</Router>
*/
