const fs = require('fs')
const browserify = require('browserify')
// const watchify = require('watchify')
const babelify = require('babelify')
const errorify = require('errorify')
// const run = require('tape-run')

// const glob = require('glob')
// glob.sync('src/**/*.test.js');
const testFiles = ['src/components/video.test.js', 'src/reducers/videos.test.js']

browserify(
  {
    cache: {},
    packageCache: {},
    plugin: [errorify],
    entries: testFiles,
  })
  .ignore('react/lib/ReactContext')
  .ignore('react/lib/ExecutionEnvironment')
  .transform(babelify)
  .plugin('proxyquire-universal')
  .bundle()
  .pipe(fs.createWriteStream('tmp/test-bundle.js'))

//
// const bundle = () => b.pipe(run()).on('results', console.log).pipe(process.stdout)

// b.on('update', bundle)
// bundle();
