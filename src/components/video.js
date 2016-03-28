import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import YouTube from 'react-youtube'
import ReactDisqusThread from 'react-disqus-thread'
import { Row, Col, Button } from 'react-bootstrap'

export const Video = (props) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const video = props.video

  // TODO: more sophisciated logic than this?
  const videoId = video.youtube.videoIds[0]

  return (<div>
    <Row>
      <Col xs={6}>
        <h1>{video.name}</h1>
        <p>
          <Button bsStyle="primary">Youtube</Button>
          <Button bsStyle="primary">Vimeo</Button>
        </p>
        <YouTube
          videoId={videoId}
          opts={opts}
        />
      </Col>
      <Col xs={6}>
      </Col>
    </Row>
    <Row>
      <ReactDisqusThread
        shortname="blocktube"
        identifier={props.video.id}
        title={video.name}
      />
    </Row>
  </div>)
}
Video.propTypes = {
  video: PropTypes.object,
};

export default connect()(Video)

/*
import { Button } from 'react-bootstrap'
<Button bsStyle="primary" onClick={getVideo}>Get Json</Button>
*/
