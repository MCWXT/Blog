import { ref } from 'vue';
import { getTemplate } from 'tao';
import NavBar from '/components/navBar.js';
import DrawerSide from '/components/drawerSide.js';
import myselfLink from '/data/myselfLink.js';
export default {
  setup() {
    const include = ['Discussion'];
    return {
      myselfLink,
      include
    }
  },
  components: {
    NavBar,
    DrawerSide
  },
  template: await getTemplate('/templates/app.html')
}