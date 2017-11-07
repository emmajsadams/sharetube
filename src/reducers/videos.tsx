import { Action, createAction, handleActions } from "redux-actions";
import { StoreState, Video } from "../types";

// TODO: Fix type safety for this (may need to ditch redux-actions)
// EX: `sourceIndex` was still `videoIndex`, but typescript succeeded.
// See https://github.com/Microsoft/TypeScript-React-Starter reducer/index
export default handleActions({
  SET_SOURCE_INDEX: (state, action) => ({ ...state, sourceIndex: action.payload }),
  VIDEO_FETCH_REQUESTED: (state, action) => ({ ...state, videoUrl: action.payload }),
  VIDEO_FETCH_SUCCEEDED: (state, action) => ({ ...state, video: action.payload }),
}, {});
