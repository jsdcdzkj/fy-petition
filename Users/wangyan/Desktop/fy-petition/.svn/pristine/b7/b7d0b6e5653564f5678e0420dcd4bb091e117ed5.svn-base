<template>
	<div class="anchor-menu">
		<a
			:class="['anchor-menu-item', anchor == index ? 'active' : '']"
			v-for="(item, index) in menus"
			:key="index"
			@click="handleChange(index)"
			:href="item.href"
		>
			<span class="index">{{ zhIndex[index] }}</span>
			<span class="label">{{ item.name }}</span>
		</a>
	</div>
</template>

<script setup lang="js">
	import { array, number } from "vue-types";
	import { ref, watch } from "vue";
	const zhIndex = [
		"一",
		"二",
		"三",
		"四",
		"五",
		"六",
		"七",
		"八",
		"九",
		"十"
	];
	const anchor = ref(0);
	const props = defineProps({
		menus: array().def([]),
		anchor: number().def(0)
	});
	const emit = defineEmits(["update:anchor"]);
	const handleChange = (index) => {
		anchor.value = index;
		emit("update:anchor", index);
	};

	watch(
		() => props.anchor,
		(v) => {
			anchor.value = v;
		},
		{ immediate: true }
	);
</script>

<style lang="scss" scoped>
	.anchor-menu {
		display: flex;
		flex-direction: column;
		gap: 10px;
		.anchor-menu-item {
			width: 239px;
			height: 56px;
			background-image: url("../assets/img/Frame_114266@2x.png");
			background-size: 100% 100%;
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 10px;
			padding-inline: 20px;
			text-decoration: none;
			.label {
				font-family:
					Alibaba PuHuiTi 3,
					Alibaba PuHuiTi 30;
				font-weight: normal;
				font-size: 16px;
				color: rgba(0, 0, 0, 0.65);
			}
			.index {
				width: 28px;
				height: 28px;
				background: linear-gradient(180deg, #e5e5e5 0%, #ffffff 100%);
				border-radius: 48px 48px 48px 48px;
				line-height: 28px;
				text-align: center;
				display: inline-block;
				color: rgba(0, 0, 0, 0.45);
			}
			&.active {
				background-image: url("../assets/img/Frame_1@2x.png");
				.index {
					background: rgba(255, 255, 255, 0.3);
					color: #fff;
				}
				.label {
					color: #fff;
				}
			}
		}
	}
</style>
