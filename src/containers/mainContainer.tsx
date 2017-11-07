import * as queryString from "query-string";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchVideo } from "../api/videos";
import VideoContainer from "./videoContainer";

const mapDispatchToProps = (dispatch: Dispatch<void>) => ({
  fetchVideoFromUrl: () => dispatch(fetchVideo(queryString.parse(location.search).videoUrl)),
});

// TODO: Test MainContainer
export default connect(null, mapDispatchToProps)(({ fetchVideoFromUrl }) => {
  fetchVideoFromUrl();
  return <VideoContainer />;
});
