import { login } from "@/api/common";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
	state: () => {
		return {
			token: localStorage.getItem(import.meta.env.VITE_TOKEN) || ""
		};
	},
	actions: {
		async login(password) {
			const res = await login({
				username: "admin",
				password: password ? password : "123456"
			});

			this.token = res.jsdcToken;
			localStorage.setItem(import.meta.env.VITE_TOKEN, res.jsdcToken);
			return true;
		}
	},
	getters: {
		isLogin() {
			return true;
		}
	}
});
