// Global css
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// Global libraries
import 'babel-polyfill'

//---------------------------------------------------------------

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import configureStore from './configureStore'
import MainContainer from './containers/mainContainer'

const store = configureStore()
const history = createHistory()

render((
  <Provider store={store}>
    <MainContainer history={history} />
  </Provider>
), document.getElementById('react-mount'))
