import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  setup() {
    
    return {
      
    }
  },
  name: 'BiliBili',
  template: await getTemplate('/views/bilibili/Videos')
}