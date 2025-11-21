<template>
	<div>
		<div class="form-item" v-for="(item, index) in list" :key="index">
			<div style="display: flex; align-items: center; gap: 10px">
				<FormItem style="margin-bottom: 0">
					<div style="display: flex; align-items: center; gap: 10px">
						<div style="width: 140px; text-align: left">
							{{ item.label }}:
						</div>
						<RadioGroup v-model:value="item.radio">
							<Radio value="0">原告</Radio>
							<Radio value="1">被告</Radio>
							<Radio value="2" v-if="item.showOther">
								<div
									class="form-item"
									style="align-items: center; gap: 10px"
								>
									<span style="flex-shrink: 0">其他</span>
									<Input
										v-if="item.radio == 2"
										v-model:value="item.other_content"
									/>
								</div>
							</Radio>
						</RadioGroup>
					</div>
				</FormItem>
			</div>
			<Button
				v-if="item.newAdd"
				type="primary"
				:icon="h(DeleteOutlined)"
				size="middle"
				danger=""
				@click="() => handleDelete(index)"
				>删除</Button
			>
		</div>
		<Button
			style="width: 100%; height: 40px; margin-top: 10px"
			@click="handleAdd"
			:icon="h(PlusOutlined)"
			>添加</Button
		>
	</div>
</template>

<script setup lang="jsx">
	import { RadioGroup, Radio, Input, Button, FormItem } from "ant-design-vue";
	import { h, ref, watch } from "vue";
	import { DeleteOutlined, PlusOutlined } from "@ant-design/icons-vue";
	import { array, bool, func, number } from "vue-types";

	const props = defineProps({
		value: array().def(),
		template: func().def(),
		noDelLen: number().def(3),
		showOther: bool().def(true)
	});

	const emit = defineEmits(["update:value"]);

	const list = ref([]);

	watch(
		() => props.value,
		(newVal) => {
			list.value = newVal;
		},
		{ immediate: true }
	);

	watch(
		() => list.value,
		(newVal) => {
			emit("update:value", newVal);
		},
		{ deep: true }
	);

	const handleAdd = () => {
		list.value.push({
			label: props.template
				? props.template(list.value.length - props.noDelLen + 1)
				: `其他${list.value.length - props.noDelLen + 1}明细`,
			radio: "0",
			other_content: "",
			showOther: props.showOther,
			newAdd: true
		});
	};

	const handleDelete = (index) => {
		list.value.splice(index, 1);
	};
</script>

<style lang="scss" scoped>
	.form-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.ant-form-item {
			margin-bottom: 6px;
		}
	}
</style>
