import { ref } from 'vue';
import { getTemplate, cache } from 'tao';
import { useRoute } from 'vue-router';
import { marked } from '/cdn_modules/marked@15.0.5/lib/marked.esm.min.js';
import { octokit, config} from '/modules/server/github.js';
import 'https://esm.sh/giscus';
export default {
  setup() {
    const route = useRoute();
    const number = route.params.number;
    const discussion = ref({});
    octokit.request(`GET /repos/{owner}/{repo}/discussions/${number}`, config).then((response) => discussion.value = response.data);
    return {
      discussion,
      number,
      marked,
    }
  },
  name: 'Discussion',
  template: await getTemplate('/views/discussion/Discussion')
}