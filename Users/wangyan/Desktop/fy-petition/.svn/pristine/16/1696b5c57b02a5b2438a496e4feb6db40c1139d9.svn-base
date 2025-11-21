import axios, { CancelTokenSource } from "axios";
import { RequestClient } from "./instance";
import { RequestClientResponse, RequestInterClientConfig } from "./type";

type ItemCancelToken = {
	id: string;
	source: CancelTokenSource;
};

export class CancelTokenManager {
	instance: RequestClient;
	cancelTokenQueue: Array<ItemCancelToken> = [];
	constructor(instance: RequestClient) {
		this.instance = instance;
		this.instance.addRequestInterceptor(
			(config: RequestInterClientConfig) => {
				const source = axios.CancelToken.source();
				this.cancelTokenQueue.push({
					id: config.url!,
					source
				});
				config.cancelToken = source.token;
				return config;
			}
		);
		this.instance.addResponseInterceptor(
			(response: RequestClientResponse<any>) => {
				const findIndex = this.cancelTokenQueue.findIndex(
					(item) => item.id == response.config.url
				);
				if (findIndex > -1) {
					this.cancelTokenQueue.splice(findIndex, 1);
				}
				return response;
			}
		);
	}

	cancelRequest() {
		for (let i = this.cancelTokenQueue.length - 1; i >= 0; i--) {
			const element = this.cancelTokenQueue[i];
			element.source.cancel("cancel request");
		}
		this.cancelTokenQueue = [];
	}
}
