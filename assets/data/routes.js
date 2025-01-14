import Home from '/views/Home.js';
export default [
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
    component: () => import('/views/Error.js'),
    meta: {
      title: '错误'
    }
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/error/404'
  }, {
    path: '/link',
    name: 'Link',
    component: () => import('/views/Link.js'),
    meta: {
      title: '跳转链接'
    }
  }, {
    path: '/link/to/:name',
    name: 'LinkTo',
    component: () => import('/views/Link.js'),
    meta: {
      title: '跳转至…'
    }
  }, {
    path: '/discussions',
    name: 'Discussions',
    component: () => import('/views/discussion/Discussions.js'),
    meta: {
      title: '讨论'
    }
  }, {
    path: '/discussions/:number',
    name: 'Discussion',
    component: () => import('/views/Discussion/discussion.js'),
    meta: {
      title: '讨论'
    }
  }, {
    path: '/mc/download',
    name: 'DownloadMinecraft',
    component: () => import('/views/mc/Download.js'),
    meta: {
      title: '我的世界基岩版下载'
    }
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('/views/login/Login.js'),
    meta: {
      title: '登录'
    }
  }, {
    path: '/login/oauth',
    name: 'Oauth',
    component: () => import('/views/login/Oauth.js'),
    beforeEnter: (to) => to.query.state == 'MCWXT' && to.query.code && true || { path: '/error/400' },
    meta: {
      title: '授权'
    }
  }, {
    path: '/bilibili',
    children: [
      {
        path: '',
        name: 'BiliBiliPopular',
        component: () => import('/views/bilibili/Popular.js'),
        meta: {
          title: 'B站热门'
        }
      }
    ]
  }, 
]