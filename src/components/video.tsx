import { upperFirst } from "lodash";
import * as React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import ReactDisqusComments from "react-disqus-comments";
import YouTube from "react-youtube";
import { Source, Video } from "../types";
import "./video.css";

const supportedSourceTypes = ["mp4", "ogg", "webm"];

const createSourceTags = (source: Source) =>
  supportedSourceTypes
    .map((videoType) => {
      const videoSrc = source.values[videoType];
      return videoSrc ? <source key={videoType} src={videoSrc} type={"video/" + videoType} /> : null;
    })
    .filter((video) => video !== null);

const createVideo = (source: Source, height: number, width: number): React.ReactNode => {
  const sourceId: string = source.values["id"];
  switch (source.type) {
    case "youtube":
      return <YouTube videoId={sourceId} opts={{ width, height }} />;
    case "vimeo" :
      return <iframe
        src={`https://player.vimeo.com/video/${sourceId}`}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen>
      </iframe>;
    case "html5" :
      return <video width={width} height={height} controls>
        { createSourceTags(source) }
        Your browser does not support the video tag.
        Support for flash might be coming, but use a modern browser till then
      </video>;
    default:
      return null;
  }
};

interface Props {
  height: number;
  index: number;
  setVideoIndex: (i: number) => void;
  url: string;
  video: Video;
  width: number;
}

export default ({ height, index = 0, setVideoIndex, url, video, width }: Props) => {
  if (!video) {
    return null;
  }

  const sources = video.sources;
  const selectedSource = sources[index];
  if (!selectedSource) {
    return <p>No source found at that index</p>;
  }

  const videoName = video.name;

  // TODO: Refactor buttons into separate VideoButton component?
  return <div>
    <h1 className="center-video">{videoName}</h1>
    <ButtonToolbar className="center-video">
      {
        sources.map((source, i) =>
          <Button
            key={source.type}
            bsStyle="primary"
            onClick={() => { setVideoIndex(i); }}
          >
            {upperFirst(source.type)}
          </Button>)
      }
    </ButtonToolbar>
    <br />
    <div className="center-video">
      { createVideo(selectedSource, height, width) }
    </div>
    <ReactDisqusComments
      shortname="blocktube"
      identifier={url}
      title={videoName}
    />
  </div>;
};
