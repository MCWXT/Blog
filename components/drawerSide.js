import { ref } from 'vue';
import { getTemplate, cache } from 'tao';
import SubMenus from '/components/subMenus.js';
import nav from '/data/nav.js';
export default {
  setup() {

    return {
      nav,
      cache
    }
  },
  components: {
    SubMenus
  },
  template: await getTemplate('/templates/components/drawerSide.html')
}