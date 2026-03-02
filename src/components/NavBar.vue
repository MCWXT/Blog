<script setup>
import { Icon } from '@iconify/vue';
import { cache } from '../modules/index.js';
import { ref, watch } from 'vue';

const isLogin = Boolean(cache.getItem('access_token'));
const themeIsDark = ref(localStorage.getItem('themeIsDark') || false);
watch(themeIsDark, (themeIsDark) => {
  localStorage.setItem('themeIsDark', themeIsDark);
});
const navbarIsOpacity = ref(true);
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbarIsOpacity.value = true;
  } else {
    navbarIsOpacity.value = false;
  }
});
</script>

<template>
  <div
    class="navbar transition duration-500 border-b border-base-300 backdrop-blur-sm"
    :class="{
      'bg-[var(--color-base-100)]/[95%]': navbarIsOpacity,
      'bg-base-100': !navbarIsOpacity,
    }">
    <div class="flex-1">
      <label
        class="btn btn-square btn-ghost lg:invisible"
        for="my-drawer"
        aria-label="open sidebar">
        <icon class="text-2xl" icon="mingcute:menu-line"></icon>
      </label>
      <h1 class="btn btn-ghost text-xl">MCWXT的个人博客</h1>
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="../assets/img/logo.png" alt="" />
          </div>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content overflow-y-auto max-h-96 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><router-link to="/">主页</router-link></li>
          <li>
            <router-link to="/login"
              >登录<span class="badge badge-xs" v-if="isLogin"
                >已登录</span
              ></router-link
            >
          </li>
          <li>
            <label class="swap swap-rotate justify-start">
              <input
                type="checkbox"
                class="theme-controller"
                value="dark"
                v-model="themeIsDark" />
              <span>{{ themeIsDark ? '黑夜' : '白天' }}</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
