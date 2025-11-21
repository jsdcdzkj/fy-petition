<template>
	<main class="layout-main">
		<Spin tip="加载中..." v-if="loading"> </Spin>
		<section class="layout-aside" v-if="slots.aside">
			<slot name="aside"></slot>
		</section>
		<section class="layout-container" @scroll="handleScroll">
			<slot></slot>
		</section>
		<!-- </Spin> -->
	</main>
	<LayoutFooter v-if="props.showFooter">
		<template v-if="!slots.footer">
			<Button :icon="h(HomeOutlined)" class="back" @click="back"
				>返回登记首页</Button
			>
			<span class="copyright">技术支持：@鼎驰电子科技有限公司2025</span>
			<Button class="confirm" type="primary" @click="handleConfirm"
				>提交并打印诉状</Button
			>
		</template>
		<slot name="footer" v-else-if="slots.footer"></slot>
	</LayoutFooter>
	<RegistrationStatement @change="handleChange" v-if="showRegist" />
</template>

<script setup lang="jsx">
	import { bool } from "vue-types";
	import LayoutFooter from "./layout-footer.vue";
	import { useRouter } from "vue-router";
	import { Button, Spin } from "ant-design-vue";
	import { h, ref } from "vue";
	import { HomeOutlined } from "@ant-design/icons-vue";
	import { createModelAsync } from "@/dialog";
	import BackHomeConfirm from "@/components/BackHomeConfirm.vue";
	import RegistrationStatement from "@/components/RegistrationStatement.vue";
	import { useRoute } from "vue-router";
	const router = useRouter();
	const route = useRoute();
	const emits = defineEmits(["confirm", "change", "scroll"]);
	const props = defineProps({
		showFooter: bool().def(false),
		loading: bool().def(false),
		showTip: bool().def(true)
	});
	const showRegist = ref(props.showTip);
	const slots = defineSlots();
	const back = () => {
		// if (route.query.lawsuit_id) {
		// 	router.replace("/home");
		// 	return;
		// }
		createModelAsync({ width: "1080px" }, {}, <BackHomeConfirm />).then(
			(res) => {
				router.replace("/home");
			}
		);
	};
	const handleConfirm = () => {
		emits("confirm");
	};
	const handleChange = () => {
		// emits("change");
		showRegist.value = false;
	};
	const handleScroll = (e) => {
		// console.log(e);
		emits("scroll", e);
	};
</script>

<style lang="scss" scoped>
	.layout-main {
		flex: 1;
		display: flex;
		position: relative;
		overflow: hidden;
		.ant-spin {
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			z-index: 89;
			background-color: rgba($color: #616161, $alpha: 0.3);
		}
		& > .layout-aside {
			flex-shrink: 0;
			height: 100%;
			overflow: hidden;
			padding: 32px;
		}

		& > .layout-container {
			flex: 1;
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
		}
	}
</style>
