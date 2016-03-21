import { createStore, applyMiddleware } from 'redux'
import { compose } from 'fjs'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(promiseMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}
