import { handleAction, createAction } from 'redux-actions'
import fetch from 'isomorphic-fetch'

const FETCH_VIDEO = 'FETCH_VIDEO'

export default handleAction(FETCH_VIDEO, {
  next: (state, action) => ({
    video: action.payload,
  }),
  throw: (state, action) => ({
    error: action.payload,
  }),
});

export const fetchVideo =
  createAction(FETCH_VIDEO, url => (fetch(url).then(req => req.json())))
