import { handleActions, createAction } from 'redux-actions'

// TODO: Do I even need these consts or should I just rely on search
export const SET_VIDEO_INDEX = 'SET_VIDEO_INDEX'
export const VIDEO_FETCH_REQUESTED = 'VIDEO_FETCH_REQUESTED'
export const VIDEO_FETCH_SUCCEEDED = 'VIDEO_FETCH_SUCCEEDED'

export const selectVideo = state => state.get('video')
export const selectVideoIndex = state => state.get('videoIndex')
export const selectVideoUrl = state => state.get('videoUrl')

export const setVideoIndex = createAction(SET_VIDEO_INDEX, index => index);
export const videoFetchSucceeded =
  createAction(VIDEO_FETCH_SUCCEEDED, video => video);
export const videoFetchRequested =
  createAction(VIDEO_FETCH_REQUESTED, url => url)

export default handleActions({
  VIDEO_FETCH_REQUESTED: (state, action) => state.merge({
    videoUrl: action.payload,
  }),
  VIDEO_FETCH_SUCCEEDED: (state, action) => state.merge({
    video: action.payload,
  }),
  SET_VIDEO_INDEX: (state, action) => state.merge({
    videoIndex: action.payload,
  }),
})
