<template>
  <div>
    <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->
    <p v-for="item in fetchedAsk">
      <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
      <!-- <a v-bind:href="item.url">{{ item.title }}</a> -->
      <small>{{ item.time_ago }} | {{ item.user }}</small>
      <!-- <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link> -->
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })
    
    // # 1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
}
</script>

<style>

</style>