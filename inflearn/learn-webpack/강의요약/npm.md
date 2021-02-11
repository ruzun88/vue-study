# Node.js와 NPM
``` sh
$ npm init -y
```
진행하면, package.json이 생성된다.  
package.json 파일에서는 어떤 library가 어떤 버전으로 설치되었는지 알 수 있다.  
사용되는 전체 라이브러리를 한꺼번에 볼 수 있다는 것이 엄청난 장점이다! (예전에는 코드 중간에 박아넣는 경우도 많았다고 한다.)  
CDN으로 땡겨오지 않아도 된다는 장점도 있다.


#### 패키지 설치
``` sh
$ npm install [모듈명]
$ npm i [모듈명]
```
위 명령어를 수행하면, node_modules 밑에 모듈명으로 library가 설치된다.  
일반적으로 node_modules/[패키지명]/dist/ 안에 있는 소스가 실제 lib에 사용되는 소스이다.

#### 패키지 삭제
``` sh
$ npm uninstall [모듈명]
```

#### 패키지 전역 설치
프로젝트에서 사용할 라이브러리를 불러올때 사용하는 것이 아니라, 시스템 레벨에서 사용할 자바 스크립트 라이브러리를 설치할 때 사용
``` sh
$ npm install [모듈명] --global
```
전역설치를 하면, 프로젝트 내의 node_modules 밑에 폴더가 생기지 않는다.  

- windows: 사용자/AppData/Roaming/npm/node_modules
- mac: /usr/local/lib/node_modules

#### 패키지 지역 설치의 옵션
1. --save-prod  
화면의 로직과 직접적인 연관이 있는 라이브러리를 설치한다.
1. --save-dev  
npm -i [패키지명] -D 와 같음  
개발 보조용 라이브러리 (sass, webpack, js-compression 등) 설치에 사용

#### 주의할 점
dev dependency에 들어가야 할 녀석들이 모두 일반 dependency에 걸려있으면, 빌드시에 포함이되므로, file size가 커지고 빌드 시간이 오래걸리게 된다. 따라서 이것을 구분하는 것 또한 역량이라 볼 수 있겠다.