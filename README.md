# blocktube
[![Build Status](https://travis-ci.org/codystebbins/blocktube.svg?branch=master)](https://travis-ci.org/codystebbins/blocktube)

# building
* `npm install && npm run build`
* app directory is ready to be hosted as a single page app

# developing
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
* Redux best pratices https://github.com/reactjs/redux/issues/1171
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
* Explain videoUrl.
 * `?videoUrl=` is param
 * https://gist.github.com/codystebbins/0f02004fd00caa230c843d944145f1c6
* UI test?
 * https://voice.kadira.io/introducing-react-storybook-ec27f28de1e2#.2r53s4981
 * http://www.uiharness.com/quick-start/
* Add a form to create video.json https://github.com/erikras/redux-form/blob/master/docs/GettingStarted.md
* Make releases that can be easily downloaded
