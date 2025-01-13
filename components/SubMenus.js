import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  props: ['parent'],
  setup() {

    return {

    }
  },
  name: 'SubMenus',
  template: await getTemplate('/components/SubMenus')
}