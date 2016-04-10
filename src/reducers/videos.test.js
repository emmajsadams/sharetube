import 'babel-polyfill'
import configureStore from '../configureStore'
import test from 'tape'
import { fromJS } from 'immutable';

import { videoFetchSucceeded, selectVideo } from './videos'

test('reducers/videos', (t) => {
  t.test('should videoFetchSucceeded', (assert) => {
    const video = { id: 0 }
    const store = configureStore(fromJS({}))

    store.dispatch(videoFetchSucceeded(video))

    assert.true(selectVideo(store.getState()).equals(fromJS(video)),
      'state.video equals expected')
    assert.end()
  });
});
