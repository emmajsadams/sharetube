import { handleAction, createAction } from 'redux-actions'

export const VIDEO_FETCH_REQUESTED = 'VIDEO_FETCH_REQUESTED';
export const VIDEO_FETCH_SUCCEEDED = 'VIDEO_FETCH_SUCCEEDED';

export const selectVideo = state => state.video

export const videoFetchSucceeded =
  createAction(VIDEO_FETCH_SUCCEEDED, video => video);

export const videoFetchRequested =
  createAction(VIDEO_FETCH_REQUESTED, url => ({ url }))

export default handleAction(VIDEO_FETCH_SUCCEEDED, {
  next: (state, action) => ({
    video: action.payload,
  }),
  throw: (state, action) => ({
    error: action.payload,
  }),
});
