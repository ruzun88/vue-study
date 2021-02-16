<template>
  <div>
    <!-- <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.domain }}</small>
    </p> -->
    <ul class="new-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ job.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
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