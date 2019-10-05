const path = require('path')

module.exports = {
  entry: path.join(__dirname,'./src/client/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist/client')
  } 
}