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
    component: importComponent('/views/Discussion/discussion'),
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
  }, /* {
    path: '/bilibili',
    children: [
      {
        path: '',
        name: 'BiliBiliPopular',
        component: importComponent('/views/bilibili/Popular'),
        meta: {
          title: 'B站热门'
        }
      }
    ]
  }, */
]
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