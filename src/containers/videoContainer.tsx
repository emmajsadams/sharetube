import * as React from 'react'
import { connect } from 'react-redux'
import { setSourceIndex } from '../actions/videos'
import Video from '../components/video'
import { selectVideo, selectSourceIndex, selectVideoUrl } from '../selectors/videos'
import { StoreState } from '../types';

const mapStateToProps = (state: StoreState) => ({
  index: selectSourceIndex(state),
  video: selectVideo(state),
  url: selectVideoUrl(state),
});

// TODO: Test VideoContainer?
export default connect(mapStateToProps)(({ video, index, url, dispatch }) =>
  (<Video
    video={video}
    index={index}
    setVideoIndex={i => { dispatch(setSourceIndex(i)) }}
    url={url}
  />)
);
