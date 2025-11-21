import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import type { RequestClientConfig, RequestClientResponse } from "./type";

export const clientResponseInterceptor = (
	response: RequestClientResponse<any>
) => {
	return response;
};

export const clientRequestInterceptor = (config: RequestClientConfig) => {
	return config;
};

export class InterceptorManager {
	instance: AxiosInstance;

	constructor(instance: AxiosInstance) {
		this.instance = instance;
	}

	addRequestInterceptor(
		onFulfilled?:
			| ((
					value: InternalAxiosRequestConfig<any>
			  ) =>
					| InternalAxiosRequestConfig<any>
					| Promise<InternalAxiosRequestConfig<any>>)
			| null,
		onRejected?: ((error: any) => any) | null
	) {
		this.instance.interceptors.request.use(onFulfilled, onRejected);
	}

	addResponseInterceptor<T>(
		onFulfilled?:
			| ((value: RequestClientResponse<T>) => any | Promise<any>)
			| null,
		onRejected?: ((error: any) => any) | null
	) {
		this.instance.interceptors.response.use(onFulfilled, onRejected);
	}
}
