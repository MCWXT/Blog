<script setup>
import { ref } from 'vue';
import { httproxy, cache } from '../../modules/index.js';
import { Axios } from 'axios';
import { Icon } from '@iconify/vue';

const axios = new Axios({});
const data = ref(
  cache.getItem('mcapks') ||
    axios.get(httproxy`https://mcapks.net/api/vs-list.php`).then((response) => {
      data.value = cache.setItem('mcapks', JSON.parse(response.data).message);
    }),
);
const download = (version, info_key) => {
  axios
    .get(httproxy`https://mcapks.net/down.php`, {
      params: {
        vs: version + '_64',
      },
    })
    .then((response) => {
      const match = response.data.match(
        new RegExp(
          `(?<=window.location.href=')https://www.123865.com/s/(.){5,}(?=';)`,
        ),
      );
      window.location.href =
        (match && match[0]) ||
        'https://mcapks.net/down.php?vs=' + version + '_64' ||
        'https://mcapks.net/info/' +
          encodeURIComponent(btoa(version)) +
          '/' +
          info_key +
          '.html';
    });
};
const refresh = () => {
  window.localStorage.removeItem('mcapks');
  window.location.reload();
};
</script>
<template>
  <div class="m-2">
    <h1 class="text-2xl text-center">MC基岩版全版本下载</h1>
    <div class="w-74 my-3 mx-auto">
      <img src="/img/remcbbsBT.png" alt="" />
    </div>
    <div class="alert alert-vertical w-72 my-4 mx-auto">
      <span>
        <icon class="text-xl text-info inline" icon="mingcute:information-fill"></icon
        ><br />
        <b>仅供体验，请支持正版</b><br />
        正版购买：<a
          href="https://www.minecraft.net/zh-hans/store/minecraft-android"
          class="link-success text-decoration-none"
          >官方页面<icon class="inline" icon="mingcute:link-fill"></icon
        ></a>
      </span>
    </div>
  </div>
  <div>
    <div class="m-2">
      <table class="table table-xs">
        <thead>
          <tr>
            <th class="text-center">版本</th>
            <th class="text-center">类型</th>
            <th class="text-center">大小</th>
            <th class="text-center">下载</th>
          </tr>
        </thead>
        <template v-if="data">
          <tbody>
            <tr v-for="apk in data">
              <td class="text-center">{{ apk.version }}</td>
              <td class="text-center">
                <span class="text-error" v-if="apk.beta == 'True'">测试版</span>
                <span v-else class="text-success">正式版</span>
              </td>
              <td class="text-center">{{ apk.size }}</td>
              <td class="text-center">
                <a
                  class="btn btn-primary"
                  @click="download(apk.version, apk.info_key)"
                  ><icon icon="mingcute:download-2-fill"></icon
                ></a>
              </td>
            </tr>
          </tbody>
        </template>
      </table>
    </div>
  </div>
  <div class="d-none"></div>
</template>
