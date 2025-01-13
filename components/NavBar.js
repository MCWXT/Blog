import { ref, watch } from 'vue';
import { getTemplate, cache } from 'tao';
import themes from '/assets/data/themes.js';
export default {
  setup() {
    const currentTheme = ref(cache.getItem('currentTheme') || 'light');
    watch(currentTheme, (theme) => cache.setItem('currentTheme', theme));
    return {
      themes,
      currentTheme
    }
  },
  name: 'NavBar',
  template: await getTemplate('/components/NavBar')
}