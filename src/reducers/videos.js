import { handleAction, createAction } from 'redux-actions'
import { fetchJson } from '../lib/api'

export const FETCH_VIDEO = 'FETCH_VIDEO'

export const fetchVideo =
  createAction(FETCH_VIDEO, url => fetchJson(url))

export const selectVideo = state => state.video

export default handleAction(FETCH_VIDEO, {
  next: (state, action) => ({
    video: action.payload,
  }),
  throw: (state, action) => ({
    error: action.payload,
  }),
});
