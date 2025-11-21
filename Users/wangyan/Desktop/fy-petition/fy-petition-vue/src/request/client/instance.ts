import axios from "axios";
import { defu as merge } from "defu";
import type { AxiosInstance } from "axios";
import type { RequestClientConfig, RefreshQueueItem } from "./type";
import { HEADERS, TIME_OUT, METHOD } from "./common";
import { InterceptorManager } from "./interceptors";
import { CancelTokenManager } from "./cancel-token";
import { DownloaderManger } from "./downloader";
import { UploaderManager } from "./uploader";
class RequestClient {
	options: RequestClientConfig | null = null;
	instance: AxiosInstance | null = null;
	addRequestInterceptor: InterceptorManager["addRequestInterceptor"];
	addResponseInterceptor: InterceptorManager["addResponseInterceptor"];
	download: DownloaderManger["download"];
	downloadFile: DownloaderManger["downloadFile"];
	upload: UploaderManager["upload"];
	refreshTokenQueue: Array<RefreshQueueItem> = [];
	cancelTokenManager?: CancelTokenManager;
	refreshing?: boolean;

	constructor(options: RequestClientConfig = {}) {
		this.options = merge(options, {
			headers: {
				...HEADERS
			},
			timeout: TIME_OUT
		} as RequestClientConfig);

		this.instance = axios.create(this.options);

		const interceptorManager = new InterceptorManager(this.instance);
		this.addRequestInterceptor =
			interceptorManager.addRequestInterceptor.bind(interceptorManager);
		this.addResponseInterceptor =
			interceptorManager.addResponseInterceptor.bind(interceptorManager);
		if (this.options.enableCancelTokenManger) {
			this.cancelTokenManager = new CancelTokenManager(this);
		}

		const downloadManger = new DownloaderManger(this);
		this.download = downloadManger.download.bind(downloadManger);
		this.downloadFile = downloadManger.downloadFile.bind(downloadManger);

		const uploadManager = new UploaderManager(this);
		this.upload = uploadManager.upload.bind(downloadManger);
	}

	get<T = any>(url: string, config: RequestClientConfig = {}): Promise<T> {
		return this.request(merge({ url, method: METHOD.GET }, config));
	}

	post<T = any>(
		url: string,
		data: any,
		config: RequestClientConfig = {}
	): Promise<T> {
		return this.request(merge({ url, data, method: METHOD.POST }, config));
	}

	delete<T>(
		url: string,
		data: T,
		config: RequestClientConfig = {}
	): Promise<T> {
		return this.request(
			merge({ url, data, method: METHOD.DELETE }, config)
		);
	}

	put<T = any>(
		url: string,
		data: any,
		config: RequestClientConfig = {}
	): Promise<T> {
		return this.request(merge({ url, data, method: METHOD.PUT }, config));
	}

	async request<T = any>(config: RequestClientConfig): Promise<T> {
		try {
			const response = await this.instance?.request({
				...config
			});
			return response as T;
		} catch (error: any) {
			return Promise.reject(error);
		}
	}
}

export { RequestClient };
