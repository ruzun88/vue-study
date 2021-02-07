# Vuex
## 학습목표
- 복잡한 앱 컴포넌트를 효율적으로 관리하는 Vuex 라이브러리 학습
- Flux 패턴 이해
- Vuex의 state(data), getters(computed), mutations(methods), actions(비동기 methods)
- Vuex를 쉽게 코딩할수 있는 helper

## Vuex란?
- React의 Flux 패턴에서 기인함
- app이 커졌을 때 필수 관문 / 중고급 개발자가 되기 위한 필수

### flux란?
- MVC패턴이 복잡해서 흐름 문제를 해결하기 위해 고안함 (unidirectional data flow, 한방향으로만 데이터가 흐른다)

### vuex가 필요한 이유?
#### 기존의 문제점
- 컴포넌트의 child depth가 10단계면, props로 계속 내려주어야 하나? 불편하다.
- 그렇다고 event bus로 보내자니, 어디서 받은 이벤트인지 찾기도 어렵다.
#### vuex가 해결해주는 것
- MVC 패턴에서 발생하는 구조적 오류
- 컴포넌트간 데이터 명시
- 여러개 컴포넌트에서 같은 데이터를 업데이트할 때, 동기화 문제

### vuex 컨셉
1. state: 컴포넌트간 공유 데이터 `data()`
2. View: 데이터 표시 화면 `template`
3. Action: 사용자 입력에 따라 데이터를 변경하는 `methods`

## Vuex 기술요소
1. state: 컴포넌트간 공유 데이터 data
1. getters: 연산된 state 값을 접근하는 computed
1. mutations: state 값을 변경하는 이벤트 로직/메서드 methods
1. actions: 비동기 처리 로직을 선언하는 메서드 async methods

### state
``` js
// Vue
data: {
    message: 'hello'
}

// Vuex
state: {
    message: 'hello'
}
```

``` html
<!-- Vue -->
<p>{{ message }}</p>

<!-- Vuex -->
<p>{{ this.$store.state.message }}</p>
```

### getters
- state 값을 접근하는 속성
- computed 처럼 미리 연산된 값을 접근하는 속성
```js
// store.js
state: {
    num:10
},
getters: {
    getNumber(state) {
        return state.num;
    },
    doubleNumber(state) {
        return state.num * 2;
    },
}
```
``` html
<p>{{ this.$store.getters.getNumber }}</p>
<p>{{ this.$store.getters.doubleNumber }}</p>
```

### mutations
- state 값을 변경할 수 있는 유일한 방법
- commit()으로 동작시킴
- mutations에 속한 method의 첫번째 argument는 state이다. (commit 할때 state는 내부적으로 호출됨)
``` js
mutations: {
  printNumbers(state) {
    return state.num
  }
}
this.$store.commit('mutation명');
this.$store.commit('printNumbers');
this.$store.commit('foo', {
  str: 'bar',
  num: 20
});
```

#### state를 mutation으로 변경하는 이유
- state는 여러 컴포넌트에서 공통으로 바라보는 속성이다.
- 따라서 어디에서 변경이 되었는지 쉽게 파악이 어렵다.
- mutation으로 변경하면 이력이 남으므로, 디버깅 / 테스팅에 혜택이 있다.

### actions
- 비동기 처리 로직을 담당하는 method
- 데이터 요청, promise, es6 async와 같은 비동기 처리는 모두 actions에 선언
- actions에서 받는 첫번째 인자는 context이다.
- context에서 mutations에 접근할 수 있다.
- actions는 dispatch를 통해 호출한다.

``` js
// store.js
mutations: {
  setData(state, fetchedData) {
    state.product = fetchedData;
  }
},
actions: {
  fetch ProductData(context) {
    return axios.get('http://url.com/sth') // promise로 결과값을 받으면, setData 호출
                .then(response => context.commit('setData', response));
  }
}

// App.vue
methods: {
  getProduct() {
    this.$store.dispatch('fetchProductData');
  }
}
```

#### 비동기 로직을 actions에 선언해야 하는 이유
- state를 언제 호출했는지 확인이 어려움
- mutations로 시간차를 두고 state를 변경하면, state값의 변화를 추적하기 어려우므로, mutations는 동기 처리로직만 넣어야 함


## 헬퍼 함수
- store에 있는 4가지 속성을 간편하게 코딩할 수 있게 해준다.
    - state -> mapState
    - getters -> mapGetters
    - muatations -> mapMutations
    - actions -> mapActions

### 사용법
- vue 파일에서 헬퍼를 로딩
``` js
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  computed() {...mapState(['num']), ...mapGetters(['countedNum'])},
  methods(): {...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn'])}
}
```
... 는 object spread operator로, java의 extend랑 비슷한 면이 있다.

### mapState
``` js
// App.vue
import { mapState } from 'vuex'

computed() {
    ...mapState(['num']) // 아래와 동일한 것을 spread operator로 간겨로하
    // num() { return this.$store.state.num; }
}

// store.js
state: {
  num: 10
}
```

### 헬퍼의 유연한 문법
- vuex에 선언한 속성을 그대로 컴포넌트에 연결하는 문법
``` js
// 배열 리터럴
...mapMutations([
  'clickBtn', // 'clickBtn': clickBtn 을 축약
  'addNumber' // addNumber(인자) 인자가 있어도 선언시에 안써도 됨
])
```

- 속성명이 컴포넌트에서 사용하고 있는 컴포넌트 상의 이름과 다를 때
``` js
...mapMutations( {
  popupMsg: 'clickBtn' // 컴포넌트 메서드 명: store의 뮤테이션 명
})
```

