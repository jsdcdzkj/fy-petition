<!-- import { defineComponent } from "vue";
import { string } from "vue-types";

export default defineComponent({
	name: "AuthRead",
	props: {
		// 身份证号
		value: string().def()
	},
	setup(props) {
		return () => <div>11111</div>;
	}
}); -->
<template>
	<div class="auth-read">
		<h4 class="title">
			{{ statusText }}
		</h4>
		<div class="status-1" v-if="page.status === 1">
			<img class="fell" src="../assets/auth/fell.png" alt="" srcset="" />
			<img class="move" src="../assets/auth/move.png" />
		</div>
		<!-- <div class="status-2" v-else-if="page.status === 2">
			<div class="auth-container">
				<img
					class="auth"
					src="../assets/auth/auth.png"
					alt=""
					srcset=""
				/>
			</div>
			<div class="container">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
		</div> -->
		<div class="status-3" v-else-if="page.status === 3">
			<div class="auth-container">
				<img
					class="auth"
					src="../assets/auth/auth.png"
					alt=""
					srcset=""
				/>
			</div>
			<img class="success" src="../assets/auth/success.png" />
		</div>
		<div class="status-4" v-else-if="page.status === 4">
			<img class="success" src="../assets/error.png" />
			<Button @click="handleRest" class="confirm">重新读取</Button>
		</div>
	</div>
</template>

<script setup lang="jsx">
	import {
		reactive,
		onMounted,
		computed,
		onBeforeUnmount,
		inject
	} from "vue";
	import axios from "axios";
	import { Button } from "ant-design-vue";
	const page = reactive({
		status: 1
	});
	const { dialogHidden } = inject("dialog");

	const emits = defineEmits(["read"]);
	let t = 0;
	const sleep = () => {
		return new Promise((resolve) => {
			t = setTimeout(resolve, 5 * 1000);
		});
	};

	const getAuthDetail = async () => {
		const res = await axios.get("/read/readCardNo");
		if (res.data.code == 0) {
			page.status = 3;
			return res.data;
		}
		return null;
	};

	const onRead = async () => {
		for (let i = 0; i < 1; i++) {
			await sleep();
			if (page.status == 5) return;
			const detail = await getAuthDetail();
			if (detail) {
				emits("read", detail);
				dialogHidden();
				return detail;
			}
		}
		page.status = 4;
		return null;
	};

	const handleRest = () => {
		page.status = 1;
		onRead();
	};

	const statusText = computed(() => {
		if (page.status == 1) return "请将身份证放置在感应区";
		if (page.status == 3) return "身份证读取成功";
		if (page.status == 4) return "身份证读取失败";
	});

	onMounted(async () => {
		await onRead();
	});

	onBeforeUnmount(() => {
		page.status = 5;
		clearTimeout(t);
	});
</script>

<style lang="scss" scoped>
	@keyframes move {
		0% {
			right: 32px;
		}
		100% {
			right: calc(100% - 390px);
		}
	}
	.auth-read {
		height: 570px;
		display: flex;
		flex-direction: column;

		.title {
			margin-top: 50px;
			font-family:
				Douyin Sans,
				Douyin Sans;
			font-weight: bold;
			font-size: 40px;
			color: #2b3549;
			line-height: 40px;
			letter-spacing: 4px;
			margin-bottom: 124px;
			text-align: center;
		}
		.status-1 {
			position: relative;
			padding: 0 32px;

			.fell {
				width: 360px;
				height: 220px;
			}

			.move {
				position: absolute;
				right: 32px;
				top: 10px;
				width: 341px;
				height: 341px;
				animation: move cubic-bezier(0.215, 0.61, 0.355, 1) 2000ms
					infinite;
			}
		}

		.status-2 {
			display: flex;
			justify-content: space-around;
			align-items: center;
			.auth-container {
				width: 360px;
				height: 220px;

				background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
				box-shadow: inset 0px 2px 2px 0px rgba(0, 0, 0, 0.13);
				border-radius: 16px 16px 16px 16px;
				border: 1px solid rgba(0, 0, 0, 0.06);
				padding: 10px;
				.auth {
					width: 100%;
					height: 100%;
				}
			}

			.container {
				position: relative;
				width: 200px;
				height: 200px;
			}

			.circle {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 64px;
				height: 64px;
				border-radius: 50%;
				background: linear-gradient(90deg, #2471de 0%, #45a1ef 100%);
				animation: rotateAndGather 2s infinite linear;
			}

			.circle:nth-child(1) {
				--angle: 0deg;
			}
			.circle:nth-child(2) {
				--angle: 120deg;
			}
			.circle:nth-child(3) {
				--angle: 240deg;
			}

			@keyframes rotateAndGather {
				0% {
					transform: translate(-50%, -50%) rotate(var(--angle))
						translateX(100px) rotate(calc(-1 * var(--angle)));
				}
				100% {
					transform: translate(-50%, -50%)
						rotate(calc(var(--angle) + 360deg)) translateX(0)
						rotate(calc(-1 * var(--angle) - 360deg));
				}
			}
		}

		.status-3 {
			display: flex;
			justify-content: space-around;
			align-items: center;
			.auth-container {
				width: 360px;
				height: 220px;

				background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
				box-shadow: inset 0px 2px 2px 0px rgba(0, 0, 0, 0.13);
				border-radius: 16px 16px 16px 16px;
				border: 1px solid rgba(0, 0, 0, 0.06);
				padding: 10px;
				.auth {
					width: 100%;
					height: 100%;
				}
			}

			.success {
				width: 256px;
				height: 256px;
			}
		}

		.status-4 {
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: column;
			gap: 40px;

			.success {
				width: 180px;
				height: 180px;
			}
			.confirm {
				width: 192px;
				height: 48px;
				background: linear-gradient(90deg, #0950bc 0%, #0989bc 100%);
				box-shadow:
					0px 3px 6px 0px rgba(0, 0, 0, 0.1),
					inset 0px 2px 0px 0px rgba(255, 255, 255, 0.25);
				border-radius: 8px 8px 8px 8px;
				color: #fff;
			}
		}
	}
</style>
