<template>
	<PageContainer :showTip="false">
		<div
			style="
				display: flex;
				flex-direction: column;
				cursor: alias;
				align-items: center;
				justify-content: center;
				height: 100%;
			"
		>
			<div class="modules-title">请选择诉状登记类型</div>
			<div class="modules">
				<div
					class="module-item"
					v-for="(item, index) in pageItems"
					:key="index"
					:style="`background-image:url(${item.bg})`"
					@click="handleClick(item)"
				>
					<img :src="item.icon" alt="" srcset="" />
					<span>{{ item.value }}</span>
				</div>
			</div>
			<Button class="btn" @click="handleAdminEntry">管理员入口</Button>
		</div>
	</PageContainer>
</template>

<script setup lang="jsx">
	import { ref } from "vue";
	import { pageConfig } from "../modules";

	import { getModules } from "@/assets/img";
	import { Button } from "ant-design-vue";
	import PageContainer from "@/layout/page-container.vue";
	import { useRouter } from "vue-router";
	import { createModelAsync } from "@/dialog";
	import AdministratorEntry from "./dialog/AdministratorEntry.vue";

	const pageItems = ref([]);
	const router = useRouter();

	getModules(pageConfig).then((res) => {
		pageItems.value = res;
	});

	const handleClick = (item) => {
		router.push({
			path: "/subset1",
			query: {
				type: item.type
			}
		});
	};

	const handleAdminEntry = () => {
		createModelAsync({ width: "820px" }, {}, <AdministratorEntry />).then(
			() => {
				router.push("/admin-manage");
			}
		);
	};
</script>

<style lang="scss" scoped>
	.modules-title {
		width: 519px;
		height: 110px;
		background-image: url(../assets/img/home-top-bg.png);
		background-size: cover;
		margin: calc(40vh / 3 - 80px) auto;
		margin-top: 0;
		font-family:
			Douyin Sans,
			Douyin Sans;
		font-weight: bold;
		font-size: 34px;
		line-height: 34px;
		letter-spacing: 3px;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		text-align: left;
		font-style: normal;
		text-transform: none;
		text-align: center;
		line-height: 100px;
		color: #fff;
	}
	.btn {
		width: 150px;
		height: 48px;
		background: linear-gradient(90deg, #216fc4 0%, #5a9ce6 100%);
		border-radius: 8px 8px 8px 8px;

		color: #fff;
		position: fixed;
		top: 100px;
		right: 48px;
	}
	.btn:hover {
		color: #fff;
	}
	.modules {
		display: grid;
		grid-template-columns: repeat(5, 220px);
		grid-template-rows: repeat(2, 260px);
		grid-row-gap: 20px;
		grid-column-gap: 20px;
		width: 1180px;
		margin: 0 auto;
	}
	.module-item {
		background-size: 100% 100%;
		background-repeat: no-repeat;
		width: 220px;
		height: 260px;

		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		gap: 40px;
		img {
			width: 96px;
			height: 86px;
			margin-top: 48px;
			margin-bottom: 12px;
		}

		span {
			font-family:
				Alibaba PuHuiTi 3,
				Alibaba PuHuiTi 30;
			font-weight: normal;
			font-size: 18px;
			color: #ffffff;

			display: inline-block;
		}
	}
</style>
