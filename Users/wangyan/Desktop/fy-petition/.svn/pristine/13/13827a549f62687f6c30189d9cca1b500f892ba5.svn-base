import { useAppStore } from "@/store";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: true });

export async function setupEach(router) {
	const appStore = useAppStore();
	router.beforeEach(async (to, _, next) => {
		NProgress.start();
		if (!appStore.isLogin) {
			await appStore.login();
		}
		next();
	});
	router.afterEach(() => {
		NProgress.done();
	});
}
