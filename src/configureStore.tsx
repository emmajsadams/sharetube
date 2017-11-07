import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import videosReducer from './reducers/videos'
import { StoreState } from './types';

export default function configureStore(initialState: StoreState = {}) {
  return createStore(
    videosReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
