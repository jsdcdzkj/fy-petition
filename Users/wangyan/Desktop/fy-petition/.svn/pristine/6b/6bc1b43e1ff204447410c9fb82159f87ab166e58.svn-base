import { privateSave, propertyComplaintSaveOrUpdate } from "@/api/common";
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
} from "../config/module-config";

export const getPageConfig = () => {
	return {
		struct: [
			{
				name: "当事人信息",
				href: "#module-1",
				items: [
					getModule2(1),
					getModule3(2),
					getModule4(3),
					getModule5(4),
					getModule6(5),
					getModule7(6),
					getModule8(7),
					getModule9(8)
				]
			},
			// 二、诉讼请求和依据
			{
				name: "诉讼请求和依据",
				href: "#module-2",
				items: [
					{
						name: "1.物业费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "feeCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "截止至",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "feeEndTime"
								},
								{
									type: "input",
									value: "",
									prop: "feeAmount",
									label: "尚欠物业费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "2.违约金",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "pyCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "截止至",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "pyEndTime"
								},
								{
									type: "input",
									value: "",
									prop: "penaltyAmount",
									label: "尚欠物业费违约金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},

								{
									type: "radio",
									value: null,
									label: "是否请求支付至实际清偿之日止",
									prop: "isReqPayDay",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "是", value: "1" },
											{ label: "否", value: "2" }
										]
									}
								}
							]
						}
					},
					{
						name: "3.其他请求信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "otherReqs",
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
						name: "4.标的总额",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "subCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "subTotalAmount",
									label: "标的总额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "5.请求依据信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "contractBasis",
									span: 24,
									label: "合同约定",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								},
								{
									type: "textarea",
									value: "",
									span: 24,
									prop: "legalBasis",
									label: "法律规定",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					}
				]
			},
			// 三、约定管辖和诉讼保全
			{
				name: "约定管辖和诉讼保全",
				href: "#module-3",
				items: [
					{
						name: "1.仲裁、法院管辖约定信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
									prop: "hasArbitration",
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
									prop: "arbitrationContent",
									label: "合同条款及内容",
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
						name: "2.申请财产保全措施信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否已经诉前保全",
									prop: "hasPrePreserve",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: [
													"preserveCourt",
													"preserveString"
												]
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "input",
									value: "",
									prop: "preserveCourt",
									label: "保全法院",
									attrs: {
										placeholder: "请输入保全法院名称"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "保全时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "preserveString"
								},
								{
									type: "radio",
									value: null,
									label: "是否申请诉讼保全",
									prop: "hasLitigationPreserve",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "是", value: "1" },
											{ label: "否", value: "2" }
										]
									}
								}
							]
						}
					}
				]
			},
			// 四、事实和理由
			{
				name: "事实和理由",
				href: "#module-4",
				items: [
					{
						name: "1.物业服务合同或前期物业服务合同签订情况（名称、编号、签订时间、地点等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "contractDetails",
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
						name: "2.签订主体",
						form: {
							span: 8,
							formItem: [
								{
									type: "input",
									value: "",
									prop: "owner",
									label: "业主/建设单位",
									attrs: {
										placeholder: "请输入名称"
									}
								},
								{
									type: "input",
									value: "",
									prop: "proSerPersonnel",
									label: "物业服务人",
									attrs: {
										placeholder: "请输入名称"
									}
								}
							]
						}
					},
					{
						name: "3.物业项目情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "input",
									value: "",
									prop: "propertyLoc",
									label: "坐落位置",
									attrs: {
										placeholder: "请输入位置"
									}
								},
								{
									type: "input",
									value: "",
									prop: "propertyArea",
									label: "面积",
									attrs: {
										placeholder: "请输入面积"
									}
								},
								{
									type: "input",
									value: "",
									prop: "propertyOwner",
									label: "所有权人",
									attrs: {
										placeholder: "请输入名称"
									}
								}
							]
						}
					},
					{
						name: "4.约定的物业费标准",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "pyContent",
									span: 24,
									label: "内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "5.约定的物业服务期限",
						form: {
							span: 8,
							formItem: [
								{
									type: "range-picker",
									value: [],
									label: "起止时间",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "psp"
								}
							]
						}
					},
					{
						name: "6.约定的物业费支付方式",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "pmContent",
									span: 24,
									label: "内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "7.约定的逾期支付物业费违约金标准",
						form: {
							span: 24,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "peContent",
									span: 24,
									label: "内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "8.被告欠付物业费数额及计算方式",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "clCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "owingProFees",
									label: "欠付物业费数额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "calMethod",
									label: "具体计算方式",
									attrs: {
										placeholder: "请输入具体计算方式"
									}
								}
							]
						}
					},
					{
						name: "9.被告应付违约金数额及计算方式",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "lqCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "liqDamPayAmount",
									label: "应付违约金数额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "lqCalMethod",
									label: "具体计算方式",
									attrs: {
										placeholder: "请输入具体计算方式"
									}
								}
							]
						}
					},
					{
						name: "10.催缴情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "colContent",
									span: 24,
									label: "内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "11.其他需要说明的内容（可另附页）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "otherContent",
									span: 24,
									label: "内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "12、证据清单（可另附页）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "evidenceListContent",
									span: 24,
									label: "内容",
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

		resetForm: (key, model) => {
			if (key === "psp") {
				return [model["pspStartTime"], model["pspEndTime"]];
			}
			return model[key];
		},
		// 提交
		submit: ({ form: originalForm, modules }) => {
			const [pspStartTime, pspEndTime = ""] = originalForm.psp.split(",");

			const form = {
				...originalForm,
				pspEndTime,
				pspStartTime
			};
			delete form.psp;

			propertyComplaintSaveOrUpdate(form).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
