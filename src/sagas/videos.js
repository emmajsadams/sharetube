import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { fetchJson } from '../lib/api'
import { videoFetchSucceeded, VIDEO_FETCH_REQUESTED } from '../reducers/videos'

export function* fetchVideo(action) {
  // TODO: handle error
  const video = yield call(fetchJson, action.payload);
  yield put(videoFetchSucceeded(video));
}

// TODO: how to test this?
export default function* videosSaga() {
  yield* takeLatest(VIDEO_FETCH_REQUESTED, fetchVideo);
}
