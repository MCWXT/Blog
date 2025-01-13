import { ref } from 'vue';
import { getTemplate } from 'tao';
import { Axios } from 'axios';
import friendLink from '/assets/data/friendLink.js';
import LinkCard from '/components/LinkCard.js';
export default {
  setup() {
    const axios = new Axios({});
    const issuesFriendLink = ref();
    axios.get('https://storage.mcwxt.top/data/json/issues.json').then((response) => issuesFriendLink.value = JSON.parse(response.data));
    return {
      friendLink,
      issuesFriendLink
    }
  },
  components: {
    LinkCard
  },
  name: 'Home',
  template: await getTemplate('/views/Home')
}