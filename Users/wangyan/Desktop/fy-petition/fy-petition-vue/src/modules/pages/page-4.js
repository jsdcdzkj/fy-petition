import {
	labourSave,
	motorVehicleSave,
	salesSave,
	saveOrUpdate
} from "@/api/common";
import GeneratePleadingsDialog from "@/components/GeneratePleadingsDialog";
import { createDom } from "@/dialog";
import { h, toRaw } from "vue";
import {
	getModule1,
	getModule2,
	getModule3,
	getModule4,
	getModule5,
	getModule6,
	getModule7,
	getModule8,
	getModule9
} from "../config/module-config2";

export const getPageConfig = () => {
	return {
		struct: [
			{
				name: "当事人信息",
				href: "#module-1",
				items: [
					getModule1(1),
					getModule3(2),
					getModule4(3),
					getModule5(4),
					getModule6(5)
				]
			},
			// 二、诉讼请求和依据
			{
				name: "诉讼请求和依据",
				href: "#module-2",
				items: [
					{
						name: "1.是否主张工资支付",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张",
									prop: "wage_payment",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: []
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "wage_detail",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "2.是否主张未签订书面劳动合同双倍工资",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张",
									prop: "double_pay",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: []
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "double_detail",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "3.是否主张加班费",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张",
									prop: "overtime_pay",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: []
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "overtime_detail",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "4.是否主张未休年休假工资",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张",
									prop: "leave_pay",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: []
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "leave_detail",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "5.是否主张未依法缴纳社会保险费造成的经济损失",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张",
									prop: "economic_loss",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: []
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "economic_deatil",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "6.是否主张解除劳动合同经济补偿",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张",
									prop: "release_work",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: []
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "release_detail",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "7.是否主张违法解除劳动合同赔偿金",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张",
									prop: "break_law",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: []
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "break_detail",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "8.其他请求信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "other_requests",
									label: "其他请求",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "9.诉讼费用承担",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "cost_bearing",
									label: "金额及具体主张",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "10.申请财产保全措施信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否已经诉前保全",
									prop: "is_before_litigation",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: []
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "input",
									value: "",
									prop: "court_preservation",
									label: "保全法院",
									attrs: {
										placeholder: "请输入保全法院名称"
									}
								},
								{
									type: "input",
									value: "",
									prop: "instrument_preservation",
									label: "保全文书",
									attrs: {
										placeholder: "请输入保全文书名称"
									}
								}
							]
						}
					}
				]
			},
			// 三、事实和理由
			{
				name: "事实和理由",
				href: "#module-3",
				items: [
					{
						name: "1.劳动合同合同的签订情况（合同主体、签订时间、地点、合同名称等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "concludeAndSign",
									label: "内容",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "2.劳动合同合同的履行情况（入职时间、用人单位、工作岗位、工作地点、合同约定的每月工资数额及工资构成、办理社会保险的时间及险种、劳动者实际领取的每月工资数额及工资构成、加班工资计算基数及计算方法、原告加班时间及加班费、年休假等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "performance",
									label: "内容",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "3.解除或终止劳动关系情况（解除或终止劳动关系的原因、经济补偿/赔偿金数额等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "termination_employment",
									label: "内容",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "4.工伤情况（发生工伤时间、工伤认定情况、工伤伤残等级、工伤费用等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "occupational_injury",
									label: "内容",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "5.劳动仲裁相关情况（申请劳动仲裁时间、仲裁请求、仲裁文书、仲裁结果等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "labor_arbitration",
									label: "内容",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "6.其他相关情况（如是否农民工）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "other_relevant_info",
									label: "内容",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "7.诉请依据（法律及司法解释的规定，要写明具体条文）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "basis_of_claim",
									label: "内容",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "8.证据清单（可另附页）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "evidence_list",
									label: "内容",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					}
				]
			}
		],
		// 提交
		submit: ({ form, modules }) => {
			labourSave(form).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
