import { salesSave } from "@/api/common";
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
const totalAmount = (_, __, { form }) => {
	form.totalAmount =
		Number(form.interestAmount) +
		Number(form.damagesAmount) +
		Number(form.cnAmount);
};
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
						name: "1.给付价款（元）",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "",
									prop: "paymentCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "paymentAmount",
									label: "金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "2.迟延给付价款的利息（违约金）",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "",
									prop: "lpCurrencyType",
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
									prop: "lpDeadline"
								},
								{
									type: "input-number",
									value: "",
									prop: "lpInterest",
									label: "迟延给付价款的利息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "lpPenaltyAmount",
									label: "违约金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "自以下时间开始，之后的逾期利息、违约金",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "lpDate"
								},
								{
									type: "input-number",
									value: "",
									prop: "lpAmount",
									label: "以下列基数进行计算",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "lpStandard",
									label: "计算标准",
									attrs: {
										placeholder: "请输入计算标准"
									}
								},
								{
									type: "input",
									value: "",
									prop: "lpCalculationMethod",
									label: "计算方式",
									attrs: {
										placeholder: "请输入计算方式"
									}
								},
								{
									type: "radio",
									value: null,
									label: "是否请求支付至实际清偿之日止",
									prop: "lpIsPaymentEnd",
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
						temp: `截至$止,迟延给付款的利息$,违约金$，自$之后的逾期利息，违约金，以$为基数按照$标准计算；<br>计算方式:$,<br>是否请求支付至实际清偿之日止:$`
					},
					{
						name: "3.赔偿因卖方违约所受的损失",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "",
									prop: "currency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "compStandard",
									label: "支付赔偿金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "curreney",
									value: "",
									prop: "breachType",
									label: "违约类型",
									span: 16,
									attrs: {
										placeholder: "输入其它",
										currencyList: [
											"延迟履行",
											"不履行",
											"其他"
										]
									}
								},
								{
									type: "input",
									value: "",
									prop: "caseDetail",
									label: "具体情形",
									attrs: {
										placeholder: "请输入具体情形"
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "lossBasis",
									label: "损失计算依据",
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
						name: "4.是否对标的物的瑕疵承担责任",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否对标的物的瑕疵承担责任",
									prop: "isTakeResponsibility",
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
									type: "curreney",
									value: "修理",
									prop: "trDefaultType",
									span: 24,
									label: "违约类型",
									attrs: {
										placeholder: "输入其它",
										currencyList: [
											"修理",
											"重作",
											"更换",
											"退货",
											"减少价款或者报酬"
										]
									}
								}
							]
						}
					},
					{
						name: "5.要求继续履行或是解除合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "要求继续履行或是解除合同",
									prop: "isConOrTc",

									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "继续履行",
												value: "1",
												bindKeys: [
													"ctDays",
													"ctSupplyCommodity"
												]
											},
											{
												label: "判令解除合同",
												value: "2",
												bindKeys: [
													"ctIsConfirm",
													"ctLiftDate"
												]
											}
										]
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "ctDays",
									label: "要求以下天数内履行完毕",
									attrs: {
										placeholder: "请输入天数",
										suffix: "天"
									}
								},
								{
									type: "checkbox",
									value: [],
									label: " ",
									prop: "ctSupplyCommodity",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "供货", value: "1" },
											{ label: "义务", value: "2" }
										]
									}
								},
								{
									type: "checkbox",
									value: [],
									label: "确买卖合同",
									prop: "ctIsConfirm",
									select: {
										label: "label",
										value: "value",
										options: [{ label: "确定", value: "1" }]
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "解除合同日期",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "ctLiftDate"
								}
							]
						}
					},
					{
						name: "6.主张担保权利信息",
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
									span: 24,
									prop: "agrContent",
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
						name: "7.主张实现债权的费用信息",
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
									span: 24,
									label: "明细",
									attrs: {
										placeholder: "请输入明细",
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
									prop: "otherReqs",
									span: 24,
									label: "其他请求",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "9.标的总额",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "",
									prop: "subCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input-number",
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
						name: "10.请求依据信息",
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
									prop: "sellerName",
									label: "出卖人（卖方）",
									attrs: {
										placeholder: "请输入名称"
									}
								},
								{
									type: "input",
									value: "",
									prop: "buyerName",
									label: "买受人（买方）",
									attrs: {
										placeholder: "请输入名称"
									}
								}
							]
						}
					},
					{
						name: "3.买卖标的物情况（标的物名称、规格、质量、数量等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "sbContent",
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
						name: "4.合同约定的价格及支付方式",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "",
									prop: "csCurrency",
									label: "币种",
									span: 16,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "unitPrice",
									label: "单价",
									span: 8,
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "totalPrice",
									label: "总价",
									span: 8,
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "radio",
									value: null,
									label: "支付方式",
									span: 16,
									prop: "csPaymentChannels",

									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "现金", value: "1" },
											{ label: "转账", value: "2" },
											{ label: "票据", value: "3" },
											{
												label: "其他",
												value: "4",
												bindKeys: [
													"csBillType",
													"csChannelName"
												]
											}
										]
									}
								},
								{
									type: "input",
									value: "",
									prop: "csBillType",
									span: 8,
									label: "票据类型",
									attrs: {
										placeholder: "请输入票据类型"
									}
								},
								{
									type: "input",
									value: "",
									prop: "csChannelName",
									span: 8,
									label: "渠道名称",
									attrs: {
										placeholder: "请输入渠道名称"
									}
								},

								{
									type: "radio",
									value: null,
									label: "分期方式",
									prop: "csPaymentMethod",
									span: 8,

									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "一次性", value: "1" },
											{
												label: "分期",
												value: "2",
												bindKeys: [
													"csInstallmentMethod"
												]
											}
										]
									}
								},
								{
									type: "input",
									value: "",
									prop: "csInstallmentMethod",
									label: "分期方式",
									span: 8,
									attrs: {
										placeholder: "请输入分期方式"
									}
								}
							]
						}
					},
					{
						name: "5.合同约定的交货时间、地点、方式、风险承担、安装、调试、验收",
						form: {
							span: 8,

							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "csContent",
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
						name: "6.合同约定的质量标准及检验方式、质量异议期限",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "qsContent",
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
						name: "7.合同约定的违约金（定金）",
						form: {
							span: 24,
							formItem: [
								{
									type: "input-number",
									value: "",
									prop: "ctContractTerms",
									span: 24,
									label: "违约金合同条款：第",
									attrs: {
										placeholder: "请输入",
										suffix: "条"
									}
								},

								{
									type: "input-number",
									value: "",
									prop: "dtContractTerms",
									span: 24,
									label: "定金合同条款：第",
									attrs: {
										placeholder: "请输入",
										suffix: "条"
									}
								},

								{
									type: "input-number",
									value: "",
									prop: "pdPercentage",
									span: 12,
									label: "延迟履行违约金合同条款：第",
									attrs: {
										placeholder: "请输入",
										suffix: "条"
									}
								},

								{
									type: "input-number",
									value: "",
									prop: "pdContractTerms",
									span: 5,
									label: "规定应支付",
									attrs: {
										placeholder: "请输入百分比",
										suffix: "%/日"
									}
								}
							]
						}
					},
					{
						name: "8.价款支付及标的物交付情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "",
									prop: "ppCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},

								{
									type: "input-number",
									value: "",
									prop: "payPrice",
									label: "按期支付价款",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "overduePayAmount",
									label: "逾期付款",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "overdueNotPayAmount",
									label: "逾期未付款",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "objectsNumber",
									label: "按期交付标的物",
									attrs: {
										placeholder: "请输入数量",
										suffix: "件"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "opObjectsNumber",
									label: "逾期交付标的物",
									attrs: {
										placeholder: "请输入数量",
										suffix: "件"
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "opNotObjectsNumber",
									label: "逾期未交付标的物",
									attrs: {
										placeholder: "请输入数量",
										suffix: "件"
									}
								}
							]
						}
					},
					{
						name: "9.是否存在延迟履行",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否延迟",
									prop: "isDelay",

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
									label: "延迟性质",
									prop: "delayNature",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "逾期付款", value: "1" },
											{ label: "预期交货", value: "2" }
										]
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "delayTime",
									label: "延迟时间",
									attrs: {
										placeholder: "请输入天数",
										suffix: "天"
									}
								}
							]
						}
					},
					{
						name: "10.是否催促过履行",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否催促过履行",
									prop: "isThereOne",

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
									label: "催促日期",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "urgeTime"
								},
								{
									type: "input",
									value: "",
									prop: "urgeMethod",
									label: "催促方式",
									attrs: {
										placeholder: "请输入内容"
									}
								}
							]
						}
					},
					{
						name: "11.买卖合同标的物有无质量争议",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",

									prop: "isCyThereOne",
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
									prop: "cyContent",
									span: 24,
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
						name: "12.标的物质量规格或履行方式是否存在不符合约定的情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
									prop: "aeCyThereOne",

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
									prop: "aeContent",
									span: 24,
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
						name: "13.是否曾就标的物质量问题进行协商",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
									prop: "neCyThereOne",

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
									prop: "neContent",
									span: 24,
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
						name: "14.被告应当支付的利息、违约金、赔偿金",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "",
									prop: "cnCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "checkbox",
									value: [],
									label: "被告应当支付",
									prop: "isInterest",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "利息", value: "1" },
											{ label: "违约金", value: "2" },
											{ label: "赔偿金", value: "3" }
										]
									},
									attrs: {
										onChange: (item, e, props) => {
											const { formItem, form } = props;
											if (e.includes("1")) {
												formItem[2].attrs.disabled = false;
											} else {
												formItem[2].attrs.disabled = true;
												form[formItem[2].prop] = "";
											}

											if (e.includes("2")) {
												formItem[3].attrs.disabled = false;
											} else {
												formItem[3].attrs.disabled = true;
												form[formItem[3].prop] = "";
											}

											if (e.includes("3")) {
												formItem[4].attrs.disabled = false;
											} else {
												formItem[4].attrs.disabled = true;
												form[formItem[4].prop] = "";
											}
											totalAmount(item, e, props);
										}
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "interestAmount",
									label: "利息金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元",
										disabled: true,
										onBlur: totalAmount
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "damagesAmount",
									label: "违约金金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元",
										disabled: true,
										onBlur: totalAmount
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "cnAmount",
									label: "赔偿金金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元",
										disabled: true,
										onBlur: totalAmount
									}
								},
								{
									type: "input-number",
									value: "",
									prop: "totalAmount",
									label: "合计",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元",
										disabled: true
									}
								},
								{
									type: "input",
									value: "",
									prop: "cnCalMethod",
									label: "计算方式",
									attrs: {
										placeholder: "请输入计算方式"
									}
								}
							]
						}
					},
					{
						name: "15.是否签订物的担保（抵押、质押）合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否是",
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
						name: "16.担保人、担保物",
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
						name: "17.是否最高额担保（抵押、质押）",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否是",
									prop: "isGuarantee",
									span: 24,
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
									type: "curreney",
									value: "",
									prop: "name",
									span: 24,
									label: "担保币种",
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input-number",
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
						name: "18.是否办理抵押、质押登记",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否是",
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
						name: "19.是否签订保证合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
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
									value: "",
									prop: "snMainContent",
									label: "主要内容",
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
						name: "20.保证方式信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "保证方式",
									prop: "guaranteeMethod",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "一般保证是", value: "1" },
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
						name: "21.其他担保方式",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
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
									type: "input",
									value: "",
									prop: "ogForm",
									label: "形式",
									attrs: {
										placeholder: "请输入担保形式"
									}
								}
							]
						}
					},
					{
						name: "22.其他需要说明的内容（可另附页）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "otherContent",
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
						name: "23.证据清单（可另附页）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "evidenceListContent",
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
		submit: ({ form: originalForm, modules }) => {
			salesSave(originalForm).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
