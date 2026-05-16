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
    return data;
  })
  .then((data) => {
    if (data && data.error) {
      throw new Error(data.error || 'GitHub 登录失败');
    }
    auth.login(data.access_token);
    toast({
      type: 'success',
      content: '登录成功',
    });
    router.replace('/');
  })
  .catch((error) => {
    toast({
      type: 'error',
      content: error.message,
    });
    router.replace('/login');
  });
</script>
<template>
  <div class="text-center my-5">
    <span class="loading loading-dots loading-md"></span>
  </div>
</template>
