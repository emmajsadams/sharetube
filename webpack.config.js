module.exports = {
  /*entry: {
    app: './index.js'
  },*/

  entry: ['./test.js', './index.js']

  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extensions as it will fail to match without!!!
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    // path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint']
      }
    ]
  }
};
