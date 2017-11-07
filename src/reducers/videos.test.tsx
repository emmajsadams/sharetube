import configureStore from '../configureStore'
import * as test from 'tape'
import { isEqual } from 'lodash';

import { videoFetchSucceeded } from '../actions/videos'
import { selectVideo } from '../selectors/videos'

test('reducers/videos', (t) => {
  t.test('should videoFetchSucceeded', (assert) => {
    const video = { name: 'name', sources: [{ id: 'id', type: 'type', name: 'name' }] }
    const store = configureStore({})

    store.dispatch(videoFetchSucceeded(video))

    assert.true(isEqual(selectVideo(store.getState()), video),
      'state.video equals expected')
    assert.end()
  });
});
