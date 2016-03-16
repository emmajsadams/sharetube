import { createStore } from 'redux'
import fetch from 'isomorphic-fetch'

export function getJson(url) {
  fetch(url)
    .then(req => req.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}
