const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // 번들링 시작 위치
  output: {
    path: path.join(__dirname, '/dist'), // 번들 결과물 위치
    filename: 'bundle.js',
  },
  mode: 'development', // bundling mode development / production
  module: {
    rules: [
      {
        test: /[\.js]$/, // .js 에 한하여 babel-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'], // 모듈 위치
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 템플릿 위치
    }),
  ],
  devServer: {
    host: 'localhost', // live-server host, port
    port: 5500,
  },
};
