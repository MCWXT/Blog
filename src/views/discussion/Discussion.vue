<script setup>
import { useRoute, useRouter } from 'vue-router';
import 'https://esm.sh/giscus';
import { ref } from 'vue';
import { cache, toast } from '../../modules/index.js';
import { octokit, config } from '../../modules/server/github.js';
import { useThemeStore } from '../../stores/theme.js';
import { marked } from 'marked';

const theme = useThemeStore();
const route = useRoute();
const router = useRouter();
const number = route.params.number;
const discussion = ref();
octokit
  .request(`GET /repos/{owner}/{repo}/discussions/${number}`, config)
  .then((response) => {
    const contents = response.data;
    contents.body = marked.parse(
      contents.body.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ''),
    );
    discussion.value = contents;
  })
  .catch((error) => {
    toast({
      type: 'error',
      content: error.message,
    });
    router.replace('/discussions');
  });
</script>
<template>
  <template v-if="discussion">
    <div class="p-3">
      <h1 class="mt-3 text-2xl">
        {{ discussion.title }} <span>#{{ number }}</span>
      </h1>
      <div class="mb-3">
        <div class="badge badge-sm badge-outline" :class="`border-[#${item.color}] text-[#${item.color}]`" v-for="item in discussion.labels">{{ item.name }}</div>
      </div>
      <span><span>更新于: </span>{{ discussion.updated_at }}</span>
      <br />
      <span>{{ discussion.category.description }}</span>
    </div>
    <div class="p-2">
      <div class="border border-base-300 rounded">
        <div class="my-2 flex justify-between items-center px-2">
          <img
            class="rounded-lg me-2 h-10 inline flex-none"
            :src="discussion.user.avatar_url"
            alt="" />
          <span class="flex-1">{{ discussion.user.login }}</span>
          <span class="flex-none">{{ discussion.category.name }}</span>
        </div>
        <div class="p-2">
          <article
            class="mx-2 prose lg:prose-xl break-words"
            v-html="discussion.body"></article>
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
        :theme="theme.current"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"></giscus-widget>
    </div>
  </div>
</template>
<style scoped>
@plugin '@tailwindcss/typography';
</style>
