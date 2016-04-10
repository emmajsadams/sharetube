import { createStore, applyMiddleware } from 'redux'
import { compose } from 'fjs'
import createSagaMiddleware from 'redux-saga'
import { Map } from 'immutable';

import videosReducer from './reducers/videos'
import videosSaga from './sagas/videos'

/*
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  videos: videosReducer,
})
*/
const sagaMiddleware = createSagaMiddleware(videosSaga)
const devTools = typeof window !== 'undefined' && window.devToolsExtension
 ? window.devToolsExtension()
 : f => f

export default function configureStore(initialState = {}) {
  return createStore(
    videosReducer,
    Map(initialState),
    compose(
      applyMiddleware(sagaMiddleware),
      devTools
    ));
}
