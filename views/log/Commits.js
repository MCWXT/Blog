import { ref, watch } from 'vue';
import { getTemplate, toast } from 'tao';
import { octokit, config } from '/modules/server/github.js';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const commits = ref();
    const page = ref();
    watch(page, (value, oldValue) => {
      if (value < 0 || typeof + value !== 'number') {
        return;
      }
      octokit.request(`GET /repos/{owner}/{repo}/commits?page=${page.value}`, config).then((response) => {
        if (response.status !== 200) {
          toast({
            type: 'error',
            content: response.status,
          });
          return;
        }
        if (response.data[0] == undefined) {
          toast({
            type: 'error',
            content: '已经到顶了啦!!',
          });
          page.value = oldValue || 1;
          return;
        }
        router.push({ query: { page: value }});
        scrollTo(0, 0);
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