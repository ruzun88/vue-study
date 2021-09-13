<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea type="text" id="contents" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 200. {{ contents.length }} / 200
          </p>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
      <p>{{ contents.length }} / 200</p>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/index';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const { data } = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(data);
      } catch (error) {
        this.logMessage = error.response.data.message;
        console.log(error.response.data.message);
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>
