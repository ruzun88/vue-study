<template>
  <div>
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.domain }}</small>
    </p>
    <!-- <div v-for="item in this.$store.state.jobs">{{ item.title }}</div> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
}
</script>

<style>

</style>