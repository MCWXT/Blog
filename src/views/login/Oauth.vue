<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from '../../modules/index.js';
import { Axios } from 'axios';
import { useAuthStore } from '../../stores/auth.js';

const auth = useAuthStore();
const route = useRoute();
const router = useRouter();
const axios = new Axios({});

axios
  .post('https://api.mcwxt.top/login/github/oauth?code=' + route.query.code)
  .then((response) => {
    if (!response.data) {
      throw new Error('请求错误');
    }
    const data =
      typeof response.data === 'string'
        ? JSON.parse(response.data)
        : response.data;
    return JSON.parse(data);
  })
  .then((data) => {
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
    auth.login(data.access_token);
    toast({
      type: 'success',
      content: '登录成功',
    });
  })
  .catch(() => {
    toast({
      type: 'error',
      content: '请求错误',
    });
  })
  .finally(() => {
    router.push('/login');
  });
</script>
<template>
  <div>
    <span>...</span>
  </div>
</template>
