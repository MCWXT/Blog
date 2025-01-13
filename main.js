import { createApp } from 'vue';
import App from '/app.js';
import router from '/router.js';

createApp(App).use(router).mount('#app');