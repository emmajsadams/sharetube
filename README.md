# sharetube [![Build Status](https://travis-ci.org/codystebbins/blocktube.svg?branch=master)](https://travis-ci.org/codystebbins/blocktube)

Shares a redundantly uploaded video. [Demo](https://codystebbins.com/blocktube/?videoUrl=https://gist.githubusercontent.com/codystebbins/0f02004fd00caa230c843d944145f1c6/raw/4f6843aec0bf845740c515c59153e00ba8bf08a5/video.json) & [video.json used in demo](https://gist.github.com/codystebbins/0f02004fd00caa230c843d944145f1c6)

* Supports YouTube, Vimeo, and HTML5 video (mp4 or WebM).
* Creates a disqus thread based on the url of the videoUrl specified so comments persist despite a changing json file.
* Use the hosted version at `https://codystebbins.com/blocktube/?videoUrl=` or host your own (latest release in `gh-pages` branch)
* Only supported in modern browsers.

Suggest features and file bugs via Github Issues.

## video.json

A `video.json` file must be specified via the `videoUrl=` query param. This section explains how to create one.

#### Metadata
```
{
  "name":"Sintel Trailer",
  "sources": [ { type: "...", "values": { ... } } ]
}
```
* `name` is the name of the video.
* `sources` contains the various sources for the video. Each source must have a `type` property which determines which values to provide for the `values` property.

#### YouTube
```
{
  "type": "youtube",
  "values": { "id": "Fp0FCqeTp7g" }
},
```
* `id` is the youtube id of the video. From the `v` query param on a video url. EX: `https://www.youtube.com/watch?v=S7doAXkmGJw`

#### Vimeo
```
{
  "type": "vimeo",
  "values": { "id": "131768374" }
},
```
* `id` is the vimeo id of the video. At the end of a video url. EX: `https://vimeo.com/59549698`

#### HTML5
```
{
  "type": "html5",
  "values": {
    "mp4": "https://media.w3.org/2010/05/sintel/trailer.mp4",
    "webm": "https://media.w3.org/2010/05/sintel/trailer.webm",
    "ogg": "https://media.w3.org/2010/05/sintel/trailer.ogv"
  }
}
```
* `mp4` is the url of the mp4 encoded video
* `webm` is the url of the webm encoded video
* `ogg` is the url of the ogg encoded video
* Not providing all three html5 values will mean support across browsers is limited. All three values should be coming from the same source (EX: https://media.w3.org) 

## Developing
* `npm run dev` - webpack-dev-server running app. TODO: expand on this once linting and testing is working
* `npm run browser-test --silent` - parallel browser test run, meant to be done on developer machines
* `npm test` - test run for ci using node
* `npm run build` - build app for distribution. `/app`

#### Recommended Development Environment
* Developed on OSX. Should work on Unix environments. Unsure if works on Windows.
* Using VSCode the following extensions: `TSLint` and `EditorConfig`
* Install https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
* Install https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Influences
* Redux best practices https://github.com/reactjs/redux/issues/1171s
* Inline CSS via React: https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/
* Style: https://github.com/airbnb/javascript

#### TypeScript
* https://github.com/Microsoft/TypeScript-React-Starter

#### Architecture
* Containers vs components
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.s7qsqghzc
 * https://gist.github.com/chantastic/fc9e3853464dffdb1e3c
* Ducks (actions and reducers in same file): https://github.com/erikras/ducks-modular-redux

#### Routing (not used in this project yet)
* https://github.com/reactjs/react-router
* https://github.com/reactjs/react-router-redux

#### Testing
* https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.44yxbzesv

#### Build tools
* https://gist.github.com/substack/68f8d502be42d5cd4942
* http://blog.namangoel.com/browserify-vs-webpack-js-drama

----------------

#### Developer TODOs
* Create flowchart for rendering video (see slack notification chart https://mobile.twitter.com/codevisuals/status/838881724016787457/photo/1https://mobile.twitter.com/codevisuals/status/838881724016787457/photo/1)
* Change name? Potentially sharetube? Will need to update resume services.
* Update recommended reading in general and potentially add the following
 * http://source.coveo.com/2016/05/11/isomorphic-typescript-ava-w-coverage/
* UI test
 * https://voice.kadira.io/introducing-react-storybook-ec27f28de1e2#.2r53s4981
 * http://www.uiharness.com/quick-start/
* Custom forms for creating & editing video.json files
* Analytics support (segment, google analytics, etc..)
