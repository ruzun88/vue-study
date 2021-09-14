import { instance } from './index';

// login, join etc
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

export { registerUser, loginUser };
