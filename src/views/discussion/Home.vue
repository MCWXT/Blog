<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { cache, toast } from '../../modules/index.js';
import { octokit, config } from '../../modules/server/github.js';
import { axios } from '../../modules/server/bilibili.js';
import { day } from "../../modules/discussion/day.js";

const discussions = ref();
const carousel = ref();

function getDiscussTip(item) {
		const { category } = item;
		const name = category.name;

		if (name === "Announcements") {
			return `${item.user.login} ${day(item.created_at).displayText} announced in ${name}`;
		}
		if (category.is_answerable) {
			return `${item.user.login} ${day(item.created_at).displayText} asked in ${name}`;
		}
		return `${item.user.login} ${day(item.created_at).displayText} started in ${name}`;
}

axios
  .get('/video/news')
  .then((response) => {
    const data = JSON.parse(response.data).data.archives;
    carousel.value = [];
    for (let item of data) {
      carousel.value.push(item);
    }
  })
  .catch((error) => {
    toast({
      type: 'error',
      content: error.message,
    });
  });

octokit
  .request(`GET /repos/{owner}/{repo}/discussions`, config)
  .then((response) => {
    if (response.status !== 200) {
      toast({
        type: 'error',
        content: response.status,
      });
    }
    const data = response.data.reverse();
    const match = data.filter((i) => i.category.slug == 'pin');
    const rest = data.filter((i) => i.category.slug !== 'pin');
    discussions.value = [...match, ...rest];
  });
</script>
<template>
  <div class="carousel rounded-md m-2 aspect-16/9">
    <router-link
      class="carousel-item w-full relative"
      v-for="item in carousel"
      :to="{ path: '/video/' + item.bvid }">
      <img class="object-cover w-full" :src="item.pic" alt="" />
      <div
        class="m-2 p-1 absolute bottom-0 start-0 bg-black/40 text-white text-xs rounded-sm">
        {{ item.title }}
      </div>
    </router-link>
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
            <div class="">
              <h2 class="text-2xl">{{ discussion.title }}</h2>
            </div>
            <div class="mb-2">
              <span class="text-sm text-base-content/80">{{ getDiscussTip(discussion) }}</span>
            </div>
            <div class="flex items-center">
              <div class="me-18">
                <img
                class="rounded-full inline me-1 w-10 aspect-square"
                :src="discussion.user.avatar_url"
                alt="" />
              </div>
              <icon
                class="me-1 text-base-content/80 inline"
                icon="mingcute:comment-fill"></icon>
              <span class="flex-1">{{ discussion.comments }}</span>
              <span v-if="discussion.labels[0]" class="badge badge-sm badge-soft badge-primary">
                {{ discussion.labels[0].name }}</span>
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
