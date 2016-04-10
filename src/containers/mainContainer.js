import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import VideoContainer from './videoContainer'
import { videoFetchRequested } from '../reducers/videos'

// TODO: Better name for this?
const MainContainer = (props) => {
  props.dispatch(videoFetchRequested(props.location.query.videoUrl))
  return <VideoContainer />
}
MainContainer.propTypes = {
  dispatch: PropTypes.fn,
  location: PropTypes.object,
};

export default connect()(MainContainer)
