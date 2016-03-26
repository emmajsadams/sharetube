import { createStore, applyMiddleware } from 'redux'
import { compose } from 'fjs'
import promiseMiddleware from 'redux-promise'

// TODO: use immmuteable js to combine reducers
import videos from './reducers/videos'

export default function configureStore(initialState) {
  return createStore(
    videos,
    initialState,
    compose(
      applyMiddleware(promiseMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}
