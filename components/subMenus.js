import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  name: 'SubMenus',
  props: ['parent'],
  setup() {

    return {

    }
  },
  template: await getTemplate('/templates/components/subMenus.html')
}