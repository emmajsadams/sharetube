# blocktube
[![Build Status](https://travis-ci.org/codystebbins/blocktube.svg?branch=master)](https://travis-ci.org/codystebbins/blocktube)

Shares a redundantly uploaded video.
* Supports YouTube, Vimeo, and HTML5 video (mp4 or WebM).
* Creates a disqus thread based on the url of the videoUrl specified so comments persist despite a changing json file.
* View Demo here https://codystebbins.com/blocktube/?videoUrl=https://codystebbins.com/public/blocktube/video.json
* Example video.json https://codystebbins.com/public/blocktube/sotu2013.json

Only supported in modern browsers. Use the my hosted version or host your own (latest release in `gh-pages` branch)

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
{
  "type": "vimeo",
  "id": "59549698",
  "name": "WH Vimeo"
},
* `id` is the VimeoId of the video. At the end of a video url. EX: `https://vimeo.com/59549698`

#### HTML5
{
  "type": "html5",
  "mp4": "http://www.whitehouse.gov/videos/2013/February/021213_StateoftheUnion_NoGFX_HD.mp4",
  "webm": "https://upload.wikimedia.org/wikipedia/commons/5/59/2014_State_Of_The_Union_Address_Enhanced.webm",
  "name": "WH & WikiPedia HTML5"
}
* `mp4` is the url of the mp4 encoded video
* `webm` is the url of the webm encoded video
* Recommended to specify both because some browsers only support one or the other.

# Features pending

* Analytics support (segment, google analytics, etc..)
* Custom comment sections?

If anyone has any ideas let me know. This is a fun side project for learning React

# Building
* `npm install && npm run build`
* app directory is ready to be hosted as a single page app

# Developing
## Essential Commands
* `npm run start --silent` - livereload development of app and test running
* `npm run browser-test --silent` - parallel browser test run
* `npm run build` - build app for distribution

## Optional Recommended Development
* Using Atom with `linter-eslint`, `react`, and `editorconfig` plugins
* Install https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
* Install https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
* Install https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

# Influences
* Redux best pratices https://github.com/reactjs/redux/issues/1171s
* Style: https://github.com/airbnb/javascript

## Arichtecture
* Containers vs components
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.s7qsqghzc
 * https://gist.github.com/chantastic/fc9e3853464dffdb1e3c
* Ducks (actions and reducers in same file): https://github.com/erikras/ducks-modular-redux

## Routing
  * https://github.com/reactjs/react-router
  * https://github.com/reactjs/react-router-redux

## Testing
 * https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.44yxbzesv

## Build tools
 * https://gist.github.com/substack/68f8d502be42d5cd4942
 * http://blog.namangoel.com/browserify-vs-webpack-js-drama


https://vimeo.com/4476521

TODO
* UI test?
 * https://voice.kadira.io/introducing-react-storybook-ec27f28de1e2#.2r53s4981
 * http://www.uiharness.com/quick-start/
* Add a form to create video.json https://github.com/erikras/redux-form/blob/master/docs/GettingStarted.md
