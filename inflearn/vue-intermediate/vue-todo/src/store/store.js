import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // this.todoItems.push(localStorage.key(i));
        }
      }
      return arr;
    }
  },
}

export const store = new Vuex.Store({
    //
  state: {
    todoItems: storage.fetch()
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem}; // complete 여부를 추가함
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      console.log(payload.index);
			localStorage.removeItem(payload.todoItem.item); // local storage에서 지운다고 해도 화면에는 반영 안된다
			state.todoItems.splice(payload.index, 1); // 화면에서 클릭한 index의 항목을 1개 지움
    },
    toggleOneItem(state, payload) {
      // todoItem.completed = !todoItem.completed; // anti-pattern why?
      // container(app.vue)에서 가지고 있던 데이터를 props로 내리고,
      // 그 data를 다시 받아 올려서 값을 manipulate 하고 있음
      // 이미 난 데이터를 가지고 있는데 왔다갔다? 불필요함. 바로 index로 접근!
      console.log(payload.index)
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      // 로컬 스토리지의 item을 갱신하는 방법. update가 따로 없기 때문에, 지웠다가 다시 씀
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = []
    }
  }
})