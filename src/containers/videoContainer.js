import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Video from '../components/video'
import { selectVideo, selectVideoIndex, setVideoIndex } from '../reducers/videos'

const VideoContainer = (props) =>
  (<Video
    video={props.video}
    index={props.index}
    setVideoIndex={i => props.dispatch(setVideoIndex(i))}
  />)
VideoContainer.propTypes = {
  dispatch: PropTypes.fn,
  index: PropTypes.number,
  video: PropTypes.object,
};

export default connect(s => ({
  index: selectVideoIndex(s),
  video: selectVideo(s),
}))(VideoContainer)
