# blocktube

http://localhost:8080/?video={%22id%22:%226fdf6ffc-ed77-94fa-407e-a7b86ed9e59d%22,%22name%22:%22AnCap%20Rap%22,%22youtube%22:{%22videoIds%22:[%22pGuj-Z3PNg8%22]}}
* TODO: make releases that can be easily downloaded

# building
* npm install
* npm run build

# developing
* npm install
* `npm run start` - livereload development of app
* `npm run test` - testem driven development
* Using Atom with `linter-eslint`, `react`, and `editorconfig` plugins is preferred
* Install https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
* Install https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
* Install https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

# Influences
Redux best pratices https://github.com/reactjs/redux/issues/1171
Style: https://github.com/airbnb/javascript

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
* Create .editorconfig
* configure testling to run my tests
* Use uglifiyify in build step?
* Add a form to create video.json https://github.com/erikras/redux-form/blob/master/docs/GettingStarted.md
* Setup immuetablejs as state https://github.com/indexiatech/redux-immutablejs &  https://facebook.github.io/immutable-js/
* react https://github.com/troybetz/react-youtube
* Consider RxJS project separte from redux?
* Consider CycleJS proejct http://cycle.js.org/?
