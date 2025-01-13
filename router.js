import { ref, reactive, watch } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '/assets/data/routes.js';

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