import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  props: ['parent', 'label'],
  setup() {
    
    return {
      
    }
  },
  name: 'SubMenus',
  template: await getTemplate('/components/SubMenus')
}