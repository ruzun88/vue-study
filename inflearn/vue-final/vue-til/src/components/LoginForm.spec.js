// // test를 위한 파일
// import { sum } from './math';

// sum(10, 20); // 30

// describe('sum 함수 테스트 코드', () => {
//   test('10 + 20 = 30', () => {
//     const result = sum(10, 20);
//     expect(result).toBe(30);
//   });
//   test('10 + 20 = 30 error case', () => {
//     const result = sum(10, 20);
//     expect(result).not.toBe(1);
//   });
// });
import { shallowMount } from '@vue/test-utils'; // shallow mount을 추가 하면, 별도로 app을 mount할 필요가 없다.
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트 마운팅 되면 username이 존재하고, 초기 값으로 설정되어 있어야 한다', () => {
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm);
    // console.log(instance.username);
    expect(wrapper.vm.username).toBe('');
  });

  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log(idInput.element.value); // 출력: test
    console.log(idInput.html()); // 출력 : html form
  });
});
