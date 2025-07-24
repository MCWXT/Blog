import { ref } from 'vue';
import { getTemplate } from 'tao';
import { axios } from '/modules/server/bilibili.js';
export default {
  setup() {
    const videos = ref([]);
    const carousel = [
      { image: 'https://storage.mcwxt.top/assets/img/IMG_20250725_004145.jpg', href: 'https://github.com/mcwxt/Blog'},
      { image: 'https://www.dmoe.cc/random.php', },
    ]
    axios.get('/assets/data/json/bilivideo.json').then((response) => videos.value = JSON.parse(response.data).data.item).catch((error) => alert(error));
    return {
      carousel,
      videos
    }
  },
  name: 'Videos',
  template: await getTemplate('/views/bilibili/Videos')
}