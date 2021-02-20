<template>
  <div>
    <div>이 페이지는 사용되지 않는 페이지 입니다. mixins 설명을 위해 달려있는 페이지 입니다.</div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js'

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin]
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_LIST', this.$route.name)
  //     .then(() => {
  //       console.log('fetched!');
  //       bus.$emit('end:spinner')
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }, 3000);
  // },
}
</script>


<style scoped>

</style>