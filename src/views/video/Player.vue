<script setup>
import { ref } from 'vue';
import { formatter, formatTimestamp, formatTime } from '../../modules/index.js';
import { axios } from '../../modules/server/bilibili.js';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

const bvid = useRoute().params.bvid;
const video = ref();
axios
  .get('/video/view?bvid=' + bvid)
  .then((response) => (video.value = JSON.parse(response.data).data))
  .catch((error) => alert(error));
</script>
<template>
  <div>
    <iframe
      class="aspect-16/9 w-full"
      :src="'https://player.bilibili.com/player.html?bvid=' + bvid"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"></iframe>
  </div>
  <template v-if="video">
    <div class="p-2">
      <h2 class="text-lg">{{ video.title }}</h2>
      <div class="flex text-sm text-gray-600 m-2">
        <span class="mr-4"
          ><icon class="inline" icon="mingcute:play-circle-fill"></icon>
          {{ formatter.format(video.stat.view) }}</span
        >
        <span class="mr-4"
          ><icon class="inline" icon="mingcute:danmaku-fill"></icon>
          {{ formatter.format(video.stat.danmaku) }}</span
        >
        <span class="mr-4">{{ formatTimestamp(video.pubdate) }}</span>
      </div>
      <div class="text-xs text-base-content/80 m-2">
        <span>{{ video.bvid }}</span
        ><br />
        <p class="mt-2">{{ video.desc }}</p>
      </div>
    </div>
  </template>
</template>
