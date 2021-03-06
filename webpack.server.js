const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 

module.exports = {
  node: {
    __dirname: false,
    __filename: false
  },
  target: 'node',
  externals: [nodeExternals()],

  entry: path.join(__dirname, 'src/server/index.js'),

  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist/server')
  },

  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/server/template/'),
        to: path.join(__dirname, 'dist/server/template/')
      }
    ])
  ]
}
