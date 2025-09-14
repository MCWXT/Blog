import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getTemplate, cache, toast } from 'tao';
import { Axios } from 'axios';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const axios = new Axios({});
    axios.post('https://mcwxt.top/api/login/access_token/' + route.query.code).then((response) => {
      cache.setItem('access_token', JSON.parse(response.data).access_token);
    }).catch((error) => toast({
      type: 'error',
      content: error,
    })).finally((response) => toast({
      type: 'success',
      content: '登录成功',
    }));
    router.replace({ query: {} });
    return {
      logged: true
    }
  },
  name: 'Oauth',
  template: await getTemplate('/views/login/Login')
}