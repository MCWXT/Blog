import { ref } from 'vue';
import { getTemplate, cache } from 'tao';
import { octokit, config } from '/modules/server/github.js';
export default {
  setup() {
    const discussions = ref([]);
    octokit.request(`GET /repos/{owner}/{repo}/discussions`, config).then((response) => discussions.value = response.data).catch((error) => alert(error));
    return {
      discussions
    }
  },
  name: 'Discussions',
  template: await getTemplate('/views/discussion/Discussions')
}