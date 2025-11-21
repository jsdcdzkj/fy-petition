import {
	divorceSave,
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
					getModule7(5)
				]
			},
			// 二、诉讼请求和依据
			{
				name: "诉讼请求和依据",
				href: "#module-2",
				items: [
					{
						name: "1.解除婚姻关系",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "dissolution_marriage",
									label: "具体主张",
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
						name: "2.夫妻共同财产",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "有无夫妻共同财产",
									prop: "joint_property",
									span: 24,
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: [
													"divorcePropertyList"
												]
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "JointProperty",
									value: [
										{
											label: "房屋明细：归属",
											radio: "0",
											other_content: "",
											showOther: true
										},
										{
											label: "汽车明细：归属",
											radio: "0",
											other_content: "",
											showOther: true
										},
										{
											label: "存款明细：归属",
											radio: "0",
											other_content: "",
											showOther: true
										}
									],
									label: "",
									span: 24,
									prop: "divorcePropertyList",
									attrs: {
										showOther: true,
										noDelLen: 3
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
							const isType = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value == 1 ? "是" : "否";
							};
							console.log(form.formItem[1].value);
							if (form.formItem[1].value) {
								const propertyList = form.formItem[1].value
									.map((item) => {
										let radioText;
										switch (item.radio) {
											case "0":
												radioText = "原告";
												break;
											case "1":
												radioText = "被告";
												break;
											case "2":
												radioText = "其他";
												break;
											default:
												radioText = item.radio;
										}
										return `<br>${item.label}：${radioText}（${item.other_content}）`;
									})
									.join(" ");

								return `有无夫妻共同财产：${isType(0)} ${propertyList}`;
							}
						}
					},
					{
						name: "3.夫妻共同债务",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "有无夫妻共同债务",
									prop: "conjugal_debt",
									span: 24,
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: ["divorceDebtList"]
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "JointProperty",
									value: [],
									label: "",
									span: 24,
									prop: "divorceDebtList",
									attrs: {
										showOther: true,
										noDelLen: 0,
										template: (index) =>
											`债务${index}：承担主体`
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
							const isType = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value == 1 ? "是" : "否";
							};
							if (form.formItem[1].value) {
								const propertyList = form.formItem[1].value
									.map((item) => {
										let radioText;
										switch (item.radio) {
											case "0":
												radioText = "原告";
												break;
											case "1":
												radioText = "被告";
												break;
											case "2":
												radioText = "其他";
												break;
											default:
												radioText = item.radio;
										}
										return `<br>${item.label}：${radioText}（${item.other_content}）`;
									})
									.join(" ");
								return `有无夫妻共同债务：${isType(0)} ${propertyList}`;
							}
						}
					},
					{
						name: "4.子女直接抚养",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有此问题",
									prop: "child_problem",
									span: 24,
									select: {
										label: "label",
										value: "value",
										options: [
											{
												label: "是",
												value: "1",
												bindKeys: ["divorceSonList"]
											},
											{ label: "否", value: "0" }
										]
									}
								},
								{
									type: "JointProperty",
									value: [],
									label: "",
									span: 24,
									prop: "divorceSonList",
									attrs: {
										showOther: false,
										noDelLen: 0,
										template: (index) => `子女${index}归属`
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
							const isType = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value == 1 ? "是" : "否";
							};
							if (form.formItem[1].value) {
								const propertyList = form.formItem[1].value
									.map((item) => {
										let radioText;
										switch (item.radio) {
											case "0":
												radioText = "原告";
												break;
											case "1":
												radioText = "被告";
												break;
											default:
												radioText = item.radio;
										}
										return `<br>${item.label}：${radioText}`;
									})
									.join(" ");
								return `是否有此问题：${isType(0)} ${propertyList}`;
							}
						}
					},
					{
						name: "5.子女抚养费",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有此问题",
									prop: "child_support",
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
									label: "抚养费承担主体",
									prop: "alimony",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "原告", value: "0" },
											{ label: "被告", value: "1" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "money",
									label: "金额及明细",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "pay_type",
									label: "支付方式",
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
						name: "6.探望权",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有此问题",
									prop: "right_visit",
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
									label: "探望权行使主体",
									prop: "subject_right",
									select: {
										label: "label",
										value: "value",
										options: [
											{ label: "原告", value: "0" },
											{ label: "被告", value: "1" }
										]
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "mode_exercise",
									label: "行使方式",
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
						name: "7.离婚损害赔偿／离婚经济补偿／离婚经济帮助",
						form: {
							span: 8,
							formItem: [
								{
									type: "radio",
									value: null,
									label: "是否有此问题",
									prop: "divorce_compensation",
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
									prop: "financial_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "divorce_money",
									label: "离婚损害赔偿金额",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "financial_divorce",
									label: "离婚经济补偿",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "financial_help_ivorce",
									label: "离婚经济帮助",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								}
							]
						}
					},
					{
						name: "8.诉讼费用",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "litigation_cost",
									label: "金额明细",
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
						name: "9.其他请求信息",
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
									prop: "convention_info",
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
						name: "1.婚姻关系基本情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "date-picker",
									value: null,
									label: "结婚时间",
									attrs: {
										placeholder: "请选择日期",
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "marriage_time"
								},
								{
									type: "radio",
									value: null,
									label: "之前有无提起过离婚诉讼",
									prop: "divorce_roceedings",
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
									type: "textarea",
									value: "",
									prop: "childbearing_status",
									label: "生育子女情况",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "living_parties",
									label: "双方生活情况",
									span: 24,
									attrs: {
										placeholder: "请输入内容",
										rows: 3
									}
								},
								{
									type: "textarea",
									value: "",
									prop: "grounds_divorce",
									label: "离婚事由",
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
						name: "2.夫妻共同财产情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "joint_property_detail",
									label: "事实和理由",
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
						name: "3.夫妻共同债务情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "conjugal_debt_detail",
									label: "事实和理由",
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
						name: "4.子女直接抚养情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "child_support_detail",
									label: "子女直接抚养情况",
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
						name: "5.子女抚养费情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "child_detail",
									label: "子女抚养费情况",
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
						name: "6.子女探望权情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "child_visit_detail",
									label: "子女探望权情况",
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
						name: "7.赔偿/补偿/经济帮助相关情况（符合离婚损害赔偿、离婚经济补偿或离婚经济帮助的相关事实等）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "compensate_deatil",
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
						name: "8.其他",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "other",
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
						name: "9.诉请依据（法律及司法解释的规定，要写明具体条文）",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "basis_claim",
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
						name: "10.证据清单（可另附页）",
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
			switch (key) {
				case "divorceSonList":
					if (model.divorceSonList) {
						model.divorceSonList = model.divorceSonList.map(
							(item, index) => ({
								radio: item.son,
								other_content: item.son_content,
								label: `子女${index + 1}归属`
							})
						);
					}
					return model[key];
				case "divorcePropertyList":
					if (model.divorcePropertyList) {
						const list = model.divorcePropertyList.slice(0, 3);
						const defalutList = [
							{
								label: "房屋明细：归属",
								radio: 0,
								other_content: "",
								showOther: true
							},
							{
								label: "汽车明细：归属",
								radio: 0,
								other_content: "",
								showOther: true
							},
							{
								label: "存款明细：归属",
								radio: 0,
								other_content: "",
								showOther: true
							}
						];

						defalutList.forEach((item, index) => {
							item.radio = list[index].other;
							item.other_content = list[index].other_content;
						});
						const divorcePropertyList = model.divorcePropertyList
							.slice(3)
							.map((item, index) => ({
								radio: item.other,
								other_content: item.other_content,
								showOther: true,
								label: `其他${index + 1}明细`
							}));

						model.divorcePropertyList =
							defalutList.concat(divorcePropertyList);
					}
					return model[key];
				case "divorceDebtList":
					if (model.divorceDebtList) {
						model.divorceDebtList = model.divorceDebtList.map(
							(item, index) => ({
								radio: item.debt,
								other_content: item.debt_content,
								label: `债务${index + 1}归属`,
								showOther: true
							})
						);
					}
					return model[key];
				default:
					return model[key];
			}
		},
		// 提交
		submit: ({ form, modules }) => {
			console.log(form);
			// 夫妻共同财产
			if (form.joint_property == 1) {
				form.divorcePropertyList = form.divorcePropertyList.map(
					(item) => {
						return {
							other: item.radio,
							other_content: item.other_content
						};
					}
				);
			}
			// 夫妻共同债务
			if (form.conjugal_debt == 1) {
				form.divorceDebtList = form.divorceDebtList.map((item) => {
					return {
						debt: item.radio,
						debt_content: item.other_content
					};
				});
			}
			// 子女直接抚养
			if (form.child_problem == 1) {
				form.divorceSonList = form.divorceSonList.map((item) => {
					return {
						son: item.radio,
						son_content: item.other_content
					};
				});
			}
			divorceSave(form).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
