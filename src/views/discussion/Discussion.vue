<script setup>
import { useRoute, useRouter } from 'vue-router';
import 'https://esm.sh/giscus';
import { ref } from 'vue';
import { cache, toast } from '../../modules/index.js';
import { octokit, config } from '../../modules/server/github.js';

const themeIsDark = ref(localStorage.getItem('themeIsDark') === 'true');
const route = useRoute();
const router = useRouter();
const number = route.params.number;
const discussion = ref();
let _discussion;
octokit
  .request(`GET /repos/{owner}/{repo}/discussions/${number}`, config)
  .then((response) => {
    if (response.status !== 200) {
      //com.termux.documents/tree/%2Fdata%2Fdata%2Fcom.termux%2Ffiles%2Fhome%2Fproject%2FBlog::/data/data/com.termux/files/home/project/Blog/src/views/discussion/Discussion.vue
      content: toast({
        type: 'error',
        content: response.status,
      });
    }
    _discussion = response.data;
    octokit
      .request('POST /markdown', {
        text: _discussion.body,
      })
      .then((response) => {
        _discussion.body = response.data;
        discussion.value = _discussion;
      });
  });
</script>
<template>
  <template v-if="discussion">
    <div class="p-3">
      <h1 class="mt-3 text-2xl">
        {{ discussion.title }} <span>#{{ number }}</span>
      </h1>
      <span class="my-2"><span>更新于: </span>{{ discussion.updated_at }}</span>
    </div>
    <div class="p-2">
      <div class="border border-base-300 rounded">
        <div class="my-2">
          <img
            class="rounded-lg mx-2 h-10 inline"
            :src="discussion.user.avatar_url"
            alt="" />
          <span>{{ discussion.user.login }}</span>
        </div>
        <div class="p-2">
          <div
            class="mx-2 prose"
            :class="{ themeIsDark: themeIsDark }"
            v-html="discussion.body"></div>
        </div>
      </div>
    </div>
  </template>
  <div v-else>
    <div class="p-3">
      <div class="skeleton mt-3 h-8 w-3/4"></div>
      <div class="skeleton my-2 h-5 w-1/2"></div>
    </div>
    <div class="p-2">
      <div class="border border-base-300 rounded">
        <div class="my-2 flex items-center">
          <div class="skeleton mx-2 h-10 w-10 rounded"></div>
          <div class="skeleton h-5 w-1/3"></div>
        </div>
        <div class="p-2">
          <div class="mx-2 space-y-2">
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-3/4"></div>
            <div class="skeleton h-4 w-2/3"></div>
            <div class="skeleton h-4 w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="my-4 px-4">
      <giscus-widget
        repo="MCWXT/Blog"
        id="R_kgDOLz187g"
        mapping="number"
        :term="number"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme=""
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"></giscus-widget>
    </div>
  </div>
</template>
<style scoped>
@plugin '@tailwindcss/typography';
</style>
