import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // news: [],
    // jobs: [],
    // ask: [],
    user: {},
    askItem: {},
    list: [],
  },
  getters: {
    fetchedAsk(state){
      return state.ask;
    },
    fetchedAskItem(state){
      return state.askItem;
    }
  },
  mutations,
  actions,
});
