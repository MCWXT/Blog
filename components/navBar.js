import { ref } from 'vue';
import { getTemplate } from 'tao';
import themes from '/data/themes.js';
export default {
  setup() {
    
    return {
      themes
    }
  },
  template: await getTemplate('/templates/components/navBar.html')
}