import { defineComponent, ref, watch } from "vue";
import { array, string } from "vue-types";
import { Button, Input } from "ant-design-vue";
import { useInjectFormItemContext } from "ant-design-vue/es/form";

export default defineComponent({
	props: {
		value: string().def("人民币CNY"),
		currencyList: array().def(["人民币CNY", "美元USD", "欧元EUR"])
	},
	emits: ["update:value", "blur"],
	setup(props, { emit }) {
		const currencyList = props.currencyList;
		const formItemContext = useInjectFormItemContext();

		const curreneyValue = ref();
		const inputValue = ref();

		watch(
			() => curreneyValue.value,
			() => {
				emit("update:value", curreneyValue.value);
				formItemContext.onFieldBlur();
			}
		);

		watch(
			() => inputValue.value,
			() => {
				emit("update:value", inputValue.value);
				formItemContext.onFieldBlur();
			}
		);

		watch(
			() => props.value,
			() => {
				if (!props.value) {
					curreneyValue.value = "";
					inputValue.value = "";
				} else {
					if (currencyList.includes(props.value)) {
						curreneyValue.value = props.value;
					} else {
						inputValue.value = props.value;
					}
					emit("update:value", props.value);
					formItemContext.onFieldBlur();
				}
			},
			{ immediate: true }
		);

		return () => (
			<div style="display: flex; gap: 10px;flex-wrap:wrap">
				{currencyList.map((item) => (
					<Button
						onClick={() => {
							curreneyValue.value = item;
							inputValue.value = "";
						}}
						type={
							curreneyValue.value == item ? "primary" : "default"
						}
						key={item}
					>
						{item}
					</Button>
				))}
				<Input
					placeholder="请输入其他"
					v-model:value={inputValue.value}
					style="max-width:160px"
					onFocus={() => {
						curreneyValue.value = "";
					}}
				/>
			</div>
		);
	}
});
