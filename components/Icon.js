import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  props: ['icon'],
  setup() {
    
    return {
      
    }
  },
  name: 'Icon',
  template: await getTemplate('/components/Icon')
}