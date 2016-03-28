import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import configureStore from './configureStore'
import VideoContainer from './containers/videoContainer'

const store = configureStore({})

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={VideoContainer} />
    </Router>
  </Provider>
), document.getElementById('react-mount'))
