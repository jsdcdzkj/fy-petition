<template>
	<PageContainer
		showFooter
		:loading="pageConfig.loading"
		@confirm="handleConfirm"
		@scroll="handleScroll"
	>
		<template #aside>
			<AnchorMenu :menus="pageConfig.menus" v-model:anchor="anchor" />
		</template>
		<ModuleCard
			:title="item.name"
			:id="item.href"
			:key="item.href"
			v-for="item in pageConfig.modules"
		>
			<Card
				:title="it.name"
				v-for="it in item.items"
				:key="it.name"
				class="small-item-box"
			>
				<BaseFormInline
					v-bind="it.form"
					v-model:form="it.form.form"
					@instance="it.api.onInstance"
				/>
			</Card>
		</ModuleCard>
	</PageContainer>
</template>

<script setup lang="jsx">
	import PageContainer from "@/layout/page-container.vue";
	import BaseFormInline from "@/modules/base-form/base-form-inline";
	import AnchorMenu from "@/components/AnchorMenu.vue";
	import ModuleCard from "@/components/ModuleCard.vue";
	import { usePage } from "@/modules/base-form/use-page";
	import { Card } from "ant-design-vue";
	import { ref } from "vue";
	const anchor = ref(0);

	const { pageConfig, handleConfirm } = usePage();

	const checkIsInViewport = (rect, windowWidth, windowHeight) => {
		return (
			rect.top < windowHeight &&
			rect.bottom > 0 &&
			rect.left < windowWidth &&
			rect.right > 0
		);
	};

	const handleScroll = () => {
		const windowHeight =
			window.innerHeight || document.documentElement.clientHeight;
		const windowWidth =
			window.innerWidth || document.documentElement.clientWidth;
		const elRect = pageConfig.modules
			.map((item) => item.href)
			.map((href) => {
				return document
					.querySelector(`#${href} > .title`)
					.getBoundingClientRect();
			});

		for (let i = 0; i < elRect.length; i++) {
			const isView = checkIsInViewport(
				elRect[i],
				windowWidth,
				windowHeight
			);
			if (isView) {
				anchor.value = i;
				break;
			}
		}
	};
</script>
