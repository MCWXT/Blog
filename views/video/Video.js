import { ref } from 'vue';
import { getTemplate, formatter, formatTimestamp, formatTime } from 'tao';
import { useRoute } from 'vue-router';
import { axios } from '/modules/server/bilibili.js';
export default {
  setup() {
    const bvid = useRoute().params.bvid;
    const video = ref();
    axios.get('/video/view?bvid=' + bvid).then((response) => video.value = JSON.parse(response.data).data).catch((error) => alert(error));
    return {
      bvid,
      video,
      formatter,
      formatTimestamp,
      formatTime
    }
  },
  name: 'BiliBili',
  template: await getTemplate('/views/video/Video')
}