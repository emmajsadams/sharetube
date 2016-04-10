import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import VideoContainer from './videoContainer'
import { setVideoIndex, videoFetchRequested } from '../reducers/videos'

// TODO: Better name for this?
const MainContainer = (props) => {
  props.dispatch(setVideoIndex(0))
  props.dispatch(videoFetchRequested(props.location.query.videoUrl))
  return <VideoContainer />
}
MainContainer.propTypes = {
  dispatch: PropTypes.fn,
  location: PropTypes.object,
};

export default connect()(MainContainer)
