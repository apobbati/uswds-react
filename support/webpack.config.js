var path = require('path')
var webpack = require('webpack')
var AssetsPlugin = require('assets-webpack-plugin')

var DEBUG = !(process.env.NODE_ENV === 'production')

if (DEBUG) {
  require('dotenv').config()
}

var config = {
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  entry: {
    app: './src/app',
    vendor: [
      'react',
      'react-router',
      'redux',
      'react-dom',
      'lodash',
      'bluebird',
      'humps',
      'history'
    ]
  },
  resolve: {
    modules: [ path.join(__dirname, '..', 'src'), 'node_modules' ],
    extensions: [ ".js", ".jsx" ]
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_BASE_URL'])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  }
}


if (DEBUG) {
  config.entry.dev = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
  ]

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filname: 'vendor.js'
    })
  ])
  config.output.publicPath = 'http://localhost:3001/static/'
  config.module.rules[0].loaders = ['react-hot-loader'].concat(config.module.rules[0].loaders);
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filname: '[name].[chunkhash].js'
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ])
}

module.exports = config