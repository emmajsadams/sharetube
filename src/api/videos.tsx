import { Dispatch } from "redux";
import { VideoFetchActions, videoFetchRequested, videoFetchSucceeded } from "../actions/videos";

export const fetchJson = (url: string) => fetch(url).then((r) => r.json());

export const fetchVideo = (url: string) => async (dispatch: Dispatch<VideoFetchActions>) => {
  dispatch(videoFetchRequested(url));

  const video = await fetchJson(url);

  dispatch(videoFetchSucceeded(video));
};
