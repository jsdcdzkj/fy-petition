import {
	financialLoanSave,
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
									prop: "principal_currency",
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
									prop: "start_time"
								},
								{
									type: "input",
									value: "",
									prop: "principal",
									label: "尚欠本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						},
						template: (form) => {
							const getValue = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value === null ||
									value === undefined ||
									value === ""
									? "___"
									: value;
							};
							return `
							截至${getValue(1)}止，尚欠本金${getValue(2)}元（${getValue(0)}）
							`;
						}
					},
					{
						name: "2.利息",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "interest_currency",
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
									prop: "interest_start"
								},
								{
									type: "input",
									value: "",
									prop: "interest_fee",
									label: "欠利息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "compound_interest",
									label: "复利",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "liquidated_damages",
									label: "罚息(违约金)",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "calculation_mode",
									label: "计算方式",
									attrs: {
										placeholder: "请输入计算方式",
										suffix: "元"
									}
								},
								{
									type: "radio",
									value: null,
									label: "是否请求支付至实际清偿之日止",
									prop: "is_pay",
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
						template: (form) => {
							const getValue = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value === null ||
									value === undefined ||
									value === ""
									? "___"
									: value;
							};
							const isPay = getValue(6);
							return `截至${getValue(1)}止，欠利息${getValue(2)}元（${getValue(0)}），
							复利${getValue(3)}元，罚息(违约金)${getValue(4)}元，
							计算方式${getValue(5)}元，<br>
							是否请求支付至实际清偿之日止：${isPay === 1 ? "是" : "否"}`;
						}
					},
					{
						name: "3.是否要求提前还款或解除合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									// label: "是否要求提前还款或解除合同",
									label: "是否要求",
									prop: "prepayment",
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
									label: "类型",
									prop: "prepay_type",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "提前还款(加速到期)",
												value: "0"
											},
											{ label: "解除合同", value: "1" }
										]
									}
								}
							]
						}
					},
					{
						name: "4.主张担保权利信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									// label: "是否主张担保权利",
									label: "是否主张",
									prop: "is_guarantee",
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
									prop: "guarantee_content",
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
									// label: "是否主张实现债权的费用",
									label: "是否主张",
									prop: "is_creditor_money",
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
									prop: "creditor_detail",
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
						name: "7.标的总额",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "subject_currency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "gross_subject_matter",
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
									prop: "contract_agreement",
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
									prop: "legal_provisions",
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
									prop: "is_convention_info",
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
									prop: "terms_contract",
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
									prop: "is_before_litigation",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: [
													"court_preservation",
													"security_time"
												]
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
									type: "date-picker",
									value: null,
									label: "保全时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "security_time"
								},
								{
									type: "radio",
									value: null,
									label: "是否申请诉讼保全",
									prop: "is_in_litigation",
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
									prop: "signing_condition",
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
									prop: "lender",
									label: "贷款人",
									attrs: {
										placeholder: "请输入贷款人"
									}
								},
								{
									type: "input",
									value: "",
									prop: "borrower",
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
									type: "input",
									value: "",
									prop: "appoint_fee",
									label: "约定",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "actual_fee",
									label: "实际发放",
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
									type: "range-picker",
									value: [],
									label: "约定期限",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "appointTime"
								},
								{
									type: "radio",
									value: "1",
									label: "是否到期",
									prop: "is_expire",
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
						},
						template: (form) => {
							const getValue = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								// 处理空值情况
								if (!value && value !== 0) {
									return "___";
								}
								// 处理数组情况
								return Array.isArray(value)
									? value.length > 0
										? value.join("至")
										: "___"
									: value;
							};
							const isType = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value == 1 ? "是" : "否";
							};

							return (
								`约定期限：${getValue(0)}` +
								`<br>是否到期：${isType(1)}`
							);
						}
					},
					{
						name: "5.借款利率",
						form: {
							span: 8,

							formItem: [
								{
									type: "input",
									value: "",
									prop: "interest_rate",
									span: 5,
									label: "利率",
									attrs: {
										placeholder: "请输入利率",
										suffix: "%"
									}
								},
								{
									type: "radio",
									value: null,
									label: " ",
									prop: "rate_type",
									span: 7,
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
									type: "plain-text",
									label: " ",
									text: "合同条款：第",
									span: 4
								},
								{
									type: "input",
									value: "",
									prop: "rate_count",
									span: 5,
									label: " ",
									attrs: {
										placeholder: "请输入",
										suffix: "条"
									}
								},
								{
									type: "",
									label: " ",
									span: 2
								},
								// {
								// 	type: "plain-text",
								// 	text: "逾期上浮",
								// 	span: 3
								// },
								{
									type: "input",
									value: "",
									prop: "overdue_ascent",
									span: 5,
									label: "逾期上浮",
									attrs: {
										placeholder: "请输入利率",
										suffix: "%"
									}
								},
								{
									type: "radio",
									value: null,
									label: " ",
									span: 7,
									prop: "overdue_type",
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
									type: "plain-text",
									text: "合同条款：第",
									label: " ",
									span: 4
								},
								{
									type: "input",
									value: "",
									prop: "overdue_count",
									span: 5,
									label: " ",
									attrs: {
										placeholder: "请输入",
										suffix: "条"
									}
								},
								{
									type: "",
									label: " ",
									span: 2
								},
								// {
								// 	type: "plain-text",
								// 	text: "复利",
								// 	span: 3
								// },
								{
									type: "input",
									value: "",
									prop: "money_compound",
									span: 5,
									label: "复利",
									attrs: {
										placeholder: "请输入利率",
										suffix: "%"
									}
								},
								{
									type: "",
									label: "",
									span: 7
								},
								{
									type: "plain-text",
									text: "合同条款：第",
									label: " ",
									span: 4
								},
								{
									type: "input",
									value: "",
									prop: "money_count",
									span: 5,
									label: " ",
									attrs: {
										placeholder: "请输入",
										suffix: "条"
									}
								},
								{
									type: "",
									label: " ",
									span: 2
								},
								// {
								// 	type: "plain-text",
								// 	text: "罚息",
								// 	span: 3
								// },
								{
									type: "input",
									value: "",
									prop: "interest_penalty",
									span: 5,
									label: "罚息(违约金)",
									attrs: {
										placeholder: "请输入利率",
										suffix: "%"
									}
								},
								{
									type: "plain-text-left",
									label: " ",
									text: "/每年",
									span: 7
								},
								{
									type: "plain-text",
									text: "合同条款：第",
									label: " ",
									span: 4
								},
								{
									type: "input",
									value: "",
									prop: "interest_count",
									span: 5,
									label: " ",
									attrs: {
										placeholder: "请输入",
										suffix: "条"
									}
								}
							]
						},
						template: (form) => {
							const getValue = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value === null ||
									value === undefined ||
									value === ""
									? "___"
									: value;
							};

							const isType = getValue(1);
							const isTypeName =
								isType === 1
									? "月"
									: isType === 2
										? "季"
										: "年";
							const isType2 = getValue(6);
							const isType2Name =
								isType2 === 1
									? "月"
									: isType2 === 2
										? "季"
										: "年";
							return `
							利率：${getValue(0)}%/${isTypeName}（合同条款：第${getValue(3)}条）
							<br>逾期上浮：${getValue(5)}%/${isType2Name}（合同条款：第${getValue(8)}条）
							<br>复利：${getValue(10)}%（合同条款：第${getValue(13)}条）
							<br>罚息(违约金)：${getValue(15)}%/每年（合同条款：第${getValue(18)}条）
							`;
						}
					},
					{
						name: "6.借款发放时间",
						form: {
							span: 8,
							formItem: [
								{
									type: "date-picker",
									value: null,
									label: "发放时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "release_time"
								},
								{
									type: "input",
									value: "",
									prop: "disbursement_amount",
									label: "发放金额",
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
									prop: "repayment_method",
									label: "还款方式",
									span: 24,
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
						form: {
							span: 8,
							formItem: [
								{
									type: "input",
									value: "",
									prop: "repaid_principal",
									label: "已还本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "interest_paid",
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
									prop: "repay_interest_time"
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
									// label: "是否存在逾期还款",
									label: "是否存在",
									prop: "is_overdue_payment",
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
									prop: "overdue_time"
								},
								{
									type: "input",
									value: "",
									prop: "days_overdue",
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
									// label: "是否签订物的担保（抵押、质押）合同",
									label: "是否签订",
									prop: "guarantee_contract",
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
									prop: "guarantee_time"
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
									prop: "thing_surety",
									label: "担保人",
									attrs: {
										placeholder: "请输入担保人"
									}
								},
								{
									type: "input",
									value: "",
									prop: "thing_pledged",
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
									prop: "maximum_guarantee",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "是", value: "1" },
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
									prop: "secured_claim"
								},
								{
									type: "input",
									value: "",
									prop: "line_of_guarantee",
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
									// label: "是否办理抵押、质押登记",
									label: "是否办理",
									prop: "is_pledge",
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
									prop: "registration_type",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "正式登记", value: "0" },
											{ label: "预告登记", value: "1" }
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
									// label: "是否签订保证合同",
									label: "是否签订",
									prop: "guaranty_contract",
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
									prop: "time_of_signing"
								},
								{
									type: "input",
									value: "",
									prop: "surety",
									label: "保证人",
									attrs: {
										placeholder: "请输入保证人"
									}
								},
								{
									type: "textarea",
									span: 24,
									value: "",
									prop: "surety_content",
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
									prop: "guarantee_mode",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "一般保证", value: "0" },
											{
												label: "连带责任保证",
												value: "1"
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
									prop: "other_guarantees",
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
									prop: "time_signing"
								},
								{
									type: "input",
									value: "",
									prop: "form",
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
									prop: "other_content",
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
									prop: "evidence_list",
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
			if (key === "appointTime") {
				return [model["appoint_start"], model["appoint_end"]];
			}
			return model[key];
		},
		// 提交
		submit: ({ form: originalForm, modules }) => {
			const [appoint_start, appoint_end = ""] = (
				originalForm.appointTime || ""
			).split(",");
			const form = {
				...originalForm,
				appoint_end,
				appoint_start
			};
			delete form.appointTime;

			financialLoanSave(form).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
