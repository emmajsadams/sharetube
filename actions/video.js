import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const FETCH_VIDEO = 'FETCH_VIDEO'

function fetchUrlAsJson(url) {
  return fetch(url)
    .then(req => req.json())
}

export const fetchVideo = createAction(FETCH_VIDEO, async url => {
  const result = await fetchUrlAsJson(url);
  return result;
});
