import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape'
import YouTube from 'react-youtube'

import { Video } from './video'

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
}

test('<Video />', (t) => {
  t.test('should render youtube component when video has a youtube videoId', (assert) => {
    const videoId = 'pGuj-Z3PNg'
    const wrapper = shallow(<Video video={ { youtube: { videoIds: [videoId] } } } />)

    assert.true(wrapper.contains(<YouTube videoId={videoId} opts={opts} />),
      'render youtube component')
    assert.end();
  });
});
