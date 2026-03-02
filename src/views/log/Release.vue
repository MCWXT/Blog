<script setup>
import { ref } from 'vue';
import { toast } from '../../modules/index.js';
import { octokit, config } from '../../modules/server/github.js';
import { marked } from 'marked';

const release = ref();
octokit
  .request(`GET /repos/{owner}/{repo}/releases`, config)
  .then((response) => {
    if (response.status !== 200) {
      toast({
        type: 'error',
        content: response.status,
      });
    }
    release.value = response.data;
  });
</script>
<template>
  <div class="m-4">
    <h2 class="text-2xl">版本日志 Release</h2>
  </div>
  <div v-if="release">
    <div v-for="item in release" class="mx-4 my-8">
      <div class="text-base-content/85 text-sm m-1 flex items-center">
        <div class="me-2">
          <span>{{ item.updated_at }}</span>
        </div>
        <div>
          <div class="avatar">
            <div class="w-7 rounded-full">
              <img :src="item.author.avatar_url" />
            </div>
          </div>
        </div>
        <div class="me-2">
          <span>{{ item.author.login }}</span>
        </div>
        <div>
          <icon icon="mdi:tag-outline"></icon>
          <span>{{ item.tag_name }}</span>
        </div>
      </div>
      <div class="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title font-semibold overflow-x-auto">
          <h3>{{ item.name }}</h3>
          <div
            class="text-md prose"
            v-html="marked.parse(item.body)"></div>
        </div>
        <div class="collapse-content text-sm">
          <ul class="list rounded-box border border-base-300">
            <li class="list-row">
              <icon icon="tabler:file-zip"></icon>
              <a :href="item.zipball_url">Source code (zip)</a>
            </li>
            <li class="list-row">
              <icon icon="tabler:file-zip"></icon>
              <a :href="item.tarball_url">Source code (tar.gz)</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@plugin '@tailwindcss/typography';
</style>
