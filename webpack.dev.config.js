const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,// 手工指定js插入位置
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index_clock.html',
      inject: false,
      filename: 'index_clock.html',
      chunks: ['clock']
    }),
    new HtmlWebpackPlugin({
      template: './src/index_pi.html',
      inject: false,
      filename: 'index_pi.html',
      chunks: ['pi']
    })
  ],
  entry: {
    'clock': './src/clock.js',
    'pi': './src/pi.js'
  },
  output:{
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
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
