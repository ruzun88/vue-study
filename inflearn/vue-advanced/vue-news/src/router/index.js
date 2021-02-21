import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue' // HOC 사용으로 컴포넌트가 필요없어짐
// import AskView from '../views/AskView.vue'
// import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // url에 #를 없애준다.
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      //path: url 주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때, 표시 될 컴포넌트
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter: (to, from, next) => { // 인증 등에서 많이 사용한다.
        bus.$emit('start:spinner');
        store.dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log('fetched!');
          // bus.$emit('end:spinner');
          next(); // 없으면 이동하지 않음
        })
        .catch((error) => {
          console.log(error);
        });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: createListView('AskView'),
      beforeEnter: (to, from, next) => { // 인증 등에서 많이 사용한다.
        bus.$emit('start:spinner');
        store.dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log('fetched!');
          // bus.$emit('end:spinner');
          next(); // 없으면 이동하지 않음
        })
        .catch((error) => {
          console.log(error);
        });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: createListView('JobsView'),
      beforeEnter: (to, from, next) => { // 인증 등에서 많이 사용한다.
        bus.$emit('start:spinner');
        store.dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log('fetched!');
          // bus.$emit('end:spinner');
          next(); // 없으면 이동하지 않음
        })
        .catch((error) => {
          console.log(error);
        });
      },
    },
    {
      path: '/user/:id', // 다이나믹 라우팅
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
})