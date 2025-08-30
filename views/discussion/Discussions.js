import { ref } from 'vue';
import { getTemplate, cache } from 'tao';
import { octokit, config } from '/modules/server/github.js';
export default {
  setup() {
    const discussions = ref();
    octokit.request(`GET /repos/{owner}/{repo}/discussions`, config).then((response) => {
      if (response.status !== 200) {
        router.push('/error/' + response.status);
      }
      discussions.value = response.data;
    });
    return {
      discussions
    }
  },
  name: 'Discussions',
  template: await getTemplate('/views/discussion/Discussions')
}