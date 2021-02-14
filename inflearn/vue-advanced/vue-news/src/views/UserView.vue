<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
  </div>
</template>

<script>

export default {
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  created() {
    // console.log(this.$route.params.id)
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName) // 현 상황에서는, 데이터가 밀려보이는 현상이 있다!
  },
}
</script>

<style>

</style>