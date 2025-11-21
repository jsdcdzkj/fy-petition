import { AxiosResponse } from "axios";
import { RequestClient } from "./instance";
import { RequestClientConfig } from "./type";

class UploaderManager {
	client: RequestClient;

	constructor(client: RequestClient) {
		this.client = client;
	}

	upload<T = any>(
		url: string,
		data: { files: Array<File> } & Record<string, any>,
		config?: RequestClientConfig
	): Promise<AxiosResponse<T>> {
		const formData = new FormData();
		Object.entries(data).forEach(([key, value]) => {
			if (key == "files") {
				(value as Array<File>).forEach((item) =>
					formData.append("file", item)
				);
			} else {
				formData.append(key, value);
			}
		});
		const finalConfig: RequestClientConfig = {
			...config,
			headers: {
				"Content-Type": "multipart/form-data",
				...config?.headers
			}
		};
		return this.client.post(url, formData, finalConfig);
	}
}

export { UploaderManager };
