import { FormInstance, RuleObject } from "ant-design-vue/es/form";
import { reactive, toRaw, getCurrentInstance } from "vue";
import { defu } from "defu";

export type InputItemType =
	| "input"
	| "textarea"
	| "select"
	| "radio"
	| "checkbox"
	| "cascader"
	| "input-number"
	| "switch"
	| "tree-select"
	| "date-picker"
	| "auth-read"
	| "curreney"
	| "JointProperty"
	| "checkbox-single"
	| "range-picker";

export type FormInlineSelectType = {
	label?: string;
	value?: string;
	options: any[];
};

export type FormInlineTreeType = {
	label?: string;
	value?: string;
	treeData: any[];
};

export type FormItemType = {
	type: InputItemType;
	span?: number;
	value: any;
	label?: string;
	prop: string;
	manageItemKeys?: ([number, string[]] | [number])[];
	select?: FormInlineSelectType;
	tree?: FormInlineTreeType;
	attrs?: Record<string, any>;
	showTemplate?: boolean;
	defaultValue?: any;
};

export interface BaseFormConfig {
	span?: number;
	minRow?: number;
	formItem?: FormItemType[];
	labelAlign?: "left" | "right";
	labelCol?: number;
	rules?: { [key: string]: RuleObject };
	layout?: "horizontal" | "vertical" | "inline";
}

export type FormApi = {
	setFormItems: (formItems: FormItemType[]) => void;
	setRules: (rules: { [key: string]: RuleObject }) => void;
	resetFields: () => void;
	onInstance: (instance) => void;
	getInstance: () => FormInstance;
};
export interface FormConfig<T> extends BaseFormConfig {
	form?: T;
	onReset?: (data?: any) => void;
	onSearch?: (data?: any) => void;
}

export function bindForm(formItems: FormItemType[]) {
	return formItems.reduce(
		(form, item) => {
			if (item.prop) {
				form[item.prop] = item.value;
			}
			return form;
		},
		{} as Record<string, any>
	);
}

export function handleFormItemRadio(
	config: FormConfig<any>,
	defalutModel: any | null,
	customFunc: (key: string, model: any) => any
) {
	if (!config.formItem) return { ...config, form: undefined };

	// 设置默认值
	// if (defalutModel) {
	config.formItem.forEach((item) => {
		item.defaultValue =
			item.value instanceof Array || item.value instanceof Object
				? JSON.parse(JSON.stringify(item.value))
				: item.value;
		if (defalutModel) {
			if (customFunc) {
				item.value = customFunc(item.prop, defalutModel);
			} else if (item.type == "checkbox") {
				item.value = defalutModel[item.prop]
					? defalutModel[item.prop].split(",")
					: "";
			} else {
				item.value = defalutModel[item.prop];
			}
		}
	});
	// }

	config.formItem
		.filter((item) => item.type == "radio" && item.select)
		.forEach((item) => {
			// 处理bindKeys为[]的清库
			item.select.options.forEach((option) => {
				if (option.bindKeys) {
					if (option.bindKeys.length === 0) {
						option.bindKeys = config.formItem
							.filter((it) => it.prop != item.prop)
							.map((it) => it.prop);
					}
				}
			});
			// 根据默认值查找显示的项
			const optionsItem = item.select.options.find((optionsItem) => {
				return optionsItem.value == item.value;
			});

			// 根据默认值查找不需要显示的项
			const otherOptionsItem = item.select.options.filter(
				(optionsItem) =>
					optionsItem.value !== item.value &&
					optionsItem.bindKeys &&
					optionsItem.bindKeys.length > 0
			);

			// 显示
			if (optionsItem && optionsItem.bindKeys) {
				optionsItem.bindKeys.map((key) => {
					const formItem = config.formItem.find(
						(it) => it.prop == key
					);

					Reflect.set(formItem, "show", true);
				});
			}
			// 不显示
			if (otherOptionsItem) {
				otherOptionsItem
					.map((item) => item.bindKeys)
					.flat()
					.forEach((key) => {
						const item = config.formItem.find(
							(it) => it.prop == key
						);
						Reflect.set(item, "show", false);
					});
			}
		});
	console.log(bindForm(config.formItem));

	// 组装form装配
	const form = { ...config, form: bindForm(config.formItem) };

	config.formItem
		.filter((item) => item.attrs && item.attrs.onChange)
		.forEach((item) => {
			if (item.type == "checkbox") {
				if (item.value) {
					item.attrs.onChange(item, item.value, { ...form });
				}
			}
		});

	return { ...form };
}

export const useForm = <T>(config: FormConfig<T>) => {
	const _config = reactive<FormConfig<any>>({
		...config
	});

	let formInstance = null;

	const methods = {
		setFormItems: (formItems: FormItemType[]) => {
			_config.form = bindForm(formItems) as any;

			_config.formItem = formItems;
		},
		setRules: (rules: { [key: string]: RuleObject }) => {
			_config.rules = rules;
		},
		resetFields: () => {
			if (formInstance) {
				formInstance.resetFields();
			}
		},
		onInstance: (instance) => {
			formInstance = instance;
		},
		getInstance: () => {
			return formInstance;
		}
	};

	return { formConfig: _config, methods };
};
