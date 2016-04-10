import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import VideoContainer from './videoContainer'
import { setVideoIndex, videoFetchRequested } from '../reducers/videos'

// TODO: Better name for MainContainer?
// TODO: Test MainContainer
const MainContainer = (props) => {
  props.history.listen((location) => {
    props.dispatch(setVideoIndex(0))
    props.dispatch(videoFetchRequested(location.query.videoUrl))
  })

  return <VideoContainer />
}
MainContainer.propTypes = {
  dispatch: PropTypes.any, // TODO: Why does this complain that it is not a function
  history: PropTypes.object,
};

export default connect()(MainContainer)
