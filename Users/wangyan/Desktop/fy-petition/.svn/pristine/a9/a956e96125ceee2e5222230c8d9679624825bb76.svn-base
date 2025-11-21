import { salesSave, saveOrUpdate } from "@/api/common";
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
						name: "1.理赔款",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "claims_currency",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "settlement_of_claims",
									label: "理赔款",
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

							return `支付理赔款${getValue(1)}元（${getValue(0)}）`;
						}
					},
					{
						name: "2.保费、违约金",
						form: {
							span: 8,
							labelCol: 24,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									span: 24,
									prop: "premium_currency",
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
									prop: "deadline_date"
								},
								{
									type: "input",
									value: "",
									prop: "liquidated_damages",
									label: "欠保险费、违约金等共",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "",
									value: "",
									label: ""
								},
								{
									type: "date-picker",
									value: null,
									label: "自以下日期，之后的保险费、违约金各项费用按照保证保险合同约定计算至实际清偿之日",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "start_time"
								},
								{
									type: "textarea",
									span: 24,
									value: "",
									prop: "premium_detail",
									label: "明细",
									attrs: {
										placeholder: "请输入明细",
										rows: 3
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

							return `截至${getValue(1)}止，欠保险费、违约金等共计${getValue(2)}元（${getValue(0)}）<br>自${getValue(4)}之后的保险费、违约金等各项费用按照保证保险合同约定计算至实际清偿之日止<br>明细：${getValue(5)}`;
						}
					},
					{
						name: "3.主张实现债权的费用信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									// label: "是否有主张实现债权的费用信息",
									label: "是否有",
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
									span: 24,
									value: "",
									prop: "creditor_detail",
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
						name: "4.其他请求信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									span: 24,
									value: "",
									prop: "other_requests",
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
						name: "5.标的总额",
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
						// template: (form) => {
						// 	const getValue = (index) => {
						// 		const value =
						// 			form.form[form.formItem[index].prop];
						// 		return value === null ||
						// 			value === undefined ||
						// 			value === ""
						// 			? "___"
						// 			: value;
						// 	};

						// 	return `总额${getValue(1)}元（${getValue(0)}）`;
						// }
					},
					{
						name: "6.请求依据信息",
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
									span: 24,
									prop: "is_convention_infor",
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
									prop: "contract_clause",
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
										placeholder: "请输入保全法院"
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
						name: "1.保证保险合同的签订情况（合同名称、主体、签订时间、地点、银行等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "contract_detail",
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
						name: "2.保证保险合同的主要约定信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									span: 24,
									prop: "insurance_amount_type",
									label: "保证保险金额币种",
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "insurance_amount",
									label: "保证保险金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "",
									value: "",
									label: "",
									span: 0
								},

								{
									type: "curreney",
									value: "人民币CNY",
									prop: "premium_type",
									label: "保费币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "premium",
									label: "保费金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "",
									value: "",
									label: "",
									span: 0
								},
								{
									type: "input",
									value: "",
									prop: "insurance_period",
									label: "保险期间",
									attrs: {
										placeholder: "请输入保险期间"
									}
								},
								{
									type: "input",
									value: "",
									prop: "payment_method",
									label: "保险费缴纳方式",
									attrs: {
										placeholder: "请输入保险费缴纳方式"
									}
								},
								{
									type: "input",
									value: "",
									prop: "claim_conditions",
									label: "理赔条件",
									attrs: {
										placeholder: "请输入理赔条件"
									}
								},
								{
									type: "input",
									value: "",
									prop: "claims_premiums_pursuit",
									label: "理赔款项和未付保费的追索",
									attrs: {
										placeholder:
											"请输入理赔款项和未付保费的追索"
									}
								},

								{
									type: "textarea",
									value: "",
									prop: "breach_duty_responsibility",
									label: "违约事由及违约责任",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "special_agreement",
									label: "特别约定",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "other",
									label: "其他",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
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
								保证保险金额：${getValue(1)}元（${getValue(0)}）<br>
								保费金额：${getValue(4)}元（${getValue(3)}）<br>
								保险期间：${getValue(6)}<br>
								保险费缴纳方式：${getValue(7)}<br>
								理赔条件：${getValue(8)}<br>
								理赔款项和未付保费的追索：${getValue(9)}<br>
								违约事由及违约责任：${getValue(10)}<br>
								特别约定：${getValue(11)}<br>
								其他：${getValue(12)}<br>
							`;
						}
					},
					{
						name: "3.对被告就保证保险合同主要条款进行提示注意、说明",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: "1",
									// label: "是否有对被告就保证保险合同主要条款进行提示注意、说明",
									label: "是否有",
									span: 24,
									prop: "is_look_out",
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
									prop: "notice_details",
									span: 24,
									label: "提示说明的具体方式以及时间地点",
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								}
							]
						}
						// template: (form) => {
						// 	const getValue = (index) => {
						// 		const value =
						// 			form.form[form.formItem[index].prop];
						// 		return value === null ||
						// 			value === undefined ||
						// 			value === ""
						// 			? "___"
						// 			: value;
						// 	};
						// 	return `是否有：${getValue(0)}<br>
						// 		提示说明的具体方式以及时间地点：${getValue(1)}<br>
						// 	`;
						// }
					},
					{
						name: "4.被告借款合同的主要约定（借款金额、期限、用途、利息标准、还款方式、担保、违约责任、解除条件、管辖约定）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "loan_contract_content",
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
						name: "5.被告逾期未还款情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "money_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "range-picker",
									value: [],
									label: "自以下时间，被告按约定还款",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
										// separator: "至"
									},
									prop: "defendantTime"
								},
								{
									type: "input",
									value: "",
									prop: "repaid",
									label: "已还款",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "overdue_repaid",
									label: "逾期但已还款",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "total_principal_money",
									label: "共归还本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "interest",
									label: "利息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "自以下时间起，开始逾期不还",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "overdue_payment_s_time"
								},
								{
									type: "date-picker",
									value: null,
									label: "截止至日期",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "overdue_payment_e_time"
								},
								{
									type: "input",
									value: "",
									prop: "loan_principal",
									label: "被告欠付借款本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "overdue_payment_interest",
									label: "利息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "interest_penalty",
									label: "罚息",
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
									prop: "fine_overdue_payment",
									label: "滞纳金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "overdue_damages",
									label: "违约金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "handling_charge",
									label: "手续费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "detail",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入明细",
										rows: 3
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

							return (
								`自${getValue(1)}，被告按约定还款，已还款${getValue(2)}元（${getValue(0)}），逾期但已还款${getValue(3)}元，共归还本金${getValue(4)}元，利息${getValue(5)}元，` +
								`<br>自${getValue(6)}起，开始逾期不还，截至${getValue(7)}，被告欠付借款本金${getValue(8)}元、利息${getValue(9)}元、罚息${getValue(10)}元、复利${getValue(11)}元、滞纳金${getValue(12)}元、违约金${getValue(13)}元、手续费${getValue(14)}元，` +
								`<br>明细：${getValue(15)}`
							);
						}
					},

					{
						name: "6.保证保险合同的履行情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "performance_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "原告于以下日期进行了理赔，代被告清偿债务",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									span: 10,
									prop: "plaintiff_s_time"
								},
								{
									type: "input",
									value: "",
									prop: "amount_of_indemnity",
									label: "共赔付",
									span: 7,
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "并于以下日期取得权益转让确认书",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									span: 7,
									prop: "assignment_time"
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

							return `原告于${getValue(1)}进行了理赔，代被告清偿债务，共赔款${getValue(2)}元(${getValue(0)})，于${getValue(3)}取得权益转让确认书`;
						}
					},
					{
						name: "7.追索情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "defendant_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "date-picker",
									value: null,
									label: "原告于以下日期，通知被告并向其追索",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "press_payment_time"
								},
								{
									type: "input",
									value: "",
									prop: "defendant_paid_premium",
									label: "被告已支付保费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "repay_a_loan",
									label: "被告归还借款",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "outstanding_premium",
									label: "被告尚欠保费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "de_pri_loan",
									label: "欠付借款本金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_interest",
									label: "利息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_in_penalty",
									label: "罚息",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_com_interest",
									label: "复利",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_payment",
									label: "滞纳金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_li_damages",
									label: "违约金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_han_charge",
									label: "手续费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},

								{
									type: "textarea",
									value: "",
									prop: "defendant_detail",
									label: "明细",
									span: 24,
									attrs: {
										placeholder: "请输入明细",
										rows: 3
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

							return (
								`原告于${getValue(1)}通知被告并向其追索` +
								`<br>被告已支付保费${getValue(2)}元(${getValue(0)})，归还借款${getValue(3)}元;尚欠保费${getValue(4)}元，欠付借款本金${getValue(5)}元、利息${getValue(6)}元、罚息${getValue(7)}元、复利${getValue(8)}元、滞纳金${getValue(9)}元、违约金${getValue(10)}元、手续费${getValue(11)}元` +
								`<br>明细：${getValue(12)}`
							);
						}
					},
					{
						name: "8.其他需要说明的内容（可另附页）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "other_content",
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
						name: "9.证据清单(可另附页)",
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
		resetForm: (key, model) => {
			if (key === "defendantTime") {
				return [
					model["defendant_start_time"],
					model["defendant_end_time"]
				];
			}
			return model[key];
		},
		// 提交
		submit: ({ form: originalForm, modules }) => {
			const [defendant_start_time, defendant_end_time = ""] = (
				originalForm.defendantTime || ""
			).split(",");
			const form = {
				...originalForm,
				defendant_end_time,
				defendant_start_time
			};
			delete form.defendantTime;

			saveOrUpdate(form).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
