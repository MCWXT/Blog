import { ref } from 'vue';
import { getTemplate, axios } from 'tao';
import LinkCard from '/components/LinkCard.js';
export default {
  setup() {
    const issuesFriendLink = ref();
    axios.get('https://storage.mcwxt.top/data/json/issues.json').then((response) => issuesFriendLink.value = JSON.parse(response.data)).catch(() => issuesFriendLink.value = [{ title: '出问题啦', url: 'https://github.com/MCWXT/Blog/issues', icon: 'https://img.icons8.com/?size=100&id=k0I9K7HGGgQY&format=png&color=000000', brief: '提交错误'}]);
    return {
      issuesFriendLink
    }
  },
  components: {
    LinkCard
  },
  name: 'Home',
  template: await getTemplate('/views/Home')
}