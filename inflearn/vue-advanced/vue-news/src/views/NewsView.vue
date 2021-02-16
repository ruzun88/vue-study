<template>
  <div>
    <!-- <div v-for="item in this.$store.state.news">
      {{ item.title }}
    </div> -->
    <!-- <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->
    <ul class="new-list">
      <li v-for="item in this.$store.state.news" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
        <!-- <a v-bind:href="item.url">{{ item.title }}</a>
        <small>
          {{ item.time_ago }} by
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
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