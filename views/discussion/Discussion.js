import { ref } from 'vue';
import { getTemplate, toast } from 'tao';
import { useRoute, useRouter } from 'vue-router';
import { octokit, config } from '/modules/server/github.js';
import 'https://esm.sh/giscus';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const number = route.params.number;
    const discussion = ref();
    let _discussion;
    octokit.request(`GET /repos/{owner}/{repo}/discussions/${number}`, config).then((response) => {
      if (response.status !== 200) {
        toast({
          type: 'error',
          content: response.status,
        });
      }
      _discussion = response.data;
      octokit.request('POST /markdown', {
        text: _discussion.body,
      }).then((response) => {
        _discussion.body = response.data;
        discussion.value = _discussion;
      });
    });
    return {
      discussion,
      number,
    }
  },
  name: 'Discussion',
  template: await getTemplate('/views/discussion/Discussion')
}