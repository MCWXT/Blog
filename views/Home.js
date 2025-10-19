import { ref } from 'vue';
import { getTemplate, axios } from 'tao';
import LinkCard from '/components/LinkCard.js';
export default {
  setup() {
    const issuesFriendLink = ref();
    axios.get('https://api.mcwxt.top/issues/friendlink').then((response) => JSON.parse(response.data)).then((data) => {
      const _issuesFriendLink = [];
      data.map((value, key) => {
        if (value.issue_state === 'closed') {
          return;
        }
        _issuesFriendLink[key] = {}
        _issuesFriendLink[key].title = value.site_title;
        _issuesFriendLink[key].brief = value.site_brief;
        _issuesFriendLink[key].url = value.site_url;
        _issuesFriendLink[key].icon = value.site_icon;
      });
      issuesFriendLink.value = _issuesFriendLink;
    }).catch(() => issuesFriendLink.value = [{ title: '出问题啦', url: 'https://github.com/MCWXT/Blog/issues', icon: 'https://img.icons8.com/?size=100&id=k0I9K7HGGgQY&format=png&color=000000', brief: '提交错误'}]);
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