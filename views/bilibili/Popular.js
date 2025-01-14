import { ref } from 'vue';
import { getTemplate } from 'tao';
import { axios } from '/modules/server/bilibili.js';
export default {
  setup() {
    const videos = ref({});
    axios.post('/popular').then(response => videos.value = response.data);
    console.log(videos)
    return {
      
    }
  },
  name: 'BiliBiliPopular',
  template: await getTemplate('/views/bilibili/Popular')
}