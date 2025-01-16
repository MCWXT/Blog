import { ref } from 'vue';
import { getTemplate, cache } from 'tao';
export default {
  setup() {
    return {
      logged: Boolean(cache.getItem('access_token'))
    }
  },
  name: 'Login',
  template: await getTemplate('/views/login/Login')
}