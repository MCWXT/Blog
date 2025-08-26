import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getTemplate } from 'tao';
export default {
  setup() {
    const route = useRoute();
    if (route.path.indexOf('linkto') != -1) {
      history.back();
      location.href = route.query.url;
    }
    const statusText = ref();
    fetch('http://proxy.mcwxt.top/' + route.query.url).then((res) => { statusText.value = res.statusText; });
    return {
      statusText
    }
  },
  name: 'Link',
  template: await getTemplate('/views/Link')
}