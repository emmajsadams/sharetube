import 'babel-polyfill'
import configureStore from '../configureStore'
import test from 'tape'

import { videoFetchSucceeded, selectVideo } from './videos'

test('reducers/videos', (t) => {
  t.test('should videoFetchSucceeded', (assert) => {
    const video = {}
    const store = configureStore({})

    store.dispatch(videoFetchSucceeded(video))

    assert.deepEqual(selectVideo(store.getState()), video,
      'state.video equals expected')
    assert.end()
  });
});
