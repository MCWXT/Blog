import { ref, onMounted, useTemplateRef } from 'vue';
import { getTemplate } from 'tao';
import SubMenus from '/components/SubMenus.js';
import nav from '/assets/data/Nav.js';
export default {
  setup() {
    const label = useTemplateRef();
    return {
      nav,
      label
    }
  },
  components: {
    SubMenus
  },
  name: 'DrawerSide',
  template: await getTemplate('/components/DrawerSide')
}