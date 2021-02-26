<template>
  <check-box v-model="checked"></check-box>
</template>

<script>
// 체크박스를 상위 컴포넌트에서 관리하는 방법
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checked: false,
    }
  }
}
</script>