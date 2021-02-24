import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin'

Vue.config.productionTip = false

// Vue.use 하는 순간, install()이 실행된다.
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
