import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string';

import VideoContainer from './videoContainer'
import { setVideoIndex, videoFetchRequested } from '../reducers/videos'

// TODO: Better name for MainContainer?
// TODO: Test MainContainer
const MainContainer = (props) => {
  const query = queryString.parse(location.search)
  props.dispatch(setVideoIndex(0))
  props.dispatch(videoFetchRequested(query.videoUrl))

  return <VideoContainer />
}
MainContainer.propTypes = {
  dispatch: PropTypes.any, // TODO: Why does this complain that it is not a function
  history: PropTypes.object,
};

export default connect()(MainContainer)
