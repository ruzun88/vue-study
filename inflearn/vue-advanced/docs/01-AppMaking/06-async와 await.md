# JS 비동기 처리 패턴의 발전 과정
## Old pattern
``` js
$.get('domain.com/id', function(id) {
    if (id === 'john') {
        $.get('domain.com/products', function(products) {
            donsole.log(products);
        })
    }
})
```

## Promise
``` js
function getId() {
    return new Promise(function(resolve, reject) {
        $.get('domain.com/id', function(id) {
            resolve(id);
        })
    })
}

function getProduct() {
    // ...
}

function logProduct() {
    // ...
}

getId()
    .then(getProduct)
    .then(logProduct) // then이 계속 되는 promise chaining
    .catch()
```

## async와 await 문법
비동기 처리 패턴의 최신 문법이다.  

### 기본 문법
앞에 async를 붙이고 나서, 해당 function 안에 await을 붙여주어야 한다.  
단, await 뒤에 나오는 코드는 반드시 Promise를 반환하여야 한다.

``` js
async function fetchData() {
    await getUserList();
}

async function fetchData() {
    var userList = await getUserList(); // 변수로 받을 수도 있다.
}
```

유의하여야 할 것은, await 선언을 한다고 해서 코드가 멈추어있는 것이 아니라는 것이다.
``` js
async function fetchData() {
    var userList = await getUserList();
    console.log('hello')
}
```
이 경우, user List에 response가 담기기 전에 log를 찍어버린다. await 문과 상관없는 코드는 비동기로 진행되어버린다.

## Error 처리
전통적인 try / catch를 사용하면 된다.

```js
async function fetchData() {
    try {
        var response = await axios.get('http://address.of.api)
        this.items = response.data
    } catch (error) {
        console.log(error)
    }
}
```