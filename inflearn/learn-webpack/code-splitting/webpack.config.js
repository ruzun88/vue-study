var path = require('path');

module.exports = {
  mode: 'none', // 세가지 모드가 있음. production, development, none. 운영시 반드시 production으로 사용
  entry: './index.js',
  output: {
    filename: '[chunkhash].js', // 임의의 파일명을 설정해도 되지만, 특수 block을 통해 자동적으로 이름을 지정할 수도 있다.
    path: path.resolve(__dirname, 'dist')
  },
  module: { // 설정이 되지 않은 상태에서 빌드를 하면, 에러가 발생한다. css 로더를 넣을 수 없기 때문이다.
    rules: [ // loader 규칙
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // css loader만 등록하면, 빌드가 되더라도 정상적인 동작을 하지 않는다. 순서의 영향을 받는 항목이므로 반드시 style 부터 적용해야 한다.
        // style loader의 역할은 css 코드를 inline header에 등록해주는 것이다. 따라서 반드시 있어야 한다.
        // use에서 인식하는 순서는 오른쪽에서 부터 왼쪽이다.
        // 따라서, css가 아니라 scss를 사용하는 경우에는 [style, css, sass] 순으로 로더가 배치되어야 한다.
      }
    ]
  },
}