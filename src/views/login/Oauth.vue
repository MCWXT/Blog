<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { cache, toast } from '../../modules/index.js';
import { Axios } from 'axios';

const route = useRoute();
const router = useRouter();
const axios = new Axios({});
let logged = false;
axios
  .post('https://api.mcwxt.top/login/github/oauth?code=' + route.query.code)
  .then((response) => JSON.parse(response.data))
  .finally((data) => {
    if (!data) {
      toast({
        type: 'error',
        content: '请求错误',
      });
      return;
    }
    if (data && data.error) {
      toast({
        type: 'error',
        content: data.error,
      });
      return;
    }
    cache.setItem('access_token', data.access_token);
    toast({
      type: 'success',
      content: '登录成功',
    });
  });
router.replace({ query: {} });
router.push('/login');
</script>
<template>
  <div>
    <span>...</span>
  </div>
</template>
