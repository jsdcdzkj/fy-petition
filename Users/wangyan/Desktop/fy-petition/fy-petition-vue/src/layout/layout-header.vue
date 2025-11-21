<template>
	<section class="layout-header">
		<img src="../assets/img/page-title.png" alt="" srcset="" />
		<h4>{{ currentRouteName }}</h4>
		<span> {{ timeStr }} </span>
	</section>
</template>

<script setup lang="js">
	import { pageConfig } from "@/modules";
	import dayjs from "dayjs";
	import { watch } from "vue";
	import { onUnmounted, ref } from "vue";
	import { useRoute } from "vue-router";

	const timeStr = ref(dayjs().format("YYYY-MM-DD hh:mm:ss"));

	const timer = setInterval(() => {
		timeStr.value = dayjs().format("YYYY-MM-DD hh:mm:ss");
	}, 1000);

	onUnmounted(() => {
		clearInterval(timer);
	});
	const route = useRoute();
	const currentRouteName = ref();
	watch(
		() => route.query,
		(newMeta) => {
			if (newMeta.type) {
				currentRouteName.value = pageConfig[Number(newMeta.type)].title;
				localStorage.setItem(
					"currentRouteName",
					currentRouteName.value
				);
			} else {
				currentRouteName.value = "";
			}
		},
		{ immediate: true } // 立即执行一次回调，确保初始值被存储
	);
</script>

<style lang="scss" scoped>
	.layout-header {
		height: 72px;
		padding-bottom: 4px;

		background-image: url(../assets/img/page-header-bg.png);
		background-size: 100% 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 20px;
		img {
			width: 289px;
			height: 36px;
		}

		span {
			font-family:
				Alimama ShuHeiTi,
				Alimama ShuHeiTi;
			font-weight: bold;
			font-size: 22px;
			color: #ffffff;
		}
		@font-face {
			font-family: "WDCH";
			src: url("../assets/font/wdch.ttf");
		}
		h4 {
			margin: 0;
			font-family: WDCH;
			font-weight: normal;
			font-size: 28px;
			line-height: 28px;
			letter-spacing: 2px;
			text-align: center;
			font-style: normal;
			text-transform: none;
			/* 创建渐变背景 */
			background-image: linear-gradient(180deg, #ffffff, #b1caff);
			/* 将背景裁剪到文字区域 */
			-webkit-background-clip: text;
			background-clip: text;
			/* 隐藏文字的默认填充颜色 */
			-webkit-text-fill-color: transparent;
		}
	}
</style>
