import {
	Col,
	Form,
	Row,
	FormItem,
	Input,
	Textarea,
	Select,
	SelectOption,
	RangePicker,
	DatePicker,
	RadioGroup,
	Radio,
	Checkbox,
	CheckboxGroup,
	InputNumber
} from "ant-design-vue";
import {
	computed,
	defineComponent,
	reactive,
	ref,
	toRaw,
	watch,
	onMounted
} from "vue";
import { array, number, object, string } from "vue-types";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
import AuthRead from "@/components/AuthRead";
import Currency from "@/components/Currency";
import JointProperty from "@/components/JointProperty.vue";
export default defineComponent({
	props: {
		span: number().def(3),
		minRow: number().def(1),
		formItem: array().def([]),
		rules: object().def(),
		labelAlign: string().def("left"),
		labelCol: number().def(24),
		form: object().def(),
		layout: string().def("vertical")
	},
	emits: ["search", "reset", "update:form", "instance"],
	inheritAttrs: false,
	setup(props, { emit }) {
		const formInstance = ref();
		const form = reactive({ ...toRaw(props.form) });

		watch(
			() => form,
			(e) => {
				emit("update:form", toRaw(e));
			},
			{ deep: true }
		);

		onMounted(() => {
			emit("instance", formInstance.value);
		});

		return () => {
			const renderInput = (prop, attrs) => {
				return (
					<Input
						autocomplete="off"
						v-model:value={form[prop]}
						{...attrs}
					/>
				);
			};

			// renderInputNumber

			const renderInputNumber = (prop, attrs) => {
				return (
					<InputNumber v-model:value={form[prop]} {...attrs}>
						{{
							addonAfter: () =>
								attrs.suffix ? attrs.suffix : null
						}}
					</InputNumber>
				);
			};

			// textarea
			const renderTextarea = (prop, attrs) => {
				return <Textarea v-model:value={form[prop]} {...attrs} />;
			};

			const renderSelecet = (prop, attrs, select) => {
				if (!select) return null;
				return (
					<Select v-model:value={form[prop]} {...attrs}>
						{select.options.map((item) => (
							<SelectOption value={item[select.value || "value"]}>
								{item[select.label || "label"]}
							</SelectOption>
						))}
					</Select>
				);
			};

			const renderRadio = (prop, attrs, select) => {
				if (!select) return null;
				return (
					<RadioGroup v-model:value={form[prop]} {...attrs}>
						{select.options.map((item) => (
							<Radio value={item[select.value || "value"]}>
								{item[select.label || "label"]}
							</Radio>
						))}
					</RadioGroup>
				);
			};

			const renderCheckbox = (prop, attrs, select) => {
				if (!select) return null;
				return (
					<CheckboxGroup v-model:value={form[prop]} {...attrs}>
						{select.options.map((item) => (
							<Checkbox value={item[select.value || "value"]}>
								{item[select.label || "label"]}
							</Checkbox>
						))}
					</CheckboxGroup>
				);
			};

			const renderCheckboxSingle = (prop, attrs, label) => {
				return (
					<Checkbox v-model:checked={form[prop]} {...attrs}>
						{label}
					</Checkbox>
				);
			};

			const renderRangePicker = (prop, attrs) => {
				return (
					<RangePicker
						style="width:100%"
						locale={locale}
						v-model:value={form[prop]}
						{...attrs}
					/>
				);
			};

			const renderDatePicker = (prop, attrs) => {
				return (
					<DatePicker
						style="width:100%"
						locale={locale}
						v-model:value={form[prop]}
						{...attrs}
					/>
				);
			};

			const renderAuthRead = (prop, attrs) => {
				return (
					<AuthRead v-model:value={form[prop]} {...attrs}></AuthRead>
				);
			};

			const renderCurreney = (prop, attrs) => {
				return (
					<Currency v-model:value={form[prop]} {...attrs}></Currency>
				);
			};

			const renderJointProperty = (prop, attrs) => {
				return (
					<JointProperty
						v-model:value={form[prop]}
						{...attrs}
					></JointProperty>
				);
			};

			// 新增渲染纯文本的函数
			const renderPlainText = (text, attrs) => {
				// return null;
				return <span class="textRight">{text}</span>;
			};
			const renderPlainTextLeft = (text, attrs) => {
				// return null;
				return <span class="textLeft">{text}</span>;
			};

			const renderFormItemContent = (item) => {
				let inputAttrs = {
					...item.attrs,
					onChange: (e) => {
						if (item.attrs && item.attrs.onChange) {
							item.attrs.onChange(item, e, props);
						}
					},

					onBlur: (e) => {
						if (item.attrs && item.attrs.onBlur) {
							item.attrs.onBlur(item, e, props);
						}
					}
				};
				switch (item.type) {
					case "input":
						return renderInput(item.prop, inputAttrs);
					case "input-number":
						inputAttrs.style = {
							width: "100%"
						};
						return renderInputNumber(item.prop, inputAttrs);
					case "textarea":
						return renderTextarea(item.prop, item.attrs);
					case "select":
						return renderSelecet(
							item.prop,
							inputAttrs,
							item.select
						);
					case "radio":
						inputAttrs.onChange = (e) => {
							// 获取需要显示的
							const optionsItem = item.select.options.find(
								(item) => item.value == e.target.value
							);
							// 获取不需要显示的
							const otherOptionsItem = item.select.options.filter(
								(item) =>
									item.value !== e.target.value &&
									item.bindKeys &&
									item.bindKeys.length > 0
							);

							// 显示关联的
							if (optionsItem && optionsItem.bindKeys) {
								optionsItem.bindKeys.map((key) => {
									const item = props.formItem.find(
										(it) => it.prop == key
									);
									Reflect.set(item, "show", true);
									form[key] = item.value;
								});
							}

							if (otherOptionsItem) {
								otherOptionsItem
									.map((item) => item.bindKeys)
									.flat()
									.forEach((key) => {
										const item = props.formItem.find(
											(it) => it.prop == key
										);

										Reflect.set(item, "show", false);
										// 设置为默认值
										const value =
											item.defaultValue instanceof
												Array ||
											item.defaultValue instanceof Object
												? JSON.parse(
														JSON.stringify(
															item.defaultValue
														)
													)
												: item.defaultValue;
										item.value = value;
										form[key] = value;
									});
							}

							if (item.attrs && item.attrs.onChange) {
								item.attrs.onChange(
									item,
									e.target.value,
									props
								);
							}
						};
						return renderRadio(item.prop, inputAttrs, item.select);
					case "checkbox":
						return renderCheckbox(
							item.prop,
							inputAttrs,
							item.select
						);

					case "range-picker":
						return renderRangePicker(item.prop, inputAttrs);
					case "date-picker":
						return renderDatePicker(item.prop, inputAttrs);

					case "auth-read":
						return renderAuthRead(item.prop, inputAttrs);

					case "curreney":
						return renderCurreney(item.prop, inputAttrs);

					case "plain-text":
						return renderPlainText(item.text);
					case "plain-text-left":
						return renderPlainTextLeft(item.text);
					case "JointProperty":
						return renderJointProperty(item.prop, inputAttrs);

					default:
						return null;
				}
			};

			const renderColFormItem = (item, index) => {
				if (Reflect.has(item, "show") && !Reflect.get(item, "show")) {
					return null;
				}
				const bind = { label: item.label, name: item.prop };

				return (
					<Col span={item.span ?? props.span} key={item.prop}>
						<FormItem {...bind}>
							{renderFormItemContent(item)}
						</FormItem>
					</Col>
				);
			};

			return (
				<Form
					rules={props.rules}
					model={form}
					labelAlign={props.labelAlign}
					labelCol={{ span: props.labelCol }}
					layout={props.layout}
					ref={formInstance}
				>
					<Row gutter={32}>
						{props.formItem.map((item, index) =>
							renderColFormItem(item, index)
						)}
					</Row>
				</Form>
			);
		};
	}
});
