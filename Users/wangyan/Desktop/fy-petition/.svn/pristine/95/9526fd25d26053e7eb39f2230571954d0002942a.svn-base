import { AxiosResponse } from "axios";
import { RequestClient } from "./instance";
import type { RequestClientConfig } from "./type";

class DownloaderManger {
	client: RequestClient;
	constructor(client: RequestClient) {
		this.client = client;
	}

	download(
		url: string,
		config?: RequestClientConfig
	): Promise<AxiosResponse<Blob>> {
		const donwloadConfig: RequestClientConfig = {
			...config,
			responseType: "blob"
		};
		return this.client.get<AxiosResponse<Blob>>(url, donwloadConfig);
	}

	downloadFile(blob: Blob, fileName: string) {
		const aEl = document.createElement("a");
		const href = URL.createObjectURL(blob);
		aEl.href = href;
		aEl.download = fileName;
		aEl.click();
		URL.revokeObjectURL(href);
	}
}

export { DownloaderManger };
