import React, { PropTypes } from 'react'
import YouTube from 'react-youtube'
import ReactDisqusThread from 'react-disqus-thread'
import { Button } from 'react-bootstrap'
import { Map } from 'immutable'

const noVideoFound = (<p>No video found</p>)

const createVideos = (props) => props.video.get('videos').map((v) => {
  const id = v.get('id')
  const video = Map({ video: v })
  switch (v.get('type')) {
    case 'youtube':
      // TODO: specify size to be consistent across videos?
      return video.set('element', <YouTube videoId={id} />)
    case 'vimeo':
      // TODO: react-vimeo does not work, file a bug report?
      return video.set('element', <iframe src={`https://player.vimeo.com/video/${id}`} width="640" height="385" frameBorder="0" allowFullScreen></iframe>)
    default:
      return null
  }
}).filter(v => v !== null)

export const Video = (props) => {
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
    <h1>{videoName}</h1>
    <p>
      {videos.map((v, i) => (
        <Button
          class="button"
          key={i}
          bsStyle="primary"
          onClick={() => props.setVideoIndex(i)}
        >{v.get('video').get('name')}
        </Button>))}
    </p>
    {video.get('element')}
    <ReactDisqusThread
      shortname="blocktube"
      identifier={props.video.get('id')}
      title={videoName}
    />
  </div>)
}
Video.propTypes = {
  index: PropTypes.number,
  setVideoIndex: PropTypes.func,
  video: PropTypes.object,
};

export default Video
