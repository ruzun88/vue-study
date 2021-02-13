<template>
  <div>
    <div v-for="item in users">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    var vm = this;
    fetchNewsList()
      .then(function(response) {
        vm.users = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>