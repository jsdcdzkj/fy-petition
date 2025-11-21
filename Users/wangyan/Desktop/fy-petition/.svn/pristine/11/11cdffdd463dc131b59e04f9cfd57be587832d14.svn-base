import {
	financialLeaseComplaintSave,
	financialLoanSave,
	propertyComplaintSaveOrUpdate,
	salesContractComplaintSave
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
						name: "1.支付全部未付租金",

						temp: `到期未付租金:$、未到期租金:$、留购价款:$`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "rentCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "dueUnpaidAmount",
									label: "到期未付租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "unfiredRent",
									label: "未到期租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "retPurPrice",
									label: "留购价款",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "2.违约金、滞纳金、损害赔偿金",
						temp: `截至$，违约金:$，滞纳金:$，损害赔偿金:$；自$之后的违约金、滞纳金、损害赔偿金，以$为基数按照$至全部款项实际付清之日,<br>明细：$`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "defCurrency",
									span: 24,
									label: "币种",
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
									prop: "defEndTime"
								},
								{
									type: "input",
									value: "",
									prop: "penaltyAmount",
									label: "违约金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "lateFeeAmount",
									label: "滞纳金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "damagesAmount",
									label: "损害赔偿金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "自以下时间开始，之后的逾期利息、违约金",
									span: 16,
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "defAfterTime"
								},
								{
									type: "input",
									value: "",
									prop: "defAfterAmount",
									label: "以下列基数进行计算",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									span: 16,
									prop: "defStandard",
									label: "按照以下标准计算至全部款项实际付清之日",
									attrs: {
										placeholder: "请输入计算标准"
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "defDetails",
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
						name: "3.是否确认租赁物归原告所有",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否确认",
									prop: "isSure",
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
					},
					{
						name: "4.请求解除合同",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否解除",
									prop: "isLiftCon",
									span: 16,
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "判令解除融资租赁合同",
												value: "1"
											},
											{ label: "已解除", value: "0" }
										]
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "解除日期",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "liftTime"
								}
							]
						}
					},
					{
						name: "5.返还租赁物，并赔偿因解除合同而受到的损失",
						temp: `支付全部未付租金:$，到期未付租金:$、未到期租金:$、留购价款$（如约定）<br> 截至$止，违约金:$，滞纳金:$，损害赔偿金:$<br>自$之后的违约金、滞纳金、损害赔偿金，以$为基数按照$至全部款项实际付清之日<br>明细：$`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "rlpCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rlpUnpaidRent",
									label: "支付全部未付租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rlpDueUnpaidAmount",
									label: "到期未付租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rlpUnfiredRent",
									label: "未到期租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rlpRetPurPrice",
									label: "留购价款(如约定)",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},

								{
									type: "date-picker",
									value: null,
									label: "截止",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "rlpEndTime"
								},
								{
									type: "input",
									value: "",
									prop: "rlpLiqDamages",
									label: "违约金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rlpLateFee",
									label: "滞纳金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rlpDamages",
									label: "损害赔偿金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},

								{
									type: "date-picker",
									value: null,
									span: 16,
									label: "自以下日期之后的违约金、滞纳金、损害赔偿金",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "rlpAfterTime"
								},
								{
									type: "input",
									value: "",
									prop: "rlpAfterAmount",
									label: "按照下列计算基数",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rlpStandard",
									label: "和标准计算至全部款项实际付清之日",
									attrs: {
										placeholder: "请输入计算标准"
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "rlpDetails",
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
						name: "6.要求继续履行或是解除合同",
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
									type: "input",
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
									label: "",
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
						name: "7.主张担保权利信息",
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
						name: "8.主张实现债权的费用信息",
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
						name: "9.其他请求信息",
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
						name: "10.标的总额",
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
						name: "11.请求依据信息",
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
									label: "出租人（卖方）",
									attrs: {
										placeholder: "请输入名称"
									}
								},
								{
									type: "input",
									value: "",
									prop: "buyerName",
									label: "承租人（买方）",
									attrs: {
										placeholder: "请输入名称"
									}
								}
							]
						}
					},
					{
						name: "3.租赁物情况（租赁物的选择、名称、规格、质量、数量等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "lsContent",
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
						name: "4.合同约定的租金及支付方式",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "rtCurrency",
									span: 16,
									label: "币种",
									attrs: {
										placeholder: "输入其它"
									}
								},
								// {
								// 	type: "input",
								// 	value: "",
								// 	prop: "name2",
								// 	label: "单价",
								// 	attrs: {
								// 		placeholder: "请输入金额",
								// 		suffix: "元"
								// 	}
								// },
								{
									type: "input",
									value: "",
									prop: "rent",
									label: "租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "radio",
									value: null,
									label: "支付渠道",
									span: 10,
									prop: "rtPaymentChannels",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "现金", value: "1" },
											{ label: "转账", value: "2" },
											{
												label: "票据",
												value: "3",
												bindKeys: ["rtBillType"]
											},
											{
												label: "其他",
												value: "4",
												bindKeys: ["rtChannelName"]
											}
										]
									}
								},
								{
									type: "input",
									value: "",
									prop: "rtBillType",
									span: 14,
									label: "票据类型",
									attrs: {
										placeholder: "请输入票据类型"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rtChannelName",
									span: 14,
									label: "渠道名称",
									attrs: {
										placeholder: "请输入渠道名称"
									}
								},

								{
									type: "radio",
									value: null,
									label: "支付方式",
									prop: "rtPaymentMethod",
									span: 10,
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "一次性", value: "1" },
											{
												label: "分期",
												value: "2",
												bindKeys: [
													"rtInstallmentMethod"
												]
											}
										]
									}
								},
								{
									type: "input",
									value: "",
									prop: "rtInstallmentMethod",
									label: "分期方式",
									span: 14,
									attrs: {
										placeholder: "请输入分期方式"
									}
								}
							]
						}
					},
					{
						name: "5.合同约定的租赁期限、费用",
						temp: ``,
						form: {
							span: 8,
							formItem: [
								{
									type: "range-picker",
									value: "",
									label: "租赁期间时间为",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "lease"
								},
								{
									type: "input",
									value: "",
									prop: "outRent",
									label: "除租金外产生的以下费用",
									attrs: {
										placeholder: "请输入内容"
									}
								},
								{
									type: "input",
									value: "",
									prop: "undertaker",
									label: "由以下主体承担",
									attrs: {
										placeholder: "请输入内容"
									}
								}
							]
						}
					},
					{
						name: "6.到期后租赁物归属",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "归属",
									prop: "leaseItemOwner",
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "归承租人所有",
												value: "1"
											},
											{
												label: "归出租人所有",
												value: "2"
											}
										]
									}
								},
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "bgCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "buyoutPrice",
									label: "留购价款",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "7.合同约定的违约责任",
						form: {
							span: 24,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "lbContent",
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
						name: "8.是否约定加速到期条款",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
									prop: "isAcAgree",
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
									prop: "acContent",
									span: 24,
									label: "具体内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "9.是否约定回收租赁物条件",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
									prop: "isAgree",
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
									prop: "agContent",
									span: 24,
									label: "具体内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "10.是否约定解除合同条件",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有",
									prop: "isCtAgree",
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
									prop: "ctContent",
									span: 24,
									label: "具体内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "11.租赁物交付时间",
						form: {
							span: 8,
							formItem: [
								{
									type: "date-picker",
									value: null,
									label: "交付时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "rpDeliveryTime"
								}
							]
						}
					},
					{
						name: "12.租赁物情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "情况",
									prop: "leaseSituation",
									span: 12,
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "质量符合约定或者承租人的使用目的",
												value: "1"
											},
											{
												label: "存在瑕疵",
												value: "2",
												bindKeys: []
											}
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "lsnContent",
									span: 24,
									label: "具体内容",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
					},
					{
						name: "13.租金支付情况",
						temp: `自年$，按约定缴纳租金，己付租金$逾期但己支付租金$<br>明细：`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "rpsCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "range-picker",
									value: [],
									label: "以下时间按约定缴纳租金",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "rps"
								},
								{
									type: "input",
									value: "",
									prop: "rpsPaidRent",
									label: "约定时间内已付租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "rpsLatePaidRent",
									label: "逾期但已支付租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "textarea",
									span: 24,
									value: "",
									prop: "name2",
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
						name: "14.逾期未付租金情况",
						temp: `自$起，欠付租金:$、违约金:$，滞纳金:$，损害赔偿金:$，共计$,<br>明细：$`,
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "orpCurrency",
									span: 24,
									label: "币种",
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "range-picker",
									value: [],
									label: "欠租金时间周期",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "orp"
								},
								{
									type: "input",
									value: "",
									prop: "orpOwingRent",
									label: "欠付租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "orpLiqDamages",
									label: "违约金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "orpLateFee",
									label: "滞纳金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "orpDamages",
									label: "损害赔偿金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},

								{
									type: "input",
									value: "",
									prop: "rpsLatePaidRent",
									label: "逾期但已支付租金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "textarea",
									span: 24,
									value: "",
									prop: "orpDetails",
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
									type: "curreney",
									value: "人民币CNY",
									prop: "geCurrency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
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
						name: "18.是否办理抵押、质押登记",
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
						name: "19.是否签订保证合同",
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
						name: "21.其他担保方式",
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
		resetForm: (key, model) => {
			switch (key) {
				case "rps":
					if (model["rpsStartTime"] && model["rpsEndTime"]) {
						return [model["rpsStartTime"], model["rpsEndTime"]];
					}
					return model[key];
				case "lease":
					if (model["leaseStartTime"] && model["leaseEndTime"]) {
						return [model["leaseStartTime"], model["leaseEndTime"]];
					}
					return model[key];
				case "orp":
					if (model["orpStartTime"] && model["orpEndTime"]) {
						return [model["orpStartTime"], model["orpEndTime"]];
					}
					return model[key];
				default:
					return model[key];
			}
		},
		// 提交
		submit: ({ form: originalForm, modules }) => {
			const [leaseStartTime, leaseEndTime = ""] = (
				originalForm.lease || ""
			).split(",");
			const [rpsStartTime, rpsEndTime = ""] = (
				originalForm.rps || ""
			).split(",");
			const [orpStartTime, orpEndTime = ""] = (
				originalForm.orp || ""
			).split(",");
			const form = {
				...originalForm,
				leaseStartTime,
				leaseEndTime,
				rpsStartTime,
				rpsEndTime,
				orpStartTime,
				orpEndTime
			};
			delete form.lease;
			delete form.rps;
			delete form.orp;
			financialLeaseComplaintSave(form).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
