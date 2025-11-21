import axios from "axios";
import {
	ResponseRefreshTokenOperation,
	ResponseConfigInterceptor
} from "./type";

export const doAuthResponseInterceptor = ({
	client,
	doAuth,
	doRefreshToken,
	enableRefreshToken
}: ResponseRefreshTokenOperation): ResponseConfigInterceptor => {
	return {
		onRejected: async (error) => {
			const { config, response } = error;
			if (response?.status !== 401) {
				throw error;
			}
			// 禁用刷新挑战到登录页面
			if (!enableRefreshToken || config.__noAuthToLogin) {
				await doAuth();
				throw error;
			}

			// 正在刷新
			if (client.refreshing) {
				return new Promise((resolve) => {
					client.refreshTokenQueue.push((newToken: string) => {
						config.headers.Authorization = newToken;
						resolve(client.request(config));
					});
				});
			}
			// 刷新token
			client.refreshing = true;
			config.__noAuthToLogin = true;

			try {
				const newToken = await doRefreshToken();
				client.refreshTokenQueue.forEach((callback) =>
					callback(newToken)
				);
				client.refreshTokenQueue = [];
				return client.request(config);
			} catch (error) {
				client.refreshTokenQueue.forEach((callback) => callback(""));
				client.refreshTokenQueue = [];
				await doAuth();
				throw error;
			}
		}
	};
};

export const doResponseInterceptor = (
	messageFunc?: (message: string, error: any) => any
): ResponseConfigInterceptor => {
	return {
		onRejected(error) {
			if (axios.isCancel(error)) {
				return Promise.reject(error);
			}
			const err: string = error?.toString() ?? "";
			let errMsg = "";
			if (err?.includes("Network Error")) {
				errMsg = "网络错误";
			} else if (error?.message?.includes?.("timeout")) {
				errMsg = "请求超时";
			}
			if (errMsg) {
				messageFunc?.(errMsg, error);
				return Promise.reject(error);
			}

			let errorMessage = error?.response?.data?.error?.message ?? "";
			const status = error?.response?.status;

			switch (status) {
				case 400: {
					errorMessage = "坏的请求";
					break;
				}
				case 401: {
					errorMessage = "登录状体失效";
					break;
				}
				case 403: {
					errorMessage = "服务器拒绝请求";
					break;
				}
				case 404: {
					errorMessage = "请求地址未找到";
					break;
				}
				case 408: {
					errorMessage = "请求超时";
					break;
				}
				default: {
					errorMessage = "服务器异常错误";
				}
			}
			messageFunc?.(errorMessage, error);
			return Promise.reject(error);
		}
	};
};
