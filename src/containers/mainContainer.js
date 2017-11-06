import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string';

import VideoContainer from './videoContainer'
import { setVideoIndex, videoFetchRequested } from '../reducers/videos'

// TODO: Test MainContainer
export default connect()((props) => {
  const query = queryString.parse(location.search)
  props.dispatch(setVideoIndex(0))
  props.dispatch(videoFetchRequested(query.videoUrl))

  return <VideoContainer />
});