<template>
  <div>
    <ul class="new-list">
      <li v-for="item in listItems" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              class="link-text"
              v-bind:to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    }
  }
}
</script>

<style>
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