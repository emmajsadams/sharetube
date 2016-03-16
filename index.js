import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore'

const store = configureStore({ text: [ 'Use Redux', 'You Big', 'Dummy!' ] })

ReactDOM.render(
  <p>{store.getState().text.join(',')}</p>,
  document.getElementById('body'))
