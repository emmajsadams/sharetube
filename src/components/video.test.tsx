/*import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape'
import { fromJS } from 'immutable'
import YouTube from 'react-youtube'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { Video } from './video'
import { stub } from 'sinon'

const id = 'pGuj-Z3PNg'
let setVideoIndex = stub()
const width = 640
const height = 385
const noVideoFound = <p>No video found</p>

test('<Video />', (t) => {
  // TODO: Test for <Video /> custom index

  t.test('should render buttons from valid video services', (assert) => {
    const youtubeName = 'youtubeName'
    const vimeoName = 'vimeoName'
    const video = fromJS({
      videos: [
        { type: 'youtube', name: youtubeName, id },
        { type: 'vimeo', name: vimeoName, id },
      ],
    })

    const sut = shallow(<Video index={0} setVideoIndex={() => null} video={video} />)

    const $buttons = sut.find(ButtonToolbar).children()
    const $youtubeButton = $buttons.first()
    const $vimeoButton = $buttons.at(1)
    assert.equal($buttons.length, 2)
    assert.true($youtubeButton.equals(<Button
      key={0}
      bsStyle="primary"
      onClick={$youtubeButton.props().onClick}
    >{youtubeName}
    </Button>), 'youtube button rendered')
    assert.true($vimeoButton.equals(<Button
      key={1}
      bsStyle="primary"
      onClick={$vimeoButton.props().onClick}
    >{vimeoName}
    </Button>), 'vimeo button rendered')
    assert.end()
  });

  t.test('should render buttons from valid video services', (assert) => {
    const youtubeName = 'youtubeName'
    const vimeoName = 'vimeoName'
    const video = fromJS({
      videos: [
        { type: 'youtube', name: youtubeName, id },
        { type: 'vimeo', name: vimeoName, id },
      ],
    })

    const $sut = shallow(<Video index={0} setVideoIndex={setVideoIndex} video={video} />)
    const $buttons = $sut.find(ButtonToolbar).children()
    $buttons.first().simulate('click')
    $buttons.at(1).simulate('click')

    assert.true(setVideoIndex.withArgs(0).calledOnce, 'youtube button called once')
    assert.true(setVideoIndex.withArgs(1).calledOnce, 'vimeo button called once')
    assert.end()
  });

  t.test('should render youtube when videos contains one youtube type', (assert) => {
    const video = fromJS({ videos: [{ id, type: 'youtube' }] })

    const $sut = shallow(<Video setVideoIndex={setVideoIndex} video={video} />)

    assert.true($sut.contains(
      <YouTube videoId={id} opts={{ width, height }} />), 'render youtube component')
    assert.end()
  });

  t.test('should render vimeo when videos contains one vimeo type', (assert) => {
    const video = fromJS({ videos: [{ id, type: 'vimeo' }] })

    const $sut = shallow(<Video setVideoIndex={setVideoIndex} video={video} />)

    assert.true($sut.contains(<iframe src={`https://player.vimeo.com/video/${id}`} width={width} height={height} frameBorder="0" allowFullScreen></iframe>),
      'render vimeo component')
    assert.end()
  });

  t.test('should render html5 with mp4 & webm when videos contains one html5 type', (assert) => {
    const webm = 'http://webm'
    const mp4 = 'http://mp4'
    const video = fromJS({ videos: [{ type: 'html5', mp4, webm }] })

    const $sut = shallow(<Video setVideoIndex={setVideoIndex} video={video} />)

    assert.true($sut.contains(
      <video width={width} height={height} controls>
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
        Your browser does not support the video tag.
        Support for flash might be coming, but use a modern browser till then
      </video>),
      'render vimeo component')
    assert.end()
  });

  t.test('should have disqus thread', (assert) => {
    const url = 'http://goo'
    const name = 'A complete history of western sword fighting'
    const overallVideoId = '34271290-232324-24242-424242'
    const video = fromJS({ id: overallVideoId, name, videos: [{ id, type: 'vimeo' }] })

    const $sut = shallow(
      <Video index={0} setVideoIndex={setVideoIndex} video={video} url={url} />)

    assert.true($sut.contains(
      <ReactDisqusThread
        shortname="blocktube"
        identifier={url}
        title={name}
      />),
      'render disqus thread')
    assert.end()
  });

  t.test('should show no video found when props.video is undefined', (assert) => {
    const $sut = shallow(<Video index={0} setVideoIndex={setVideoIndex} />)

    assert.true($sut.equals(noVideoFound), 'render no video found')
    assert.end()
  });

  t.test('should show no video found when there are no videos', (assert) => {
    const video = fromJS({ videos: [] })

    const $sut = shallow(<Video index={0} setVideoIndex={setVideoIndex} video={video} />)

    assert.true($sut.equals(noVideoFound), 'render no video found')
    assert.end()
  });

  t.test('should show no video found when there are no compatible videos', (assert) => {
    const video = fromJS({ videos: [{ type: 'totally fake vid service', id }] })

    const $sut = shallow(<Video index={0} setVideoIndex={setVideoIndex} video={video} />)

    assert.true($sut.equals(noVideoFound), 'render no video found')
    assert.end()
  });
});
*/
