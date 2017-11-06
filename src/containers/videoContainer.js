import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Video from '../components/video'
import { selectVideo, selectVideoIndex, setVideoIndex, selectVideoUrl } from '../reducers/videos'

const connector = s => ({
  index: selectVideoIndex(s),
  video: selectVideo(s),
  url: selectVideoUrl(s),
});

// TODO: Test VideoContainer?
export default connect(connector)((props) =>
  (<Video
    video={props.video}
    index={props.index}
    setVideoIndex={i => props.dispatch(setVideoIndex(i))}
    url={props.url}
  />)
);
