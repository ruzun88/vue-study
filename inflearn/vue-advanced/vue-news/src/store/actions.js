import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAskItem } from '../api/index.js'

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        console.log(response);
        context.commit("SET_NEWS", response.data);
      })
      .catch(error => console.log(error))
  },
  FETCH_JOBS({commit}) { // destructuring 한 것. 내부 항목을 빼올수도 있고만!
    fetchJobsList()
      .then(({data}) => {
        console.log(data);
        commit("SET_JOBS", data);
      })
  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then(({data}) => {
        console.log(data)
        commit("SET_ASK", data);
      })
  },
  FETCH_USER({commit}, name) {
    fetchUserInfo(name)
      .then(({data}) => {
        console.log(data)
        commit("SET_USER", data);
      })
  },
  FETCH_ASK_ITEM({commit}, id) {
    fetchAskItem(id)
      .then(({data}) => {
        console.log(data)
        commit("SET_ASK_ITEM", data);
      })
  }
}