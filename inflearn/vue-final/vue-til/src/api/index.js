import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
  console.log('hello');
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

function loginUser(userData) {
  console.log('hi');
  return instance.post('login', userData);
}

export { registerUser, loginUser };
