module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: './dist'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      test: /\.js(x)?$/
    }]
  },
  externals: {
    'react': 'commonjs react',
    'react-redux': 'commonjs react-redux'
  }
};
