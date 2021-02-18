import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAskItem } from '../api/index.js'

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit("SET_NEWS", response.data);
        return response // News View에서 스피너의 체이닝을 위해 response를 준다.
      })
      .catch(error => console.log(error))
  },
  FETCH_JOBS({commit}) { // destructuring 한 것. 내부 항목을 빼올수도 있고만!
    fetchJobsList()
      .then(({data}) => {
        commit("SET_JOBS", data);
      })
  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then(({data}) => {
        commit("SET_ASK", data);
      })
  },
  FETCH_USER({commit}, name) {
    fetchUserInfo(name)
      .then(({data}) => {
        commit("SET_USER", data);
      })
  },
  FETCH_ASK_ITEM({commit}, id) {
    fetchAskItem(id)
      .then(({data}) => {
        commit("SET_ASK_ITEM", data);
      })
  }
}