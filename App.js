import { ref } from 'vue';
import { getTemplate } from 'tao';
import NavBar from '/components/NavBar.js';
import DrawerSide from '/components/DrawerSide.js';
import myselfLink from '/assets/data/myselfLink.js';
export default {
  setup() {
    const include = [
      'Home',
      'Discussions',
      'McDownload',
    ]
    return {
      myselfLink,
      include
    }
  },
  components: {
    NavBar,
    DrawerSide
  },
  name: 'App',
  template: await getTemplate('/App')
}