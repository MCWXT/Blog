import { ref, watch } from 'vue';
import { getTemplate, cache } from 'tao';
export default {
  setup() {
    const isLogin = Boolean(cache.getItem('access_token'));
    const themeIsDark = ref(localStorage.getItem('themeIsDark') || false);
    watch(themeIsDark, (themeIsDark) => { localStorage.setItem('themeIsDark', themeIsDark) });
    const navbarIsOpacity = ref(true);
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 100) {
        navbarIsOpacity.value = true;
      } else {
        navbarIsOpacity.value = false;
      }
    });
    return {
      themeIsDark,
      navbarIsOpacity,
      isLogin
    }
  },
  name: 'NavBar',
  template: await getTemplate('/components/NavBar')
}