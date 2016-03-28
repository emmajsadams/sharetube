import configureStore from '../configureStore'
import test from 'blue-tape'
import sinon from 'sinon'
import 'sinon-as-promised'
const proxyquire = require('proxyquire')

import { selectVideo } from './videos'

test('videos', (t) => {
  t.test('should fetchVideo', (assert) => {
    const url = 'http://example.com/'
    const response = { id: 1 }
    const fetchJson = sinon.stub().resolves(response)
    const video = proxyquire('./videos', {
      '../lib/api': { fetchJson },
    })

    const store = configureStore({})

    store.dispatch(video.fetchVideo(url))
      .then(() => {
        assert.deepEqual(selectVideo(store.getState()), response,
          'state.video equals fetchJson response')
        assert.true(fetchJson.withArgs(url).calledOnce, 'fetchJson called with url once')

        assert.end()
      })
  });
});

/*
TODO do I even need to assert this? seems to go against the idea of testing ducks as one
const actions = store.getActions()

assert.deepEqual(actions[0], { payload, type: FETCH_VIDEO },
  'result should be FSA for fetch video');
*/
