import { shallowMount } from '@vue/test-utils'; // shallow mount을 추가 하면, 별도로 app을 mount할 필요가 없다.
// import Vue from 'vue';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('컴포넌트 마운팅 되면 username이 존재하고, 초기 값으로 설정되어 있어야 한다', () => {
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(SignupForm);
    // console.log(instance.username);
    expect(wrapper.vm.username).toBe('');
  });
});
