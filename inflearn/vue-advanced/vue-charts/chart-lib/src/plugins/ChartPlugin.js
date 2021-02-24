import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
    // prototype은 내장된 asset을 확장하는데 사용된다.
    // 위 설정을 마치면, 코드 어디에서든 this.$_Chart 를 사용하여 차트를 접근할 수 있다.
    // 그러면 뭐가 좋냐? 라이브러리 로딩을 각 파일에서 할 필요가 없고, 플러그인에서만 하면 됨! 갸꿀
    // cf) $_ 는 vue.js에서 플러그인 사용시 권장하는 코드 스타일이다.
  }
}