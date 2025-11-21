<template>
	<div class="admin-entry">
		<img
			style="width: 143px; height: 143px"
			src="../../assets/dialog/rest-pwd.png"
			alt=""
			srcset=""
		/>
		<span> 修改管理密码 </span>
		<Form :model="model" :label-col="{ span: 10 }">
			<FormItem v-bind:="validateInfos.tempPass" label="旧密码：">
				<Input
					style="width: 264px"
					type="password"
					autocomplete
					v-model:value="model.tempPass"
					placeholder="旧密码"
				/>
			</FormItem>
			<FormItem v-bind:="validateInfos.password" label="新的管理员密码：">
				<Input
					style="width: 264px"
					type="password"
					autocomplete
					v-model:value="model.password"
					placeholder="请输入新的管理员密码"
				/>
			</FormItem>
		</Form>
	</div>
</template>

<script setup lang="js">
	import { pass } from "@/api/common";
	import { Input, Form, FormItem } from "ant-design-vue";
	import { reactive, inject } from "vue";
	const { bindFormConfig, bindFormDone } = inject("dialog");

	// 表单绑定
	const model = reactive({
		password: "",
		tempPass: ""
	});
	const rules = reactive({
		password: [{ required: true, message: "请输入", trigger: "blur" }],
		tempPass: [{ required: true, message: "请输入", trigger: "blur" }]
	});
	const { validateInfos } = bindFormConfig(model, rules);

	bindFormDone(async () => {
		await pass({ ...model, id: 1 });
		return true;
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
