<script setup>
defineProps(['parent', 'label']);
</script>

<template>
  <li>
    <details v-if="parent.children" open>
      <summary>
        <icon v-if="parent.icon" :name="parent.icon"></icon>{{ parent.name }}
      </summary>
      <ul>
        <sub-menus
          :parent="item"
          :label="label"
          v-for="item in parent.children"></sub-menus>
      </ul>
    </details>
    <nuxt-link
      :to="parent.to"
      @click="label.click()"
      exact-active-class="menu-active"
      v-else>
      <icon v-if="parent.icon" :name="parent.icon"></icon>{{ parent.name }}
    </nuxt-link>
  </li>
</template>

<style scoped></style>
