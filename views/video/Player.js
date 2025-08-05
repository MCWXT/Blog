import { ref, useTemplateRef, onMounted } from 'vue';
import { getTemplate } from 'tao';
import { useRoute } from 'vue-router';
import '/cdn_modules/dplayer@1.27.1/DPlayer.min.js';
export default {
  setup() {
    const route = useRoute();
    let data;
    if (route.query.src || route.query.data) {
      data = JSON.parse(route.query.data || null) || {
        player: {
          video: {
            url: route.query.src
          }
        }
      };
    }
    const player = useTemplateRef('player');
    onMounted(() => {
      data.player.container = player.value;
      const dp = new DPlayer(data.player);
    })
    
    return {
      data
    }
  },
  name: 'Player',
  template: await getTemplate('/views/video/Player')
}