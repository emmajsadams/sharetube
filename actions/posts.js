import { getJson } from './api'

export const REQUEST_VIDEO = 'REQUEST_VIDEO'

function requestVideo(url) {
  return {
    type: REQUEST_VIDEO,
    url
  }
}

function fetchVideo(subreddit) {
  return dispatch => {
    dispatch(requestVideo(subreddit))
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(req => req.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldfetchVideo(state, subreddit) {
  const video = state.video
  if (!video) {
    return true
  } else if (video.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchVideoIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldfetchVideo(getState(), subreddit)) {
      return dispatch(fetchVideo(subreddit))
    }
  }
}
