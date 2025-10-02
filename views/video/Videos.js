import { ref } from 'vue';
import { getTemplate, formatter, formatTimestamp, formatTime } from 'tao';
import { axios } from '/modules/server/bilibili.js';
export default {
  setup() {
    const videos = ref();
    const carousel = [
      { image: 'https://www.dmoe.cc/random.php', },
      { image: 'https://storage.mcwxt.top/assets/img/IMG_20250725_004145.jpg', href: 'https://github.com/mcwxt/Blog' },
    ]
    axios.get('/video/archive/related').then((response) => videos.value = JSON.parse(response.data).data).catch((error) => alert(error));
    return {
      carousel,
      videos,
      formatter,
      formatTimestamp,
      formatTime
    }
  },
  name: 'Videos',
  template: await getTemplate('/views/video/Videos')
}