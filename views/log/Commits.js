import { ref, watch } from 'vue';
import { getTemplate } from 'tao';
import { octokit, config } from '/modules/server/github.js';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const commits = ref();
    const page = ref();
    watch(page, (value) => {
      if (value < 0 || typeof +value !== 'number') {
        return;
      }
      octokit.request(`GET /repos/{owner}/{repo}/commits?page=${page.value}`, config).then((response) => {
        if (response.status !== 200) {
          toast({
            type: 'error',
            content: response.status,
          })
        }
        commits.value = response.data;
      });
    });
    page.value = route.query.page || 1;
    
    return {
      commits,
      page
    }
  },
  name: 'Commits',
  template: await getTemplate('/views/log/Commits')
}