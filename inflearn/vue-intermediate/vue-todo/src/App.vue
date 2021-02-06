<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <todo-header></todo-header> 위와 동일하다 -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v-on: 하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명" -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <!-- v-bind:내려보낼 속성="현재 컴포넌트의 속성명" -->
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
// 컴포넌트를 만들고 나서 할 일은, component를 등록하는 것이다.
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) {
        var obj = {completed: false, item: todoItem}; // complete 여부를 추가함
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
			localStorage.removeItem(todoItem.item); // local storage에서 지운다고 해도 화면에는 반영 안된다
			this.todoItems.splice(index, 1); // 화면에서 클릭한 index의 항목을 1개 지움
    },
    toggleOneItem: function(todoItem, index) {
      // todoItem.completed = !todoItem.completed; // anti-pattern why?
      // container(app.vue)에서 가지고 있던 데이터를 props로 내리고,
      // 그 data를 다시 받아 올려서 값을 manipulate 하고 있음
      // 이미 난 데이터를 가지고 있는데 왔다갔다? 불필요함. 바로 index로 접근!
      this.todoItems[index].completed = !this.todoItems[index].completed;

      // 로컬 스토리지의 item을 갱신하는 방법. update가 따로 없기 때문에, 지웠다가 다시 씀
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = []
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명: 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
