const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  node: {
    __dirname: true,
    __filename: true
  },
  target: 'node',
  externals: [nodeExternals()],
  entry: path.join(__dirname, 'src/server/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist/server')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/server/template/'),
        to: path.join(__dirname, 'dist/server/template/')
      }
    ])
  ]
}