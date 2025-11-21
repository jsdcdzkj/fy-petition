import { defineComponent, ref, watch } from "vue";
import { bool, string } from "vue-types";
import AuthReadStatusDialog from "./AuthReadStatusDialog.vue";
import { createModelAsync } from "@/dialog";
import { Button, Checkbox, Input } from "ant-design-vue";
export default defineComponent({
	name: "AuthRead",
	props: {
		// 身份证号
		value: string().def(),
		placeholder: string().def(),
		isCan: bool().def(false)
	},
	emits: ["update:value", "update:isCan"],
	setup(props, { emit }) {
		const authValue = ref(props.value);
		const checked = ref(props.isCan);

		watch(
			() => authValue.value,
			(newVal) => {
				emit("update:value", newVal);
			}
		);

		watch(
			() => props.value,
			(newVal) => {
				authValue.value = newVal;
			}
		);

		watch(
			() => checked.value,
			(newVal) => {
				if (newVal) {
					authValue.value = "";
				}
				emit("update:isCan", newVal);
			}
		);

		return () => (
			<div style="display: flex; gap: 10px;">
				<Input
					v-model:value={authValue.value}
					placeholder={props.placeholder}
					disabeld={checked.value}
				/>
				<Checkbox v-model:checked={checked.value} />
			</div>
		);
	}
});
