import { ref } from 'vue';
import { getTemplate } from 'tao';
import NavBar from '/components/NavBar.js';
import DrawerSide from '/components/DrawerSide.js';
import link from '/assets/data/Link.js';
export default {
  setup() {
    const include = [
      'Home',
      'Discussions',
      'McDownload',
    ]
    const toast = ref([]);
    document.addEventListener('toast', (e) => {
      e.detail.data.icon = {
        info: 'mingcute:information-line',
        success: 'mingcute:check-circle-line',
        warning: 'mingcute:warning-line',
        error: 'mingcute:close-circle-line',
      }[e.detail.data.type];
      toast.value.push(e.detail.data);
      setTimeout(() => {
        toast.value = toast.value.filter((item) => item.content !== e.detail.data.content);
      }, 1500)
    });
    return {
      link,
      include,
      toast
    }
  },
  components: {
    NavBar,
    DrawerSide
  },
  name: 'App',
  template: await getTemplate('/App')
}