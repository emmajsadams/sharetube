import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import VideoContainer from './containers/videoContainer'

const store = configureStore({})

render((
  <Provider store={store}>
    <VideoContainer />
  </Provider>
), document.getElementById('react-mount'))
