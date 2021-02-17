<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>

import ListItem from '../components/ListItem.vue'
export default {
  components: {
    ListItem,
  }
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