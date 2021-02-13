<template>
  <div>
    <div v-for="item in ask">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    var vm = this; // 화살표 함수를 쓰지 않으면, this가 의미하는 것이 vm이 아니므로, 별도로 빼두어야 함
    fetchAskList()
      .then(function(response) {
        vm.ask = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>