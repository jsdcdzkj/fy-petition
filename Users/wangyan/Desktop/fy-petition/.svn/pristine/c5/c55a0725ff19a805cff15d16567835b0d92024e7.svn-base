import { civilComplaintSaveOrUpdate, privateSave } from "@/api/common";
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
	getModule9,
	getModule10
} from "../config/module-config";

export const getPageConfig = () => {
	return {
		struct: [
			{
				name: "当事人信息",
				href: "#module-1",
				items: [
					getModule1(),
					getModule10(),
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
						name: "1.透支本金",
						temp: `截至$止，尚欠本金:$`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "opCurrency",
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
									prop: "opEndTime"
								},
								{
									type: "input",
									value: "",
									prop: "outPrincipal",
									label: "尚欠本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "2.利息、罚息、复利、滞纳金、违约金、手续费等",
						temp: `截至$止，欠利息、罚息、复利、滞纳金、违约金、手续费等共计$,自$之后的利息、罚息、复利、滞纳金、违约金以及手续费等各项费用按照信用卡领用协议计算至实际清偿之日止<br>明细：$`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "name",
									span: 16,
									label: "币种",
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "截止至",
									span: 10,
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "itEndTime"
								},
								{
									type: "input",
									value: "",
									span: 10,
									prop: "itAmount",
									label: "利息、罚息、复利、滞纳金、违约金、手续费等共",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "date-picker",
									value: null,
									span: 24,
									label: "自以下日期之后的利息、罚息、复利、滞纳金、违约金以及手续费等各项费用按照信用卡领用协议计算至实际清偿之日止",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "itAfterTime"
								},
								{
									type: "textarea",
									value: "",
									prop: "itDetails",
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
						name: "3.主张担保权利信息",
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
						name: "4.主张实现债权的费用信息",
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
						name: "5.其他请求信息",
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
						name: "6.标的总额",
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
						name: "7.请求依据信息",
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
						name: "1.信用卡办理情况（信用卡卡号、信用卡登记权利人、办卡时间、办卡行等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "creditCardDetails",
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
						name: "2.信用卡合约的主要约定",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "bcCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "overdraftAmount",
									label: "透支金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "bcStandard",
									span: 16,
									label: "利息、罚息、复利、滞纳金、违约金、手续费等的计算标准",
									attrs: {
										placeholder: "请输入标准"
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "breachTerms",
									label: "违约责任",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "terminationCond",
									label: "解除条件",
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
						name: "3.是否对被告就信用卡合约主要条款进行提示注意、说明",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有对被告就保证保险合同主要条款进行提示注意、说明",
									prop: "hasNotice",
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
									label: "提示时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "noticeDate"
								},
								{
									type: "input",
									value: "",
									prop: "noticeLocation",
									label: "提示地点",
									attrs: {
										placeholder: "请输入提示地点"
									}
								}
							]
						}
					},
					{
						name: "4.被告已还款金额",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "raCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "repaidAmt",
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
						name: "5.被告逾期未还款金额",
						temp: `逾期时间：截至$，被告欠付信用卡本金:$、利息:$、罚息:$、复利:$、滞纳金:$、违约金:$、手续费:$`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "ouCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
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
									prop: "overdueDate"
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
									prop: "ouEndDate"
								},
								{
									type: "input",
									value: "",
									prop: "ouPrincipal",
									label: "被告欠付信用卡本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "ouInterest",
									label: "利息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "ouDefaultInterest",
									label: "罚息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "ouCompoundInterest",
									label: "复利",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "ouLateFee",
									label: "滞纳金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "ouPenalty",
									label: "违约金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "ouCommission",
									label: "手续费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "6.是否向被告进行通知和催收",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
									prop: "hasNotification",
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
									prop: "notificationDetails",
									label: "具体情况",
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
						name: "7.是否签订物的担保（抵押、质押）合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
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
						name: "8.担保人、担保物",
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
						name: "9.是否最高额担保（抵押、质押）",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
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
									label: "签订时间",
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
										placeholder: "请输入担保额度"
									}
								}
							]
						}
					},
					{
						name: "10.是否办理抵押、质押登记",
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
						name: "11.是否签订保证合同",
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
						name: "12.保证方式信息",
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
						name: "13.其他担保方式",
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
									label: "签订时间",
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
						name: "14.其他需要说明的内容（可另附页）",
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
						name: "15.证据清单（可另附页）",
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
		// 提交
		submit: ({ form: originalForm, modules }) => {
			civilComplaintSaveOrUpdate(originalForm).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
