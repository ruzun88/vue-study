var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production', // production 지정 시, 용량을 줄이기 위한 동작들도 많이 포함 됨
  entry: './src/main.js', // 빌드할 파일
  output: { // 결과물
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/', // cdn 관련 속성
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', // 많은 브라우저들이 사용할 수 있도록 도와줌
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: { // 파일의 해석 방식
    alias: { // 별칭
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json'] // import 등을 할 때, 확장자 붙여도 되지 않도록 설정
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map' // 빌드된 파일과 실제 구동되는 파일을 링킹해주는 역할
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }