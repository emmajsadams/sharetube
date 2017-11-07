import { handleActions, createAction, Action } from 'redux-actions'
import { StoreState, Video } from '../types';

// TODO: Fix type safety for this (may need to ditch redux-actions)
// EX: `sourceIndex` was still `videoIndex`, but typescript succeeded.
// See https://github.com/Microsoft/TypeScript-React-Starter/blob/c02986586c499cd86774c34535ef1e7f7d35ff6c/src/reducers/index.tsx
export default handleActions({
  VIDEO_FETCH_REQUESTED: (state, action) => ({ ...state, videoUrl: action.payload }),
  VIDEO_FETCH_SUCCEEDED: (state, action) => ({ ...state, video: action.payload }),
  SET_SOURCE_INDEX: (state, action) => ({ ...state, sourceIndex: action.payload }),
}, {})
