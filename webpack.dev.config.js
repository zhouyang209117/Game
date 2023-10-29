const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: {
    'clock': './src/clock.js',
    'pi': './src/pi.js'
  },
  output:{
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index_clock.html',
      filename: 'index_clock.html',
      chunks: ['clock']
    }),
    new HtmlWebpackPlugin({
      template: './src/index_pi.html',
      filename: 'index_pi.html',
      chunks: ['pi']
    })
  ],
  module: {
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8000,
    static: path.join(__dirname, 'dist'),
    open: true
  }
}
