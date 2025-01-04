import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getTemplate } from 'tao';
export default {
  setup() {
    const route = useRoute();
    route.path == '/link/to' && (location.href = route.query.url);
    return {
      
    }
  },
  template: await getTemplate('/templates/views/link.html')
}