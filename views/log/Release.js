import { ref } from 'vue';
import { getTemplate, toast } from 'tao';
import { octokit, config } from '/modules/server/github.js';
import { marked } from '/cdn_modules/marked@9.1.6/lib/marked.esm.min.js';

export default {
  setup() {
    const release = ref();
    octokit.request(`GET /repos/{owner}/{repo}/releases`, config).then((response) => {
      if (response.status !== 200) {
        toast({
          type: 'error',
          content: response.status,
        })
      }
      release.value = response.data;
    });
    return {
      release,
      marked
    }
  },
  name: 'Release',
  template: await getTemplate('/views/log/Release')
}