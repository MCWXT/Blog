<script setup>
import { ref } from 'vue';
import { formatter, formatTimestamp, formatTime } from '../../modules/index.js';
import { axios } from '../../modules/server/bilibili.js';
import { Icon } from '@iconify/vue';

const videos = ref();
const carousel = [
  { image: 'https://www.dmoe.cc/random.php' },
  {
    image: 'https://storage.mcwxt.top/assets/img/IMG_20250725_004145.jpg',
    href: 'https://github.com/mcwxt/Blog',
  },
];
axios
  .get('/video')
  .then((response) => (videos.value = JSON.parse(response.data).data))
  .catch((error) => alert(error));
</script>
<template>
  <div>
    <div class="carousel rounded-xs w-full aspect-16/9 mb-2">
      <router-link
        class="carousel-item w-full"
        v-for="item in carousel"
        :to="{ path: '/link', query: { url: item.href } }">
        <img class="object-cover w-full" :src="item.image" alt="" />
      </router-link>
    </div>
    <template v-if="videos">
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-items-center px-2">
        <router-link
          class="w-44 my-2 hover:bg-zinc-200 group cursor-pointer flex flex-col gap-2"
          v-for="item in videos"
          :to="'/video/' + item.bvid">
          <div class="aspect-4/3 relative rounded-lg overflow-hidden">
            <img class="object-cover size-full" :src="item.pic" alt="" />
            <div
              class="m-2 p-1 absolute bottom-0 end-0 bg-black/50 text-white text-xs rounded-sm">
              {{ formatTime(item.duration) }}
            </div>
          </div>
          <div class="p-2">
            <div class="">
              <h3 class="truncate-wrap text-md" style="--line: 2">
                {{ item.title }}
              </h3>
            </div>
            <div class="flex text-xs text-gray-600 my-1">
              <div class="flex-none mr-2 flex items-center">
                <icon icon="mingcute:play-circle-fill"></icon>
                <div>
                  {{ formatter.format(item.stat.view) }}
                </div>
              </div>
              <div class="flex-auto flex items-center">
                <icon icon="mingcute:danmaku-fill"></icon>
                <div>
                  {{ formatter.format(item.stat.danmaku) }}
                </div>
              </div>
              <div class="flex-1 text-nowrap">
                {{ formatTimestamp(item.pubdate) }}
              </div>
            </div>
            <div class="flex text-sm text-gray-600">
              <p class="flex-1">
                {{ item.owner.name }}
              </p>
              <icon class="flex-none m-1" icon="mingcute:more-2-fill"></icon>
            </div>
          </div>
        </router-link>
      </div>
    </template>
  </div>
</template>
