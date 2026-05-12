import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    current: localStorage.getItem('theme') || 'light',
  }),

  actions: {
    toggleTheme() {
      this.current = this.current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', this.current);
      document.documentElement.setAttribute('data-theme', this.current);
    },
    isDark() {
      if (this.current == 'dark') {
        return true;
      }
      return false;
    },
  },
});
