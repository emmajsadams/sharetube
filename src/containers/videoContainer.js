import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Video from '../components/video'

const VideoContainer = (props) => <Video video={JSON.parse(props.location.query.video)} />
VideoContainer.propTypes = {
  location: PropTypes.object,
};

export default connect(s => ({ video: s.video }))(VideoContainer)

/*
// TODO: get video from videoURl param instead of straight json
import { fetchVideo } from '../reducers/videos'

const url = 'https://raw.githubusercontent.com/codystebbins/dstruct/master/tsd.json';
const getVideo = () => props.dispatch(fetchVideo(url))
*/
