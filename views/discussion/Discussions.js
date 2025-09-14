import { ref } from 'vue';
import { getTemplate, cache, toast } from 'tao';
import { octokit, config } from '/modules/server/github.js';
export default {
  setup() {
    const discussions = ref();
    octokit.request(`GET /repos/{owner}/{repo}/discussions`, config).then((response) => {
      if (response.status !== 200) {
        toast({
          type: 'error',
          content: response.status,
        })
      }
      discussions.value = response.data.reverse();
    });
    return {
      discussions
    }
  },
  name: 'Discussions',
  template: await getTemplate('/views/discussion/Discussions')
}