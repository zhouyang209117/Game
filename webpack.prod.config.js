const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    'clock': './src/clock.js',
    'pi': './src/pi.js',
    'ant': './src/ant.js',
    'maze_dfs': './src/maze/dfs/anim.js'
  },
  output:{
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,// 手工指定js插入位置
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index_clock.html',
      inject: false,// 手工指定js插入位置
      filename: 'index_clock.html',
      chunks: ['clock']
    }),
    new HtmlWebpackPlugin({
      template: './src/index_pi.html',
      inject: false,// 手工指定js插入位置
      filename: 'index_pi.html',
      chunks: ['pi']
    }),
    new HtmlWebpackPlugin({
      template: './src/index_ant.html',
      inject: false,
      filename: 'index_ant.html',
      chunks: ['ant']
    }),
    new HtmlWebpackPlugin({
      template: './src/maze_dfs.html',
      inject: false,
      filename: 'maze_dfs.html',
      chunks: ['maze_dfs']
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
  }
}
