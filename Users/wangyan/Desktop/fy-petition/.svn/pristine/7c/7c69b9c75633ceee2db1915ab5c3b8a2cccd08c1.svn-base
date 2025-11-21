import router from "@/router";
import {
	RequestClient,
	doAuthResponseInterceptor,
	doResponseInterceptor
} from "@/request/index";
import { message } from "ant-design-vue";

export const request = new RequestClient({
	baseURL: import.meta.env.VITE_BASE_API,
	timeout: 10000
});

doAuthResponseInterceptor({
	client: request,
	doAuth: () => {
		return Promise.resolve();
	},
	doRefreshToken: () => {
		return Promise.resolve();
	},
	enableRefreshToken: false
});

const responseIn = doResponseInterceptor((messageStr) => {
	message.error(messageStr);
});

// 请求拦截器
request.addRequestInterceptor((config) => {
	// 设置token
	config.headers[import.meta.env.VITE_TOKEN] = localStorage.getItem(
		import.meta.env.VITE_TOKEN
	);
	return config;
});
// 响应拦截器
request.addResponseInterceptor((response) => {
	const { data, config } = response;
	// 文件流
	if (config.responseType == "blob") return data;
	const { code, data: backData, msg } = data;

	if (code === 200) {
		if (config.operationMessage) {
			message.success(config.operationMessage);
		}
		return backData;
	} else if (code == 401) {
		// 登录失效
		// useUserStore().logout();
		// router.replace({ name: "Login" });
		message.error(msg);
		request.cancelTokenManager?.cancelRequest();
	} else if (code == 500) {
		//服务器错误
		message.error(msg);
		return Promise.reject(msg);
	}
	return data;
}, responseIn.onRejected);
