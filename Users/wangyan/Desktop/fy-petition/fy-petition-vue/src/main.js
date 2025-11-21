import { createApp } from "vue";
import "./style.css";
import App from "./App";
import "ant-design-vue/dist/reset.css";
import Antd, { message } from "ant-design-vue";
import { createPinia } from "pinia";
import router from "@/router/index";
import { setupEach } from "./router/each";
async function initApp() {
	const app = createApp(App);

	app.use(Antd);
	app.use(createPinia());

	await setupEach(router);
	app.use(router);
	app.mount("#app");

	// appStore.login();
	// 全局消息提醒
	app.config.globalProperties.$message = message;
}
initApp();
