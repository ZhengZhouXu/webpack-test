var path = require('path')
var htmlWepbackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var extractTextWebpackPlugin = require('extract-text-webpack-plugin')

var mainExtract = new extractTextWebpackPlugin('main.css')
var myExtract = new extractTextWebpackPlugin('my.css')

const clientConfig = {
  target: 'web',
  entry: ['./src/main.js'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: require.resolve('./src/old.js'),
      use: 'exports-loader?sayHello'
    }]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: false
    // }),
    new webpack.DefinePlugin({
      name: JSON.stringify('xuxule')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new htmlWepbackPlugin ({
      title: 'xuxule',
      template: path.resolve(__dirname, 'index.html')
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     //name: 'vendor',
    //     //names: ['vendor','manifest'], // 指定公共 bundle 的名字。
    //     //filename: 'common.js',
    //     //async: true,
    //     children: true,
    //     minChunks: 2
    //     // minChunks: function (module, count) {
    //     //   return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.resolve(__dirname, './node_modules')) === 0
    //     // }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // }),
    myExtract,
    mainExtract
  ]
}

module.exports = [clientConfig]

