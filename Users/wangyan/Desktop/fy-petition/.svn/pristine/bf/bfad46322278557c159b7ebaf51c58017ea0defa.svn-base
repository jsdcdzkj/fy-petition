import { toRaw, h } from "vue";
import { createDom } from "@/dialog";
import { getEntity } from "@/api/common";
import { handleFormItemRadio, useForm } from "./use-form";
import { pageConfig } from "..";
import GeneratePleadingsDialog from "@/components/GeneratePleadingsDialog";
export const usePageDoc = (query) => {
	const { struct: modules, resetForm: customFunc = null } =
		pageConfig[Number(query.type)].getPageConfig();

	const getModules = async () => {
		const model = await getEntity(query);
		return modules.map((item) => {
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
		});
	};

	const toDoc = async () => {
		const modules = await getModules();
		createDom(
			document.body,
			h(GeneratePleadingsDialog, { modules: toRaw(modules) })
		);
	};

	return toDoc;
};
