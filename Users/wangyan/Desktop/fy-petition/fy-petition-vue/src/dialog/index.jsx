import { Drawer, Modal } from "ant-design-vue";
import { h, render, cloneVNode } from "vue";
import DialogContainer from "./dialog-container";
import DrawerContainer from "./drawer-container";

export const createDom = (con, temp) => {
	let template = cloneVNode(temp);
	let container = document.createDocumentFragment();
	const unMountedModel = () => {
		if (template && template.el) {
			// 销毁弹框组件
			render(null, container);
			template = undefined;
		}
	};

	const onModelClose = async () => {
		if (template && template.component) {
			template.component.props.open = false;
			template.component.update();
		}
	};

	const onModelConfirm = async (form) => {
		// 等待弹框动画关闭完成
		await onModelClose();
		if (callback) {
			callback(form);
		}
	};

	if (template.props == null) {
		template.props = {
			onCancel: () => unMountedModel(),
			onConfirm: () => unMountedModel()
		};
	} else {
		template.props = {
			...template.props,
			onCancel: () => unMountedModel(),
			onConfirm: () => unMountedModel()
		};
	}

	render(template, container);
	document.body.appendChild(container);
};

export const createModel = (props, data, template, callback) => {
	const container = document.createDocumentFragment();
	let instance;

	const unMountedModel = () => {
		if (instance && instance.el) {
			// 销毁弹框组件
			render(null, container);
			instance = undefined;
		}
	};

	const onModelClose = async () => {
		if (instance && instance.component) {
			instance.component.props.open = false;
			instance.component.update();
		}
	};

	const wrapper = () => {
		return (
			<DialogContainer
				showCancel={props.showCancel}
				showConfirm={props.showConfirm}
				onCancel={onModelClose}
				onConfirm={onModelConfirm}
			>
				{h(template, { ...data })}
			</DialogContainer>
		);
	};

	const onModelConfirm = async (form) => {
		// 等待弹框动画关闭完成
		await onModelClose();
		if (callback) {
			callback(form);
		}
	};

	instance = h(
		Modal,
		{
			open: true,
			maskClosable: false,
			onCancel: onModelClose,
			onOk: onModelConfirm,
			afterClose: unMountedModel,
			centered: true,
			footer: null,
			closable: false,
			...props
		},
		() => h(wrapper)
	);
	render(instance, container);
};
export const createModelAsync = (props, data, template) => {
	return new Promise((resolve) => {
		createModel(props, data, template, (form) => {
			resolve(form);
		});
	});
};

export const createDrawer = (props, data, template, callback) => {
	const container = document.createDocumentFragment();
	let instance;

	const unMountedModel = (open) => {
		if (!open && instance && instance.el) {
			// 销毁弹框组件
			render(null, container);
			instance = undefined;
		}
	};

	const onModelClose = async () => {
		if (instance && instance.component) {
			instance.component.props.open = false;
			instance.component.update();
			// await sleep(500);
		}
	};

	const wrapper = () => {
		return (
			<DrawerContainer
				onCancel={onModelClose}
				onConfirm={onModelConfirm}
				showCancel={props.showCancel || false}
				showConfirm={props.showConfirm || false}
			>
				{h(template, { ...data })}
			</DrawerContainer>
		);
	};

	const onModelConfirm = async (form) => {
		// 等待弹框动画关闭完成
		await onModelClose();
		if (callback) {
			callback(form);
		}
	};

	instance = h(
		Drawer,
		{
			open: true,
			maskClosable: false,
			onClose: onModelClose,
			onOk: onModelConfirm,
			onAfterOpenChange: unMountedModel,
			footer: null,
			closable: false,
			bodyStyle: { padding: "0" },
			...props
		},
		() => h(wrapper)
	);

	render(instance, container);
};
