<template>
<!-- root element는 항상 하나만 있어야 한다. 그 이후 child 형태로 밑에 달리는 것이 component 구조이다. -->
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!-- slot: 컴포넌트를 재정의할 수 있는 부분 -->
      <h3 slot="header">
        경고!
        <i class="fas fa-times" @click="showModal = false"></i>
      </h3>

      <div slot="body">
        할 일을 입력해주세요.
      </div>

      <span slot="footer">
        copyright yj
      </span>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/common/Modal'

export default {
  data() {
    return {
        newTodoItem: "",
        showModal: false
    }
  },
  methods: {
    addTodo() {
      // console.log(this.newTodoItem)
      if (this.newTodoItem !== ''){
        this.$emit('addTodoItem', this.newTodoItem)
        // this.$emit('이벤트명', 인자들,,, )
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: #42b983;
  }
</style>