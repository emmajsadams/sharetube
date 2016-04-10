import { createStore, applyMiddleware } from 'redux'
import { compose } from 'fjs'
import createSagaMiddleware from 'redux-saga'

// TODO: use immmuteable js to combine reducers when needed
import videosReducer from './reducers/videos'
import videosSaga from './sagas/videos'

const sagaMiddleware = createSagaMiddleware(videosSaga)
const devTools = typeof window !== 'undefined' && window.devToolsExtension
 ? window.devToolsExtension()
 : f => f

export default function configureStore(initialState) {
  return createStore(
    videosReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      devTools
    ));
}
