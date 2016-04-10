import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Video from '../components/video'
import { selectVideo, selectVideoIndex, setVideoIndex, selectVideoUrl } from '../reducers/videos'

// TODO: Test VideoContainer
const VideoContainer = (props) =>
  (<Video
    video={props.video}
    index={props.index}
    setVideoIndex={i => props.dispatch(setVideoIndex(i))}
    url={props.url}
  />)
VideoContainer.propTypes = {
  dispatch: PropTypes.any, // TODO: Why does this complain that it is not a function
  index: PropTypes.number,
  video: PropTypes.object,
  url: PropTypes.string,
};

export default connect(s => ({
  index: selectVideoIndex(s),
  video: selectVideo(s),
  url: selectVideoUrl(s),
}))(VideoContainer)
