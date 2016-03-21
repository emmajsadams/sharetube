import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

// TODO: move to another module?
function fetchUrlAsJson(url) {
  return fetch(url)
    .then(req => req.json())
}

export const FETCH_VIDEO = 'FETCH_VIDEO'
export const fetchVideo = createAction(FETCH_VIDEO, url => fetchUrlAsJson(url));
