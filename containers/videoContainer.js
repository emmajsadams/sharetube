import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Video from '../components/video'

const VideoContainer = (props) => <Video video={props.video} />
VideoContainer.propTypes = {
  video: PropTypes.object,
};

export default connect(s => ({ video: s.video }))(VideoContainer)
