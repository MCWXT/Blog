<script setup>
import { ref } from 'vue';
import { cache, toast } from '../../modules/index.js';
import { octokit, config } from '../../modules/server/github.js';
import Aurora from '../../components/Aurora/Aurora.vue';
import FallingText from '../../components/FallingText/FallingText.vue';

const discussions = ref();
octokit
  .request(`GET /repos/{owner}/{repo}/discussions`, config)
  .then((response) => {
    if (response.status !== 200) {
      toast({
        type: 'error',
        content: response.status,
      });
    }
    discussions.value = response.data.reverse();
  });
</script>
<template>
  <div
    class="relative border border-base-300 overflow-hidden rounded aspect-16/9 w-full">
    <div class="h-full">
      <Aurora
        :color-stops="['#FFF0F5', '#E6E6FA', '#FFF0F5']"
        :amplitude="1.0"
        :blend="0.5"
        :speed="1.0"
        :intensity="1.0"
        class="w-full h-full relative overflow-hidden" />
      <FallingText
        text="Welcome to the Discussion area of the best BLOG in the world."
        :highlight-words="['Discussion', 'BLOG']"
        trigger="auto"
        :gravity="1"
        font-size="2rem"
        class="text-neutral-600"
        :mouse-constraint-stiffness="0.2" />
    </div>
    <h1
      class="text-6xl md:text-8xl absolute top-1/2 -translate-y-1/2 mx-1 text-base-200 font-bold">
      Discussions
    </h1>
  </div>
  <div>
    <div>
      <div class="m-2 mx-4 flex">
        <div class="text-xl flex-1">
          <span v-if="discussions">{{ discussions.length }}</span>
          <span v-else>0</span>
        </div>
        <a
          class="btn btn-primary btn-sm flex-none end-0"
          role="button"
          href="//github.com/MCWXT/mcwxt.github.io/discussions/new/choose"
          >新讨论</a
        >
      </div>
    </div>
    <template v-if="discussions">
      <div class="m-3 divide-y md:mx-32">
        <router-link
          class="block transition border-base-300 active:backdrop-brightness-90"
          v-for="discussion in discussions"
          :to="'/discussions/' + discussion.number">
          <div class="p-2">
            <div class="mb-2">
              <h2 class="text-2xl">{{ discussion.title }}</h2>
            </div>
            <div class="flex items-center">
              <div class="me-5">
                <img
                  class="rounded-full inline me-1 w-10 aspect-square"
                  :src="discussion.user.avatar_url"
                  alt="" />
                <span>{{ discussion.user.login }}</span>
              </div>
              <div>
                <icon
                  class="me-1 text-base-content/80"
                  icon="mingcute:comment-fill"></icon>
                <span>{{ discussion.comments }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </template>
    <div v-else>
      <div class="m-3 divide-y">
        <div
          class="block p-2 transition border-base-300"
          v-for="(_, index) in Array(2)"
          :key="index">
          <div class="mb-2">
            <div class="skeleton h-7 w-3/4 mb-1"></div>
            <div class="skeleton h-5 w-1/2"></div>
          </div>
          <div class="flex items-center">
            <div class="me-5 flex items-center">
              <div class="skeleton rounded-full me-2 w-10 h-10"></div>
              <div class="skeleton h-5 w-20"></div>
            </div>
            <div class="flex items-center">
              <div class="skeleton me-1 w-5 h-5"></div>
              <div class="skeleton h-5 w-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
