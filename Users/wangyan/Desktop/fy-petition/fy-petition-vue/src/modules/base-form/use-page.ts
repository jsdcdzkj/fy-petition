import {
	BaseFormConfig,
	useForm,
	FormConfig,
	FormApi,
	handleFormItemRadio
} from "./use-form";
import { reactive, Reactive, h, toRaw, computed } from "vue";
import { getEntity } from "@/api/common";
import { useRoute } from "vue-router";
import { pageConfig } from "..";

export type ModuleItem = {
	name: string;
	href: string;
	items: {
		name: string;
		form: BaseFormConfig;
		template?: (form: Reactive<FormConfig<any>>) => string;
		temp?: string;
	}[];
};

export type MenusItem = {
	name: string;
	href: string;
};

type ModuleChildrenItem = {
	name: string;
	form: Reactive<FormConfig<any>>;
	api: FormApi;
	template?: (form: Reactive<FormConfig<any>>) => string;
	temp?: string;
};

type ModuleReactiveItem = {
	name: string;
	href: string;
	items: ModuleChildrenItem[];
};

type PageConfig = {
	menus: MenusItem[];
	modules: ModuleReactiveItem[];
	loading: boolean;
};

export const usePage = () => {
	const route = useRoute();

	const {
		struct: modules,
		submit,
		resetForm: customFunc = null
	} = pageConfig[Number(route.query.type)].getPageConfig();

	const pageConfigModel = reactive<PageConfig>({
		menus: [],
		modules: [],
		loading: true
	});

	const isEdit = computed(
		() =>
			route.query.lawsuit_id != undefined ||
			route.query.lawsuit_id != null
	);

	const getModules = (): Promise<ModuleReactiveItem[]> => {
		return new Promise(async (resolve) => {
			if (isEdit.value) {
				const model = await getEntity(route.query);
				resolve(
					modules.map((item) => {
						const items = item.items.map((it) => {
							const { formConfig, methods } = useForm(
								handleFormItemRadio(it.form, model, customFunc)
							);

							return {
								name: it.name,
								form: formConfig,
								api: methods,
								template: it.template || null,
								temp: it.temp || null
							};
						});
						return {
							...item,
							items,
							href: item.href.replace("#", "")
						};
					})
				);
			} else {
				resolve(
					modules.map((item) => {
						const items = item.items.map((it) => {
							const { formConfig, methods } = useForm(
								handleFormItemRadio(it.form, null, null)
							);

							return {
								name: it.name,
								form: formConfig,
								api: methods,
								template: it.template || null,
								temp: it.temp || null
							};
						});
						return {
							...item,
							items,
							href: item.href.replace("#", "")
						};
					})
				);
			}
		});
	};

	const getMenus = () => {
		return modules.map((item) => ({ name: item.name, href: item.href }));
	};

	const validateForm = () => {
		return new Promise(async (resolve, reject) => {
			const list = [];
			const err = [];

			for (let i = 0; i < pageConfigModel.modules.length; i++) {
				const item = pageConfigModel.modules[i];
				for (let j = 0; j < item.items.length; j++) {
					const element = item.items[j];
					try {
						await element.api.getInstance().validate();
						list.push(toRaw(element.form.form));
					} catch (e) {
						element.api
							.getInstance()
							.scrollToField(e.errorFields[0].name[0]);
						err.push({ _module: element, err: e });
					}
				}
			}

			if (err.length > 0) {
				reject(err);
			} else {
				resolve({
					form: list.reduce(
						(obj, item) => {
							const keys = Object.keys(item);
							for (let i = 0; i < keys.length; i++) {
								const element = keys[i];

								obj[element] =
									item[element] instanceof Array
										? item[element].every(
												(item) =>
													typeof item == "string" ||
													typeof item == "number"
											)
											? item[element].join(",")
											: item[element]
										: item[element];
							}

							return obj;
						},
						isEdit.value ? { id: route.query.lawsuit_id } : {}
					),
					modules: pageConfigModel.modules
				});
			}
		});
	};
	const handleConfirm = () => {
		validateForm().then(submit);
	};

	pageConfigModel.menus = getMenus();
	getModules().then((res) => {
		pageConfigModel.modules = res;
		pageConfigModel.loading = false;
	});

	return { pageConfig: pageConfigModel, validateForm, handleConfirm };
};
