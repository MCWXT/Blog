import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    current: localStorage.getItem('theme') || 'light',
  }),

  actions: {
    toggleTheme() {
      const style = document.createElement('style');
      style.textContent = `
* {
  transition: color 0.2s linear, 
              background-color 0.2s linear, 
              border-color 0.2s linear,
              border 0.2s linear; /* 如需改变边框粗细/样式也加上 */
  backface-visibility: hidden;
  will-change: color, border-color;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        style.remove();
      }, 800);
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
