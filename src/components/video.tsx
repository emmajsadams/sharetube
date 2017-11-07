import * as React from 'react'
import YouTube from 'react-youtube'
import ReactDisqusComments from 'react-disqus-comments';
import { Button, ButtonToolbar } from 'react-bootstrap'
import { Video, Source } from '../types';
require('./video.css');

const width = 640
const height = 385
const supportedVideoTypes = ['mp4', 'ogg', 'webm'];

/*const createSourceTags = (source: Source) =>
  supportedVideoTypes
    .map(videoType => {
      const videoSrc = source[videoType]
      return videoSrc ? <source key={videoType} src={videoSrc} type={"video/" + videoType} /> : null
    })
    .filter(video => video !== null)*/

const createVideo = (source: Source): React.ReactNode => {
  const id = source.id;
  switch (source.type) {
    case 'youtube':
      return <YouTube videoId={id} opts={{ width, height }} />;
    case 'vimeo':
      return <iframe src={`https://player.vimeo.com/video/${id}`} width={width} height={height} frameBorder="0" allowFullScreen></iframe>;
    /*case 'html5':
      return <video width={width} height={height} controls>
        { createSourceTags(source) }
        Your browser does not support the video tag.
        Support for flash might be coming, but use a modern browser till then
      </video>
    */
    default:
      return null;
  }
}

interface Props {
  video: Video;
  index: number;
  setVideoIndex: (i: number) => void;
  url: string;
}

export default ({ video, index = 0, setVideoIndex, url }: Props) => {
  if (!video) {
    return null
  }

  // TODO: Manually throw index out of bounds error? Or just rely on noVideoFound case?
  const sources = video.sources;
  const source = sources[index]
  if (!source) {
    return null
  }

  const videoName = video.name

  // TODO: Refactor buttons into separate VideoButton component?
  return <div>
    <h1 className="center-video">{videoName}</h1>
    <ButtonToolbar className="center-video">
      {
        sources.map((source, i) =>
          <Button
            key={source.name}
            bsStyle="primary"
            onClick={() => { setVideoIndex(i) }}
          >
            {source.name}
          </Button>)
      }
    </ButtonToolbar>
    <br />
    <div className="center-video">
      { createVideo(source) }
    </div>
    <ReactDisqusComments
      shortname="blocktube"
      identifier={url}
      title={videoName}
    />
  </div>
}
