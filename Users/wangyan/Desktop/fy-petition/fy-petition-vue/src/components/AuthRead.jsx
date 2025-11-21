import { defineComponent, ref, watch } from "vue";
import { string } from "vue-types";
import AuthReadStatusDialog from "./AuthReadStatusDialog.vue";
import { createModelAsync } from "@/dialog";
import { Button, Input } from "ant-design-vue";
export default defineComponent({
	name: "AuthRead",
	props: {
		// 身份证号
		value: string().def(),
		placeholder: string().def()
	},
	emits: ["update:value", "change"],
	setup(props, { emit }) {
		const authValue = ref(props.value);

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

		const handleRead = (e) => {
			emit("update:value", e.card_no);
			emit("change", e);
		};

		const handleInputAuthNum = () => {
			createModelAsync(
				{ showConfirm: false, showCancel: false, width: "1080px" },
				{},
				<AuthReadStatusDialog onRead={handleRead} />
			);
		};

		return () => (
			<div style="display: flex; gap: 10px;">
				<Input
					v-model:value={authValue.value}
					placeholder={props.placeholder}
					autocomplete="off"
				/>
				<Button type="primary" onClick={handleInputAuthNum}>
					刷读卡器
				</Button>
			</div>
		);
	}
});
