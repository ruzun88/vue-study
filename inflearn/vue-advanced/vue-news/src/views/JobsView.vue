<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>

import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch("FETCH_JOBS")
      .then(() => {
        console.log('fetched!');
        bus.$emit('end:spinner')
      })
      .catch((error) => {
        console.log(error);
      });
    }, 3000);
  },
}
</script>


<style scoped>
.news-list {
  margin: 0px;
  padding: 0px;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  color: #41b883;
  justify-content: center;
  align-items: center;
  display: flex;
}

.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>