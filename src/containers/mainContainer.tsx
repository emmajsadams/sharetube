import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as queryString from 'query-string'

import VideoContainer from './videoContainer'
import { fetchVideo } from '../api/videos';

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  fetchVideoFromUrl: () => dispatch(fetchVideo(queryString.parse(location.search).videoUrl))
});

// TODO: Test MainContainer
export default connect(null, mapDispatchToProps)(({ fetchVideoFromUrl }) => {
  fetchVideoFromUrl();
  return <VideoContainer />;
});
