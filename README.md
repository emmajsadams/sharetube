# blocktube

# setup
* npm install
* Install https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
* Install https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
* Install https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

# scripts
* `npm run start` - View the app with livereload at http://localhost:8080/
* `npm run watch-test` - watches test files for changes and opens testem. Visit http://localhost:7357/ in the browsers you'd like to test and watch the magic of tests run on change across multiple browsers with a fantastic ui.

Typical development flow has both command running in separate console tabs.

# Influences
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

TODO
* Use uglifiyify in build step?
* Add a form to create video.json https://github.com/erikras/redux-form/blob/master/docs/GettingStarted.md
* Setup immuetablejs as state https://github.com/indexiatech/redux-immutablejs &  https://facebook.github.io/immutable-js/
* react https://github.com/troybetz/react-youtube
* Consider RxJS project separte from redux?
* Consider CycleJS proejct http://cycle.js.org/?
