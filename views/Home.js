import { ref } from 'vue';
import { getTemplate, axios } from 'tao';
import friendshipLink from '/assets/data/FriendshipLink.js';
import LinkCard from '/components/LinkCard.js';
export default {
  setup() {
    const issuesFriendLink = ref();
    axios.get('https://storage.mcwxt.top/data/json/issues.json').then((response) => issuesFriendLink.value = JSON.parse(response.data));
    return {
      friendshipLink,
      issuesFriendLink
    }
  },
  components: {
    LinkCard
  },
  name: 'Home',
  template: await getTemplate('/views/Home')
}