<template>
	<div class="admin-entry">
		<img
			style="width: 143px; height: 143px"
			src="../assets/dialog/home.png"
			alt=""
			srcset=""
		/>
		<h5>确认返回首页</h5>
		<div style="display: flex; flex-direction: column; align-items: center">
			<span>填写未完成，返回首页后数据无法保存。</span>
			<span style="margin-bottom: 40px; margin-top: 20px"
				>请谨慎操作！</span
			>
		</div>
	</div>
</template>

<script setup lang="js">
	import { inject, reactive } from "vue";
	const { bindFormConfig, bindFormDone } = inject("dialog");
	bindFormConfig(reactive({}));

	bindFormDone(() => {
		return true;
	});
</script>

<style lang="scss" scoped>
	.admin-entry {
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		h5 {
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
