<template>
	<PageContainer show-footer :showTip="false">
		<div class="admin-manage">
			<Card title="诉状条件查询">
				<template #extra>
					<Button
						size="middle"
						@click="formConfig.onReset()"
						:icon="h(ReloadOutlined)"
						>重置</Button
					>
					<Button
						size="middle"
						type="primary"
						:icon="h(SearchOutlined)"
						style="margin-left: 10px"
						@click="formConfig.onSearch()"
						>搜索</Button
					>
				</template>
				<BaseFormInline
					v-bind="formConfig"
					v-model:form="formConfig.form"
					@instance="methods.onInstance"
				/>
			</Card>
			<Card title="诉状列表" :body-style="{ padding: 0 }">
				<Table v-bind="tableConfig">
					<template #bodyCell="{ column, text, record, index }">
						<template v-if="column.key == 'type'">
							{{ caseTypes[Number(text)].label }}
						</template>
						<template v-else-if="column.key == 'index'">
							{{
								index +
								1 +
								(tableConfig.pagination.current - 1) *
									tableConfig.pagination.pageSize
							}}
						</template>
						<template v-else-if="column.key == 'action'">
							<div style="display: flex; gap: 10px">
								<Button @click="() => handleShowDoc(record)"
									>详情</Button
								>
								<Button
									type="primary"
									@click="() => handleDetail(record)"
									>编辑</Button
								>
							</div>
						</template>
					</template>
				</Table>
			</Card>
		</div>
		<template #footer>
			<Button :icon="h(ArrowLeftOutlined)" class="back" @click="back"
				>返回登记首页</Button
			>
			<span class="copyright">技术支持：@鼎驰电子科技有限公司2025</span>

			<Button class="confirm" type="primary" @click="handleResetPwd"
				>修改管理密码</Button
			>
		</template>
	</PageContainer>
</template>

