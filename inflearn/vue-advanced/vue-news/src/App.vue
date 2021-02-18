<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  methods : {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() { // event bus를 등록했다면, 꼭 before destroy에서 off를 해주어야 한다. 그렇지 않으면 메모리에 쌓인다.
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  /* 링크 밑줄 없애는 방법 */
  text-decoration: none;
}
a:hover { /* 링크에 마우스를 올렸을 때 */
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
