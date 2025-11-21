<template>
	<div class="admin-manage">
		<div class="bg-card reg-container">
			<div class="title">登记说明</div>
			<div class="container">
				<h5 class="des-title">
					为了方便您更好地参加诉讼，保护您的合法权利，请填写本表。
				</h5>
				<div class="des-content">
					<span
						>1.起诉时需向人民法院提交证明您身份的材料，如身份证复印件、营业执照复印件等。</span
					>
					<span
						>2.本表所列内容是您提起诉讼以及人民法院查明案件事实所需，请务必如实填写。</span
					>
					<span
						>3.本表所涉内容系针对一般保证保险合同纠纷案件，有些内容可能与您的案件无关，您认为与案件无关的项目可以填“无”或不填；
						对于本表中勾选项可以在对应项打“√”；您认为另有重要内容需要列明的，可以在本表尾部或者另附页填写。</span
					>
				</div>
				<Divider style="margin-top: 40px" />
				<h5 class="des-title" style="margin-top: 40px">★特别提示★</h5>
				<div class="des-content">
					<span
						>《中华人民共和国民事诉讼法》第十三条第一款规定：<span
							class="g"
							>“民事诉讼应当遵循诚信原则”</span
						>。
					</span>
					<span
						>如果诉讼参加人违反上述规定，进行
						<span class="r">虚假诉讼、恶意诉讼</span
						>，人民法院将视违法情形依法
						<span class="r">追究责任</span>。</span
					>
				</div>
			</div>
			<div class="dialog-container-footer">
				<Button type="default" @click="handleCancel"> 取消 </Button>
				<Button type="primary" @click="handleConfim">
					我已知晓 {{ timer }} s
				</Button>
			</div>
		</div>
	</div>
</template>

<script setup lang="jsx">
	import { Button, Divider } from "ant-design-vue";
	import { ref } from "vue";
	import { useRouter } from "vue-router";
	const timer = ref(10);
	const router = useRouter();
	const emit = defineEmits(["change"]);
	const t = setInterval(() => {
		--timer.value;
		if (timer.value == 0) {
			emit("change");
			clearInterval(t);
		}
	}, 1000);

	const handleCancel = () => {
		router.push("/home");
		clearInterval(t);
	};

	const handleConfim = () => {
		clearInterval(t);
		emit("change");
	};
</script>

<style lang="scss" scoped>
	.admin-manage {
		z-index: 998;
		position: fixed;
		height: calc(100vh - 72px);
		width: 100vw;
		overflow: hidden;
		top: 72px;
		left: 0px;
		background-image: url(../assets/img/page-bg.png);
		background-size: cover;
		padding: 32px;
		.reg-container {
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, #f9fcff 0%, #ffffff 100%);
			box-shadow:
				inset 0px 2px 0px 0px #ffffff,
				0px 2px 4px 0px rgba(0, 0, 0, 0.1);
			border-radius: 16px 16px 16px 16px;
			border: 1px solid rgba(0, 0, 0, 0.06);
			margin: 0;
			position: relative;
			.title {
				width: 480px;
				height: 72px;
				padding: 0;
				font-size: 34px;
				line-height: 72px;
				top: -12px;
			}

			.dialog-container-footer {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				padding: 32px;
				padding-bottom: 64px;
			}
		}

		.des-title {
			font-family:
				Alibaba PuHuiTi 3,
				Alibaba PuHuiTi 30;
			font-weight: normal;
			font-size: 24px;
			color: rgba(0, 0, 0, 0.85);
			line-height: 48px;
			font-weight: bold;
			margin-top: 100px;
		}
		.des-content {
			display: flex;
			flex-direction: column;

			span {
				font-family:
					Alibaba PuHuiTi 3,
					Alibaba PuHuiTi 30;
				font-weight: normal;
				font-size: 20px;
				color: rgba(0, 0, 0, 0.85);
				line-height: 48px;
				&.g {
					color: #529b2e;
				}
				&.r {
					color: #c45656;
				}
			}
		}
	}
</style>
