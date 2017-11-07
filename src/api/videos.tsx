import { Dispatch } from 'redux';
import { videoFetchRequested, videoFetchSucceeded, VideoFetchActions } from '../actions/videos'

export const fetchJson = (url: string) => fetch(url).then(r => r.json())

export function fetchVideo(url: string) {
  return async function (dispatch: Dispatch<VideoFetchActions>) {
    dispatch(videoFetchRequested(url))

    const video = await fetchJson(url)

    dispatch(videoFetchSucceeded(video))
  }
}
