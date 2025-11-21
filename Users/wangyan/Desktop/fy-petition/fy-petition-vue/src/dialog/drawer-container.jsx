import { Button, Form } from "ant-design-vue";

import { defineComponent, provide, reactive, ref } from "vue";
import { bool, string } from "vue-types";
// import { useDrawerContainer } from "./style";
import { CloseOutlined } from "@ant-design/icons-vue";

const initProps = () => ({
	showCancel: bool().def(true),
	showConfirm: bool().def(true),
	heihgt: string().def("100%")
});
const empty = () => {};

export default defineComponent({
	props: initProps(),
	emits: ["cancel", "confirm"],
	setup(props, { slots, emit }) {
		const applayFunc = ref([]);
		const loading = ref(false);
		const pFormData = reactive({
			applayFunc: [],
			loading: false,
			done: empty
		});

		const bindFormConfig = (model, rules) => {
			const form = Form.useForm(model, rules);
			applayFunc.value.push(form.validate);
			return form;
		};

		const bindFormDone = (done) => {
			pFormData.done = done;
		};

		const handlerCancel = () => {
			if (loading.value) return;
			emit("cancel");
		};

		const handlerConfirm = async () => {
			if (applayFunc.value.length > 0) {
				loading.value = !loading.value;
				try {
					// 校验表单
					const runAll = await Promise.all(
						applayFunc.value.map((func) => func())
					);

					// 校验成功
					if (runAll.every((item) => item)) {
						// 主体内容的提交事件
						emit("confirm", await pFormData.done());
					}
				} catch (e) {
					loading.value = !loading.value;
				} finally {
					loading.value = false;
				}
			} else {
				emit("confirm");
			}
		};

		// 向子组件传递绑定函数
		provide("drawer", { bindFormConfig, bindFormDone });
		return () => {
			const container = slots.default?.();
			return (
				<div>
					<Close onCancel={handlerCancel} />
					<Content content={container}></Content>
					{props.showCancel || props.showConfirm ? (
						<Footer
							showCancel={props.showCancel}
							showConfirm={props.showConfirm}
							loading={loading.value}
							onCancel={handlerCancel}
							onConfirm={handlerConfirm}
						></Footer>
					) : null}
				</div>
			);
		};
	}
});
// 关闭弹框
const Close = (props) => {
	return (
		<CloseOutlined
			class="drawer-container-close"
			onClick={props.onCancel}
		/>
	);
};
// 弹框主体内容
const Content = (props) => {
	return <div class="drawer-container-main">{props.content}</div>;
};

const Footer = (props) => {
	// 取消按钮
	const cancel = props.showCancel ? (
		<Button
			type="default"
			key="cancel"
			loading={props.loading}
			onClick={props.onCancel}
		>
			取消
		</Button>
	) : null;
	// 确认按钮
	const confirm = props.showConfirm ? (
		<Button
			type="primary"
			loading={props.loading}
			key="confirm"
			onClick={props.onConfirm}
		>
			确认
		</Button>
	) : null;
	return <div class="drawer-container-footer">{[cancel, confirm]}</div>;
};
