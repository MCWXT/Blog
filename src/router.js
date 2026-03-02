import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Link from './views/Link.vue';
import Error from './views/Error.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/link',
    name: 'Link',
    component: Link,
    meta: {
      title: '跳转链接',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error,
    meta: {
      title: '未找到',
    },
  },
  {
    path: '/video',
    name: 'Videos',
    component: () => import('./views/video/Home.vue'),
    meta: {
      title: '视频',
    },
  },
  {
    path: '/video/:bvid',
    name: 'Video',
    component: () => import('./views/video/Player.vue'),
    meta: {
      title: '视频',
    },
  },
  {
    path: '/discussions',
    name: 'Discussions',
    component: () => import('./views/discussion/Home.vue'),
    meta: {
      title: '讨论',
    },
  },
  {
    path: '/discussions/:number',
    name: 'Discussion',
    component: () => import('./views/discussion/Discussion.vue'),
    meta: {
      title: '讨论',
    },
  },
  {
    path: '/mc/download',
    name: 'DownloadMinecraft',
    component: () => import('./views/mc/Download.vue'),
    meta: {
      title: '我的世界基岩版下载',
    },
  },
  {
    path: '/logs/release',
    name: 'Release',
    component: () => import('./views/log/Release.vue'),
    meta: {
      title: '版本日志',
    },
  },
  {
    path: '/logs/commits',
    name: 'Commits',
    component: () => import('./views/log/Commits.vue'),
    meta: {
      title: '更新日志',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/login/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/login/oauth',
    name: 'Oauth',
    component: () => import('./views/login/Oauth.vue'),
    beforeEnter: (to) =>
      (to.query.state == 'MCWXT' && to.query.code && true) || {
        path: '/error/400',
      },
    meta: {
      title: '授权',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? 'MCWXT|' + to.meta.title : 'MCWXT的个人博客';
  next();
});

export default router;
