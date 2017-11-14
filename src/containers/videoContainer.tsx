import * as React from "react";
import { connect } from "react-redux";
import { setSourceIndex } from "../actions/videos";
import Video from "../components/video";
import { selectSourceIndex, selectVideo, selectVideoUrl } from "../selectors/videos";
import { StoreState } from "../types";

const mapStateToProps = (state: StoreState) => ({
  index: selectSourceIndex(state),
  url: selectVideoUrl(state),
  video: selectVideo(state),
});

// TODO: Test VideoContainer?
export default connect(mapStateToProps)(({ video, index, url, dispatch }) =>
  (<Video
    video={video}
    index={index}
    height={385}
    width={640}
    setVideoIndex={(i) => { dispatch(setSourceIndex(i)); }}
    url={url}
  />),
);
