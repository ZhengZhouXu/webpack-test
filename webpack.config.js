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
    main: '',
  },
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'bundle'),
    crossOriginLoading: 'anonymous'
  },  
}

module.exports = [clientConfig]