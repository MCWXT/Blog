import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getTemplate, cache } from 'tao';
export default {
  setup() {
    const route = useRoute();
    if (route.query.event = 'logout') {
      cache.removeItem('access_token');
    }
    return {
      logged: Boolean(cache.getItem('access_token'))
    }
  },
  name: 'Login',
  template: await getTemplate('/views/login/Login')
}