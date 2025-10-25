import { ref, reactive, watch } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { importComponent } from '/modules/index.js';
import Home from '/views/Home.js';
const routes = [
{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    title: '首页'
  }
}, {
  path: '/home',
  redirect: '/'
}, {
  path: '/error/:errorType',
  name: 'Error',
  component: importComponent('/views/Error'),
  meta: {
    title: '错误'
  }
}, {
  path: '/:pathMatch(.*)*',
  redirect: '/error/404'
}, {
  path: '/link',
  name: 'Link',
  component: importComponent('/views/Link'),
  meta: {
    title: '跳转链接'
  }
}, {
  path: '/linkto/:name',
  name: 'LinkTo',
  component: importComponent('/views/Link'),
  meta: {
    title: '跳转至…'
  }
}, {
  path: '/discussions',
  name: 'Discussions',
  component: importComponent('/views/discussion/Discussions'),
  meta: {
    title: '讨论'
  }
}, {
  path: '/discussions/:number',
  name: 'Discussion',
  component: importComponent('/views/discussion/Discussion'),
  meta: {
    title: '讨论'
  }
}, {
  path: '/mc/download',
  name: 'DownloadMinecraft',
  component: importComponent('/views/mc/Download'),
  meta: {
    title: '我的世界基岩版下载'
  }
}, {
  path: '/login',
  name: 'Login',
  component: importComponent('/views/login/Login'),
  meta: {
    title: '登录'
  }
}, {
  path: '/login/oauth',
  name: 'Oauth',
  component: importComponent('/views/login/Oauth'),
  beforeEnter: (to) => to.query.state == 'MCWXT' && to.query.code && true || { path: '/error/400' },
  meta: {
    title: '授权'
  }
}, {
  path: '/videos',
  name: 'Videos',
  component: importComponent('/views/video/Videos'),
  meta: {
    title: '视频'
  }
}, {
  path: '/videos/:bvid',
  name: 'Video',
  component: importComponent('/views/video/Video'),
  meta: {
    title: '视频'
  }
}, {
  path: '/videos/player',
  name: 'Player',
  component: importComponent('/views/video/Player'),
  meta: {
    title: '视频'
  }
}, {
  path: '/logs/release',
  name: 'Release',
  component: importComponent('/views/log/Release'),
  meta: {
    title: '版本日志'
  }
}, {
  path: '/logs/commits',
  name: 'Commits',
  component: importComponent('/views/log/Commits'),
  meta: {
    title: '更新日志'
  }
}]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? 'MCWXT|' + to.meta.title : 'MCWXT的个人博客';
  next()
});

export default router;