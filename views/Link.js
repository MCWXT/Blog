import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getTemplate } from 'tao';
export default {
  setup() {
    const route = useRoute();
    (route.path.indexOf('/link/to') != -1) && (location.href = route.query.url);
    return {
      
    }
  },
  name: 'Link',
  template: await getTemplate('/views/Link')
}