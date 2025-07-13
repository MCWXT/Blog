import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getTemplate } from 'tao';
export default {
  setup() {
    const route = useRoute();
    if (route.path.indexOf('linkto') != -1) {
      location.href = route.query.url;
    }
    return {
      
    }
  },
  name: 'Link',
  template: await getTemplate('/views/Link')
}