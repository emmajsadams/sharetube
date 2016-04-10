import React, { PropTypes } from 'react'
import YouTube from 'react-youtube'
import ReactDisqusThread from 'react-disqus-thread'
import { Button } from 'react-bootstrap'
import _ from 'lodash'

const createVideos = (props) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  const video = props.video
  const youtubeIds = video.youtube ? video.youtube.videoIds : []
  const videos = []
  youtubeIds.map((youtubeId, i) =>
    videos.push({ buttonName: `YouTube ${i + 1}`,
      element: (<YouTube videoId={youtubeId} opts={opts} />) })
  )

  return videos
}

export const Video = (props) => {
  if (!props.video) {
    return (<div />)
  }

  const videos = createVideos(props)
  const video = _.head(videos)

  return (<div>
    <h1>{props.video.name}</h1>
    <p>
      {videos.map((v, i) => <Button key={i} bsStyle="primary">{v.buttonName}</Button>)}
    </p>
    {video ? video.element : (<p>No video found</p>)}
    <ReactDisqusThread
      shortname="blocktube"
      identifier={props.video.id}
      title={props.video.name}
    />
  </div>)
}
Video.propTypes = {
  video: PropTypes.object,
};

export default Video

/*
import { Button } from 'react-bootstrap'
<Button bsStyle="primary" onClick={getVideo}>Get Json</Button>
*/
