import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAskItem, fetchList } from '../api/index.js'

export default {
  // FETCH_NEWS(context) { // FETCH_LIST로 통일함
  //   fetchNewsList()
  //     .then(response => {
  //       context.commit("SET_NEWS", response.data);
  //       return response // News View에서 스피너의 체이닝을 위해 response를 준다.
  //     })
  //     .catch(error => console.log(error))
  // },
  // FETCH_JOBS({commit}) { // destructuring 한 것. 내부 항목을 빼올수도 있고만!
  //   fetchJobsList()
  //     .then(({data}) => {
  //       commit("SET_JOBS", data);
  //     })
  // },
  // FETCH_ASK({commit}) {
  //   fetchAskList()
  //     .then(({data}) => {
  //       commit("SET_ASK", data);
  //     })
  // },

  async FETCH_USER({commit}, name) {
    try {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async FETCH_ASK_ITEM({commit}, id) {
    const response = await fetchAskItem(id);
    commit('SET_ASK_ITEM', response.data);
    return response;
  },
  // // promise version
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({data}) => {
  //       commit('SET_LIST', data);
  //     })
  //     .catch(error => console.log(error));
  // },
  // async version
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response; // promise chaining을 위해 return을 해주어야 함
    } catch (error) {
      console.log(error)
    }
  },
}