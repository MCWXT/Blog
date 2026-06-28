import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		token: null,
    remaining: 0
	}),
	getters: {
		isLogin: state => !!state.token,
		canRequest: state => {
			return state.count < state.limit;
		}
	},
	actions: {
		login(token) {
			this.token = token;
		},
		logout() {
			this.token = null;
		},
	},
	persist: true
});
