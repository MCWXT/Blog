import { ref, watch } from 'vue';
import { getTemplate, cache } from 'tao';
import themes from '/data/themes.js';
export default {
  setup() {
    const currentTheme = ref(cache.getItem('currentTheme') || 'light');
    watch(currentTheme, (theme) => cache.setItem('currentTheme', theme));
    return {
      themes,
      currentTheme
    }
  },
  template: await getTemplate('/templates/components/navBar.html')
}