import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  props: ['href', 'type', 'icon', 'title', 'content'],
  setup() {
    
    return {
      
    }
  },
  name: 'LinkCard',
  template: await getTemplate('/components/LinkCard')
}