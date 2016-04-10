import test from 'tape'
import { call } from 'redux-saga/effects'

import { fetchJson } from '../lib/api'
import { fetchVideo } from './videos'
import { videoFetchRequested } from '../reducers/videos'

test('sagas/reducers', (t) => {
  t.test('should videoFetchSucceeded', (assert) => {
    const url = 'url'

    const iterator = fetchVideo(videoFetchRequested(url))

    assert.deepEqual(iterator.next().value, call(fetchJson, url),
     'state.video equals expected')
    assert.end()
  });
});
