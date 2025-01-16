import { ref } from 'vue';
import { getTemplate, cache } from 'tao';
import SubMenus from '/components/SubMenus.js';
import nav from '/assets/data/Nav.js';
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
  name: 'DrawerSide',
  template: await getTemplate('/components/DrawerSide')
}