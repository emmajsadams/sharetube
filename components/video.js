import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { fetchVideo } from '../reducers/videos'

const Video = (props) => {
  // TODO: get url from video?
  const url = 'https://raw.githubusercontent.com/codystebbins/dstruct/master/tsd.json';
  const getVideo = () => props.dispatch(fetchVideo(url))

  return (<div>
    <p>{JSON.stringify(props.video)}</p>
    <Button bsStyle="primary" onClick={getVideo}>Get Jso</Button>
  </div>)
}
Video.propTypes = {
  video: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Video)
