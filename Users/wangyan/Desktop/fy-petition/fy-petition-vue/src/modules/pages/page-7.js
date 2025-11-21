import { privateSave } from "@/api/common";
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
					getModule1(),
					getModule2(),
					getModule3(),
					getModule4(),
					getModule5(),
					getModule6(),
					getModule7(),
					getModule8(),
					getModule9()
				]
			},
			// 二、诉讼请求和依据
			{
				name: "诉讼请求和依据",
				href: "#module-2",
				items: [
					{
						name: "1.本金",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "currency",
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
									prop: "plDeadline"
								},
								{
									type: "input",
									value: "",
									prop: "principalAmount",
									label: "尚欠本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						},
						temp: `截至$止，尚欠本金$`
					},
					{
						name: "2.利息",
						form: {
							span: 8,
							formItem: [
								// {
								// 	type: "curreney",
								// 	value: "",
								// 	prop: "name",
								// 	label: "币种",
								// 	attrs: {
								// 		placeholder: "输入其它"
								// 	}
								// },
								{
									type: "date-picker",
									value: null,
									label: "截止至",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "itDeadline"
								},
								{
									type: "input-number",
									value: "",
									prop: "interestAmount",
									label: "欠利息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "compoundInterest",
									label: "复利",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "penaltyInterest",
									label: "罚息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "itCalMethod",
									label: "计算方式",
									attrs: {
										placeholder: "请输入计算方式"
									}
								},
								{
									type: "radio",
									value: null,
									label: "是否请求支付至实际清偿之日止",
									prop: "itIsReqEnd",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "是", value: "1" },
											{ label: "否", value: "0" }
										]
									}
								}
							]
						},
						temp: `截至$止，欠利息:$,复利:$,罚息:$,计算方式：$ <br> 是否请求支付至实际清偿之日止：$`
					},
					{
						name: "3.是否要求提前还款或解除合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否要求提前还款或解除合同",
									prop: "IsEarlyRepay",
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
									type: "radio",
									value: null,
									label: "方式",
									prop: "reWay",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "提前还款(加速到期)",
												value: "1"
											},
											{ label: "解除合同", value: "2" }
										]
									}
								}
							]
						}
					},
					{
						name: "4.是否主张担保权利",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张担保权利",
									prop: "isAdvGuaRights",
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
									prop: "agrContent",
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
						name: "5.主张实现债权的费用信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否主张实现债权的费用",
									prop: "isAdvCostDebt",
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
									prop: "acdDetails",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入明细",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "6.其他请求信息",
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
						name: "7.标的总额",
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
						name: "8.请求依据信息",
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
											{ label: "否", value: "0" }
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
						name: "1.合同的签订情况（名称、编号、签订时间、地点等）",
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
									prop: "lenderName",
									label: "贷款人",
									attrs: {
										placeholder: "请输入贷款人"
									}
								},
								{
									type: "input",
									value: "",
									prop: "borrowerName",
									label: "借款人",
									attrs: {
										placeholder: "请输入借款人"
									}
								}
							]
						}
					},
					{
						name: "3.借款金额",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "loanCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "loanAmountAgreed",
									label: "约定",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "loanAmountActual",
									label: "实际提供",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "4.借款期限",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否到期",
									prop: "loanIsDue",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: ["loan"]
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "range-picker",
									value: [],
									label: "约定期限",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "loan"
								}
							]
						},
						temp: `是否到期：$ <br> 约定期限：$ 止`
					},
					{
						name: "5.借款利率",
						form: {
							span: 8,

							formItem: [
								// {
								// 	type: "checkbox",
								// 	value: [],
								// 	label: "",
								// 	span: 3,
								// 	prop: "isInterestRate",
								// 	select: {
								// 		label: "label",
								// 		value: "value",
								// 		options: [{ label: "利率", value: "1" }]
								// 	}
								// },
								{
									type: "input",
									value: "",
									prop: "isInterestRate",
									span: 5,
									label: "利率",
									attrs: {
										placeholder: "请输入利率",
										suffix: "%"
									}
								},
								{
									type: "radio",
									value: "1",
									label: "周期",
									prop: "irTimeType",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "每月", value: "1" },
											{ label: "每季", value: "2" },
											{ label: "每年", value: "3" }
										]
									}
								},

								{
									type: "input",
									value: "",
									prop: "irContractTerms",

									label: "合同条款：第",
									attrs: {
										placeholder: "请输入",
										suffix: "条"
									}
								}
							]
						}
					},
					{
						name: "6.借款提供时间",
						temp: `$,$`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "lpCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "提供时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "loanProvideString"
								},
								{
									type: "input",
									value: "",
									prop: "loanProvideAmount",
									label: "提供金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "7.还款方式",
						form: {
							span: 24,
							formItem: [
								// {
								// 	type: "input",
								// 	value: "",
								// 	prop: "name",
								// 	label: "还款方式",
								// 	attrs: {
								// 		placeholder: "请输入还款方式"
								// 	}
								// }
								{
									type: "curreney",
									value: "等额本息",
									prop: "repayMethod",
									label: "还款方式",
									attrs: {
										placeholder: "输入其它",
										currencyList: [
											"等额本息",
											"等额本金",
											"到期一次性还本付息",
											"按月计息，到期一次还本",
											"按季计息，到期一次还本",
											"按年计息，到期一次还本"
										]
									}
								}
							]
						}
					},
					{
						name: "8.还款情况",
						temp: `已还本金：$<br>已还利息：$，还息至$`,
						form: {
							span: 8,
							formItem: [
								// {
								// 	type: "curreney",
								// 	value: "",
								// 	prop: "name",
								// 	label: "币种",
								// 	attrs: {
								// 		placeholder: "输入其它"
								// 	}
								// },
								{
									type: "input",
									value: "",
									prop: "repPrincipal",
									label: "已还本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "repInterest",
									label: "已还利息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "还息至",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "repDeadline"
								}
							]
						}
					},
					{
						name: "9.是否存在逾期还款",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否存在逾期还款",
									prop: "isOverdue",
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
									type: "date-picker",
									value: null,
									label: "逾期时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "overdueTime"
								},
								{
									type: "input",
									value: "",
									prop: "overdueDays",
									label: "至今已逾期天数",
									attrs: {
										placeholder: "请输入天数",
										suffix: "天"
									}
								}
							]
						}
					},
					{
						name: "10.是否签订物的担保（抵押、质押）合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否签订物的担保（抵押、质押）合同",
									prop: "isSignGuaCon",
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
									type: "date-picker",
									value: null,
									label: "签订时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "gcSigningTime"
								}
							]
						}
					},
					{
						name: "11.担保人、担保物",
						form: {
							span: 8,
							formItem: [
								{
									type: "input",
									value: "",
									prop: "guarantee",
									label: "担保人",
									attrs: {
										placeholder: "请输入担保人"
									}
								},
								{
									type: "input",
									value: "",
									prop: "collateral",
									label: "担保物",
									attrs: {
										placeholder: "请输入担保物"
									}
								}
							]
						}
					},
					{
						name: "12.是否最高额担保（抵押、质押）",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否最高额担保（抵押、质押）",
									prop: "isGuarantee",
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
									type: "date-picker",
									value: null,
									label: "担保债权的确定时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "geSureTime"
								},
								{
									type: "input",
									value: "",
									prop: "geLimit",
									label: "担保额度",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "13.是否办理抵押、质押登记",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否办理抵押、质押登记",
									prop: "isMorReg",
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
									type: "radio",
									value: null,
									label: "登记类型",
									prop: "regType",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "正式登记", value: "1" },
											{ label: "预告登记", value: "2" }
										]
									}
								}
							]
						}
					},
					{
						name: "14.是否签订保证合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否签订保证合同",
									prop: "isSignCon",
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
									type: "date-picker",
									value: null,
									label: "签订时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "signingTime"
								},
								{
									type: "input",
									value: "",
									prop: "guarantor",
									label: "保证人",
									attrs: {
										placeholder: "请输入保证人"
									}
								},
								{
									type: "textarea",
									span: 24,
									value: "",
									prop: "snMainContent",
									label: "主要内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "15.保证方式信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "保证方式信息",
									prop: "guaranteeMethod",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "一般保证", value: "1" },
											{
												label: "连带责任保证",
												value: "2"
											}
										]
									}
								}
							]
						}
					},
					{
						name: "16.其他担保方式",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有其他担保方式",
									prop: "isOtherGuaMethods",
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
									type: "date-picker",
									value: null,
									label: "签订日期",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "otherSigningTime"
								},
								{
									type: "input",
									value: "",
									prop: "ogForm",
									label: "担保形式",
									attrs: {
										placeholder: "请输入担保形式"
									}
								}
							]
						}
					},
					{
						name: "17.其他需要说明的内容（可另附页）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									span: 24,
									value: "",
									prop: "otherContent",
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
						name: "18.证据清单（可另附页）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									span: 24,
									value: "",
									prop: "evidenceListContent",
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
			if (key === "loan") {
				return [model["loanEndString"], model["loanStartString"]];
			}
			return model[key];
		},
		// 提交
		submit: ({ form: originalForm, modules }) => {
			const [loanStartString, loanEndString = ""] = (
				originalForm.loan || ""
			).split(",");

			const form = {
				...originalForm,
				loanEndString,
				loanStartString
			};
			delete form.loan;
			privateSave(form).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
