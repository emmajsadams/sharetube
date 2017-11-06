import React, { PropTypes } from 'react'
import YouTube from 'react-youtube'
// import ReactDisqusThread from 'react-disqus-thread'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { Map } from 'immutable'
require('./video.css');

const noVideoFound = (<p>No video found</p>)
const width = 640
const height = 385

const createVideos = (props) => props.video.get('videos').map((v) => {
  const id = v.get('id')
  const video = Map({ video: v })
  switch (v.get('type')) {
    case 'youtube':
      // TODO: specify size to be consistent across videos?
      return video.set('element', <YouTube videoId={id} opts={{ width, height }} />)
    case 'vimeo':
      // TODO: react-vimeo does not work, file a bug report?
      return video.set('element', <iframe src={`https://player.vimeo.com/video/${id}`} width={width} height={height} frameBorder="0" allowFullScreen></iframe>)
    case 'html5':
      return video.set('element',
        <video width={width} height={height} controls>
          <source src={v.get('webm')} type="video/webm" />
          <source src={v.get('mp4')} type="video/mp4" />
          Your browser does not support the video tag.
          Support for flash might be coming, but use a modern browser till then
        </video>)
    default:
      return null
  }
}).filter(v => v !== null)

export default (props) => {
  if (!props.video) {
    return noVideoFound
  }

  const videoName = props.video.get('name')
  const videos = createVideos(props)
  const video = videos.get(props.index) || videos.first()

  if (!video) {
    return noVideoFound
  }

  // TODO: Refactor buttons into separate VideoButton component?
  return (<div>
    <h1 className="center-video">{videoName}</h1>
    <ButtonToolbar className="center-video">
      {videos.map((v, i) => (
        <Button
          key={i}
          bsStyle="primary"
          onClick={() => props.setVideoIndex(i)}
        >{v.get('video').get('name')}
        </Button>))}
    </ButtonToolbar>
    <br />
    <div className="center-video">
      {video.get('element')}
    </div>

  </div>)
}


/*
    <ReactDisqusThread
      shortname="blocktube"
      identifier={props.url}
      title={videoName}
    />
*/