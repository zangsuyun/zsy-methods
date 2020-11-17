// node 核心模块，处理路径相关
const path = require('path')
// webpack插件，新版本用法发与webpack中文网上写的有点出入，需要注意
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 引入模板文件， 看你需不需要
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'zsy-methods', //  可以随便更换，不是固定值,是函数库名字，类似Jquery
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // {
          //   loader: 'babel-loader',
          // },
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    //  new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],

}