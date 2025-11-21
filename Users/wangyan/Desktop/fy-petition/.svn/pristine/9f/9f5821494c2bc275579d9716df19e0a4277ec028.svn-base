<template>
	<div class="admin-entry">
		<img
			style="width: 143px; height: 143px"
			src="../../assets/dialog/admin-entry.png"
			alt=""
			srcset=""
		/>
		<span> 请输入管理员密码 </span>
		<Form :model="model">
			<FormItem v-bind:="validateInfos.password">
				<Input
					style="width: 264px"
					type="password"
					autocomplete
					v-model:value="model.password"
					placeholder="请输入管理员密码"
				/>
			</FormItem>
		</Form>
	</div>
</template>

<script setup lang="js">
	import { login } from "@/api/common";
	import { useAppStore } from "@/store";
	import { Input, Form, FormItem } from "ant-design-vue";
	import { reactive, inject } from "vue";
	const { bindFormConfig, bindFormDone } = inject("dialog");
	const appStore = useAppStore();
	// 表单绑定
	const model = reactive({
		password: ""
	});
	const rules = reactive({
		password: [{ required: true, message: "请输入", trigger: "blur" }]
	});
	const { validateInfos } = bindFormConfig(model, rules);

	bindFormDone(async () => {
		try {
			await appStore.login(model.password);
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	});
</script>

<style lang="scss" scoped>
	.admin-entry {
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
		span {
			font-family:
				Douyin Sans,
				Douyin Sans;
			font-weight: bold;
			font-size: 40px;
			color: #2b3549;
			line-height: 40px;
		}
	}
</style>
