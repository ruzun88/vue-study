import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage'),
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
