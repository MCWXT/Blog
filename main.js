import { createApp } from 'vue';
import App from '/App.js';
import router from '/router.js';
import Icon from '/components/Icon.js';
import '/cdn_modules/iconify@3.1.1/iconify.min.js';

createApp(App).component('Icon', Icon).use(router).mount('#app');