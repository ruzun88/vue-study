<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isUserNameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',

      // log
      logMessage: '',
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // biz logic
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        // console.log(data.user.username);
        this.logMessage = `${data.user.username}님, 환영합니다!`;
        // this.initForm();
      } catch (error) {
        // 에러 핸들링 코드
        // console.log(error);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
