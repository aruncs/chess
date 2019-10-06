const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.join(__dirname,'./src/client/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist/client')
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/client/images',
        to: './images'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'style/style.css',
      chunkFilename: 'style/style.css',
      ignoreOrder: false
    })   
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          { loader: 'css-loader', options: { url: false } },
          // 'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}