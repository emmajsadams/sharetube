# blocktube [![Build Status](https://travis-ci.org/codystebbins/blocktube.svg?branch=master)](https://travis-ci.org/codystebbins/blocktube)

Shares a redundantly uploaded video. [Demo](https://codystebbins.com/blocktube/?videoUrl=https://codystebbins.com/public/blocktube/sotu2013.json) & [video.json](https://codystebbins.com/public/blocktube/sotu2013.json)

* Supports YouTube, Vimeo, and HTML5 video (mp4 or WebM).
* Creates a disqus thread based on the url of the videoUrl specified so comments persist despite a changing json file.
* Use the hosted version at `https://codystebbins.com/blocktube/?videoUrl=` or host your own (latest release in `gh-pages` branch)
* Only supported in modern browsers.

Suggest features and file bugs via Github Issues.

## video.json

Blocktube requires a `video.json` file to be specified via the `videoUrl=` query param. This section explains how to create one. It's recommended that to host the
json file on a custom own domain so that storage providers can be changed easily via DNS without impacting blocktube urls in the wild or the disqus thread that uses the json url as an id.

#### Metadata
```
{
  "name":"US State of the Union 2013",
  "videos": [ ... ]
}
```
* `name` is the name of the video
* `videos` contains the many different sources of a blocktube video. Each element must contain one of the following types, which all have the following properties.
 * `name` is the name of the button
 * `type` is the name of the service

#### YouTube
```
{
  "type": "youtube",
  "id": "S7doAXkmGJw",
  "name": "WH Youtube"
},
```
* `id` is the YoutubeId of the video. From the `v` query param on a video url. EX: `https://www.youtube.com/watch?v=S7doAXkmGJw`

#### Vimeo
```
{
  "type": "vimeo",
  "id": "59549698",
  "name": "WH Vimeo"
},
```
* `id` is the VimeoId of the video. At the end of a video url. EX: `https://vimeo.com/59549698`

#### HTML5
```
{
  "type": "html5",
  "mp4": "http://www.whitehouse.gov/videos/2013/February/021213_StateoftheUnion_NoGFX_HD.mp4",
  "webm": "https://upload.wikimedia.org/wikipedia/commons/5/59/2014_State_Of_The_Union_Address_Enhanced.webm",
  "name": "WH & WikiPedia HTML5"
}
```
* `mp4` is the url of the mp4 encoded video
* `webm` is the url of the webm encoded video
* Recommended to specify both because some browsers only support one or the other.

## Developing
* `npm run dev` - webpack-dev-server running app. TODO: expand on this once linting and testing is working
* `npm run browser-test --silent` - parallel browser test run, meant to be done on developer machines
* `npm test` - test run for ci using node
* `npm run build` - build app for distribution. `/app`

#### Recommended Development Environment
* OSX or Unix. Windows not supported
* Using Atom with `linter-eslint`, `react`, and `editorconfig` plugins
* Install https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
* Install https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
* Install https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

#### Developer TODOs
* UI test?
 * https://voice.kadira.io/introducing-react-storybook-ec27f28de1e2#.2r53s4981
 * http://www.uiharness.com/quick-start/
* Automate packaging of app with randomly generated bundle name to bust cache.
* Better error handling
* Custom forms for creating & editing video.json files
* Analytics support (segment, google analytics, etc..)
* Custom comment sections?

## Influences
* Redux best practices https://github.com/reactjs/redux/issues/1171s
* Inline CSS via React: https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/
* Style: https://github.com/airbnb/javascript

#### Architecture
* Containers vs components
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.s7qsqghzc
 * https://gist.github.com/chantastic/fc9e3853464dffdb1e3c
* Ducks (actions and reducers in same file): https://github.com/erikras/ducks-modular-redux

#### Routing
* https://github.com/reactjs/react-router
* https://github.com/reactjs/react-router-redux

#### Testing
* https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.44yxbzesv

#### Build tools
* https://gist.github.com/substack/68f8d502be42d5cd4942
* http://blog.namangoel.com/browserify-vs-webpack-js-drama
