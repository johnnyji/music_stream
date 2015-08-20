var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/index.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'react-hot!babel' 
      },
      { 
        test: /.scss$/, 
        exclude: /node_modules/, 
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      { 
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=25000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};