<script setup lang="jsx">
	import PageContainer from "@/layout/page-container.vue";
	import BaseFormInline from "@/modules/base-form/base-form-inline";
	import { useForm } from "@/modules/base-form/use-form";
	import { h, reactive } from "vue";
	import {
		ReloadOutlined,
		SearchOutlined,
		ArrowLeftOutlined
	} from "@ant-design/icons-vue";
	import { Card, Button, Table } from "ant-design-vue";
	import { useRouter } from "vue-router";
	import AdministratorResetPwd from "../dialog/AdministratorResetPwd.vue";
	import { createModelAsync } from "@/dialog";
	import { getPageList } from "@/api/common";
	import { caseTypes } from "../../modules/config/page-items";
	import { pageConfig } from "../../modules";
	import { usePageDoc } from "@/modules/base-form/use-page-doc";
	const { formConfig, methods } = useForm({ span: 6, labelCol: 24 });
	const router = useRouter();
	const back = () => {
		router.back(-1);
	};
	const handleDetail = (record) => {
		router.push({
			path: pageConfig[record.type].path,
			query: {
				lawsuit_id: record.lawsuit_id,
				type: record.type
			}
		});
	};
	const tableConfig = reactive({
		dataSource: [],
		columns: [
			{
				title: "序号",
				dataIndex: "index",
				key: "index",
				align: "center",
				width: "80px"
			},
			{
				title: "诉状类型",
				dataIndex: "type",
				key: "type",
				align: "center",
				width: "200px"
			},
			{
				title: "原告（法人、非法人组织）名称",
				dataIndex: "plaintiff_s_name",
				key: "plaintiff_s_name",
				align: "center",
				width: "250px"
			},
			{
				title: "原告（自然人）名称",
				dataIndex: "plaintiff_p_name",
				key: "address",
				align: "center",
				width: "200px"
			},
			{
				title: "被告（法人、非法人组织）名称",
				key: "defendant_c_name",
				dataIndex: "defendant_c_name",
				align: "center",
				width: "250px"
			},
			{
				title: "被告（自然人）名称",
				key: "defendant_p_name",
				dataIndex: "defendant_p_name",
				align: "center",
				width: "200px"
			},
			{
				title: "第三人（法人、非法人组织）名称",
				key: "third_c_name",
				dataIndex: "third_c_name",
				align: "center",
				width: "250px"
			},
			{
				title: "第三人（自然人）名称",
				key: "defendant_p_name",
				dataIndex: "defendant_p_name",
				align: "center",
				width: "200px"
			},
			{
				title: "提交时间",
				key: "create_time",
				dataIndex: "create_time",
				align: "center",
				width: "200px"
			},
			{
				title: "操作",
				key: "action",
				align: "center",
				fixed: "right",
				width: "200px"
			}
		],
		pagination: {
			onChange(current, pageSize) {
				this.current = current;
				this.pageSize = pageSize;
				formConfig.onSearch();
			},
			current: 1,
			pageSize: 10,
			showSizeChanger: true,
			total: 0
		},
		scroll: {
			x: "max-content"
		}
	});
	methods.setFormItems([
		{
			label: "原告（法人、非法人组织）名称",
			type: "input",
			value: "",
			attrs: {
				placeholder: "请输入名称",
				onPressEnter: () => {
					formConfig.onSearch();
				}
			},
			prop: "plaintiff_s_name"
		},
		{
			label: "被告（法人、非法人组织）名称",
			type: "input",
			value: "",
			attrs: {
				placeholder: "请输入名称",
				onPressEnter: () => {
					formConfig.onSearch();
				}
			},
			prop: "defendant_c_name"
		},
		{
			label: "第三人（法人、非法人组织）名称",
			type: "input",
			value: "",
			attrs: {
				placeholder: "请输入名称",
				onPressEnter: () => {
					formConfig.onSearch();
				}
			},
			prop: "third_c_name"
		},
		{
			label: "原告（自然人）名称",
			type: "input",
			value: "",
			attrs: {
				placeholder: "请输入名称",
				onPressEnter: () => {
					formConfig.onSearch();
				}
			},
			prop: "plaintiff_p_name"
		},
		{
			label: "被告（自然人）名称",
			type: "input",
			value: "",
			attrs: {
				placeholder: "请输入名称",
				onPressEnter: () => {
					formConfig.onSearch();
				}
			},
			prop: "defendant_p_name"
		},
		{
			label: "第三人（自然人）名称",
			type: "input",
			attrs: {
				placeholder: "请输入名称",
				onPressEnter: () => {
					formConfig.onSearch();
				}
			},
			value: "",
			prop: "third_p_name"
		},
		{
			label: "诉状类型",
			type: "select",
			value: null,
			prop: "type",
			attrs: {
				placeholder: "请选择类型",
				onPressEnter: () => {
					formConfig.onSearch();
				}
			},
			select: {
				label: "label",
				value: "value",
				options: caseTypes
			}
		},
		{
			type: "range-picker",
			value: [],
			label: "时间",
			attrs: {
				placeholder: ["请选择开始时间", "请选择结束时间"],
				format: "YYYY-MM-DD",
				valueFormat: "YYYY-MM-DD"
			},
			prop: "timeRange"
		}
	]);
	formConfig.onSearch = () => {
		const form = {
			...formConfig.form,
			start_time:
				formConfig.form.timeRange.length > 0
					? formConfig.form.timeRange[0]
					: "",
			end_time:
				formConfig.form.timeRange.length > 0
					? formConfig.form.timeRange[1]
					: ""
		};
		delete form.timeRange;
		getPageList({
			...form,
			pageNo: tableConfig.pagination.current,
			pageSize: tableConfig.pagination.pageSize
		}).then((res) => {
			tableConfig.dataSource = res.records;
			tableConfig.pagination.total = res.total;
		});
	};
	formConfig.onReset = () => {
		methods.resetFields();
		formConfig.onSearch();
	};
	// 搜索

	const handleResetPwd = () => {
		createModelAsync(
			{ width: "820px" },
			{},
			<AdministratorResetPwd />
		).then(() => {
			router.push("/admin-manage");
		});
	};

	const handleShowDoc = async (item) => {
		localStorage.setItem(
			"currentRouteName",
			pageConfig[Number(item.type)].title
		);
		usePageDoc({
			type: item.type,
			lawsuit_id: item.lawsuit_id
		})();
	};

	formConfig.onSearch();
</script>

<style lang="scss" scoped>
	.admin-manage {
		background: rgba(255, 255, 255, 0.51);
		border-radius: 16px 16px 16px 16px;
		border: 1px solid rgba(255, 255, 255, 0.51);
		padding: 32px;
		position: relative;
		margin: 32px;
		display: flex;
		flex-direction: column;
		gap: 24px;
		.ant-table-thead > th {
			white-space: nowrap;
		}
		.ant-table-pagination {
			margin-right: 20px;
		}
	}
</style>
