import { ref } from 'vue';
import { getTemplate, cache } from 'tao';
import { useRoute } from 'vue-router';
import { marked } from '/cdn_modules/marked@9.1.6/lib/marked.esm.min.js';
import { octokit, config} from '/modules/server/github.js';
export default {
  setup() {
    const route = useRoute();
    const number = route.params.number;
    const discussion = ref({});
    const comments = ref([]);
    octokit.request(`GET /repos/{owner}/{repo}/discussions/${number}`, config).then((response) => discussion.value = response.data);
    octokit.request(`GET /repos/{owner}/{repo}/discussions/${number}/comments`, config).then((response) => comments.value = response.data);
    return {
      discussion,
      comments,
      number,
      marked,
    }
  },
  name: 'Discussion',
  template: await getTemplate('/views/discussion/Discussion')
}