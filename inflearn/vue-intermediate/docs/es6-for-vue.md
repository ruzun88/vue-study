# ES6
- ECMAScript2015와 동일 용어 (ES5는 09년 이후의 첫 메이저 업데이트)
- React / Angular / Vue에서 권고하는 언어 형식
- ES5에 비해 문법이 간결하다

## Babel
- ES6는 babel을 통한 transpiling을 권장한다.
- transpiling을 하면 각 브라우저가 호환 가능한 ES5 형태로 바꾸어준다.

## const & let
- 새로운 변수 선언 방식
- 블록 단위 { } 안으로 변수 범위가 제한되었다.
- const는 상수개념. 선언한 값에 대해 변경 불가
- let은 한번 선언한 값에 대해 다시 선언할 수 없다. 선언만 안되고 할당은 된다.
- es5의 var는 모두 가능하다

### 변수의 hoisting @ES5
선언문들을 가장 먼저 실행하게 되는 es5 특징

#### 작성 코드
``` js
var sum = 5;
sum = sum + i;

function sumNumbers() {

}
var i = 10;
```

#### 실제 동작 순서
``` js
// #1 - 함수 선언식 / 변수 선언을 hoisting
var sum;
function sumNumbers() {

}
var i;

// #2 - 변수 대입 및 할당
sum = 5;
sum = sum + i;
i = 10;
```

### ES6라면?
``` js
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum); // 10
console.log(i); // Uncaught ReferenceError : i is not defined
```

### const도 변경 가능할 때?
object나 배열일 때는 변경 가능하다.
``` js
const a = {};
const b = [];
a.num = 10;
b.push(20);
```

## Arrow Fucntion
- function keyword 대신 =>로 대체한다. 글자수 8 -> 2글자
- 콜백 함수 문법 간결화

## Enhanced Object Literals
- 객체 속성을 메서드로 사용할 때, function 예약어 없이 쓸 수 있다.

``` js
// es5
var dictionary = {
    lookup: function() {
        console.log('found sth')
    }
};

// es6
var dictionary = {
    lookup() {
        console.log('found sth')
    }
};
```

- 객체 속성명과 값 명이 동일할 때, value 할당 안해줘도 자동 할당됨
``` js
var figures = 10;
var dictionary = {
    // figures = figures; // 예전 문법
    figures
}
```

## Modules
- 자바스크립트 모듈화 방법
- es5는 모듈화가 없었음 (외부 라이브러리가 필요했다)
