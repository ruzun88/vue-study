import axios from 'axios';

// 1. http request & response 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}news/1.json`); // ES6 style template string
}

async function fetchJobsList() { // api call 단에서의 async 처리 방법 1
  try {
    return await axios.get(`${config.baseUrl}jobs/1.json`); // eslint에서 권장하는 one line statement
  } catch (error) {
    console.log(error)
  }
}

async function fetchAskList() { // api call 단에서의 async 처리 방법 2
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`); // coding convention 상의 response 처리. 한라인 더 길다.
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchAskItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchAskItem
}