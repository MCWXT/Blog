import { ref } from 'vue';
import { getTemplate } from 'tao';
import { useRoute } from 'vue-router';
import { axios } from '/modules/server/bilibili.js';
export default {
  setup() {
    const bvid = useRoute().params.bvid;
    const video = ref();
    axios.get('/assets/data/json/bilivideo.json').then((response) => video.value = JSON.parse(response.data).data.item.filter((item) => item.bvid === bvid)[0]).catch((error) => alert(error));
    return {
      bvid,
      video
    }
  },
  name: 'BiliBili',
  template: await getTemplate('/views/video/Video')
}