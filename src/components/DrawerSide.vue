<script setup>
const nav = [
  {
    name: '主页',
    icon: 'mingcute:home-2-fill',
    to: '/',
  },
  {
    name: '视频',
    icon: 'mingcute:video-fill',
    to: '/video',
  },
  {
    name: '讨论',
    icon: 'mingcute:chat-1-fill',
    to: '/discussions',
  },
  {
    name: 'MC',
    icon: 'mdi:minecraft',
    to: '/mc',
    children: [
      {
        name: '下载',
        to: '/mc/download',
      },
    ],
  },
  {
    name: '日志',
    icon: 'icon-park-solid:log',
    to: '/logs',
    children: [
      {
        name: '版本',
        to: '/logs/release',
      },
      {
        name: '更新',
        to: '/logs/commits',
      },
    ],
  },
];
import { onMounted, useTemplateRef } from 'vue';
import SubMenus from './SubMenus.vue';

const labelRef = useTemplateRef('label');
</script>

<template>
  <div class="drawer-side">
    <label
      for="my-drawer"
      aria-label="close sidebar"
      class="drawer-overlay"
      ref="label"></label>
    <div class="backdrop-blur-sm bg-[var(--color-base-100)]/[90%] h-full w-72 rounded">
      <div>
        <div class="py-4 border-b border-base-300 mx-5 text-center">
          <span class="text-xl">MCWXT的个人博客</span>
        </div>
      </div>
      <div>
        <ul class="menu p-5 w-auto">
          <sub-menus
            class=""
            :parent="item"
            :label="labelRef"
            v-for="item in nav"></sub-menus>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
