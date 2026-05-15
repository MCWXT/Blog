import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('access_token') || null,
  }),
  getters: {
    isLogin: (state) => !!state.token,
  },
  actions: {
    login(token) {
      this.token = token;
      localStorage.setItem('access_token', token);
    },
    logout() {
      this.token = null;
      localStorage.removeItem('access_token');
    },
  },
});
