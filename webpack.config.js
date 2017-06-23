var path = require('path')

// const serverConfig = {
//   target: 'node',
//   entry: {
//     main: './src/main.js',
//   },
//   output: {
//     filename: '[name].node.js',
//     path: path.resolve(__dirname, 'bundle')
//   },  
// }

const clientConfig = {
  target: 'web',
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle'),
    chunkFilename: "[name].js",
    devtoolLineToLine: true
  },  
}

module.exports = [clientConfig]