import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import VideoContainer from './videoContainer'
import { setVideoIndex, videoFetchRequested } from '../reducers/videos'

// TODO: Better name for this?
const MainContainer = (props) => {
  props.history.listen((location) => {
    props.dispatch(setVideoIndex(0))
    props.dispatch(videoFetchRequested(location.query.videoUrl))
  })

  return <VideoContainer />
}
MainContainer.propTypes = {
  dispatch: PropTypes.fn,
  history: PropTypes.object,
};

export default connect()(MainContainer)
