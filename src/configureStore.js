import { createStore, applyMiddleware } from 'redux'
import { compose } from 'fjs'
import createSagaMiddleware from 'redux-saga'
import { Map } from 'immutable';

import videosReducer from './reducers/videos'
import videosSaga from './sagas/videos'

export default function configureStore(initialState = {}) {
  const devTools = typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    videosReducer,
    Map(initialState),
    compose(
      applyMiddleware(sagaMiddleware),
      devTools
    ));
  sagaMiddleware.run(videosSaga);

  return store;
}
