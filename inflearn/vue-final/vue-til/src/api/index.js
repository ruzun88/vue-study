import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 초기화
function createInstance() {
  const instance = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

// 유저 등록 api
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

// 로그인 api
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습 노트 데이터 조회 api
function fetchPosts() {
  return instance.get('posts');
}

// 학습 노트 생성
function createPost(postData) {
  return instance.post('posts', postData);
}

export { registerUser, loginUser, fetchPosts, createPost };
