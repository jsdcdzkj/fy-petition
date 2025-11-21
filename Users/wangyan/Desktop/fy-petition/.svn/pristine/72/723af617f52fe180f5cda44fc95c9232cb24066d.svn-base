<template>
	<PageContainer
		showFooter
		:loading="pageConfig.loading"
		@confirm="handleConfirm"
	>
		<template #aside>
			<AnchorMenu :menus="pageConfig.menus" />
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

<script setup lang="js">
	import PageContainer from "@/layout/page-container.vue";
	import BaseFormInline from "@/modules/base-form/base-form-inline";
	import AnchorMenu from "@/components/AnchorMenu.vue";

	import ModuleCard from "@/components/ModuleCard.vue";
	import { usePage } from "@/modules/base-form/use-page";
	import { Card } from "ant-design-vue";

	const { pageConfig, handleConfirm } = usePage();
</script>
