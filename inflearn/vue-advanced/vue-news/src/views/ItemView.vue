<template>
  <div>
    <!-- <p>title: {{ fetchedAskItem.title }}</p>
    {{fetchedAskItem.content}} -->

    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :info="fetchedAskItem">
        <!-- <div slot="username">{{ fetchedAskItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedAskItem.user}`">
          {{ fetchedAskItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + fetchedAskItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedAskItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedAskItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchedAskItem'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_ITEM', itemId);
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>