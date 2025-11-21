import { motorVehicleSave, salesSave, saveOrUpdate } from "@/api/common";
import GeneratePleadingsDialog from "@/components/GeneratePleadingsDialog";
import { createDom } from "@/dialog";
import { h, toRaw } from "vue";
import {
	getModule1,
	getModule2,
	getModule3,
	getModule4,
	getModule5,
	getModule7,
	getModule8,
	getModule9
} from "../config/module-config2";
import { companyTypeList } from "../config/selectList";

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
					{
						name: "6.被告（保险公司或其他法人、非法人组织）信息",
						form: {
							span: 8,
							formItem: [
								{
									type: "input",
									value: "",
									prop: "defendant_c_name",
									label: "被告名称",
									attrs: {
										placeholder: "请输入被告名称"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_c_domicile",
									label: "被告住所地",
									attrs: {
										placeholder:
											"请输入被告住所地(主要办事机构所在地)"
									}
								},
								{
									type: "input",
									value: "",
									prop: "domicile_of_defendant",
									label: "被告注册地/登记地",
									attrs: {
										placeholder: "请输入被告注册地/登记地"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_legal_r",
									label: "法定代表人/主要负责人",
									attrs: {
										placeholder:
											"请输入法定代表人/主要负责人"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_job",
									label: "职务",
									attrs: {
										placeholder:
											"请输入法定代表人/主要负责人职务"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_phone",
									label: "联系电话",
									attrs: {
										placeholder:
											"请输入法定代表人/主要负责人联系电话"
									}
								},
								{
									type: "input",
									value: "",
									prop: "defendant_unified_code",
									label: "统一社会信息代码",
									attrs: {
										placeholder: "请输入统一社会信息代码"
									}
								},
								{
									type: "select",
									value: null,
									label: "类型",
									attrs: {
										placeholder: "请选择类型"
									},
									prop: "c_type",
									select: {
										label: "label",
										value: "value",
										options: companyTypeList
									}
								}
							]
						}
					},
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
						name: "1.医疗费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "medical_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "range-picker",
									value: [],
									label: "住院(门诊)治疗时间",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "medicalTime"
								},
								{
									type: "input",
									value: "",
									prop: "org_name",
									label: "治疗医院",
									attrs: {
										placeholder: "请输入治疗医院"
									}
								},
								{
									type: "input",
									value: "",
									prop: "medical_fee",
									label: "累计发生医疗费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "radio",
									value: null,
									label: "是否有医疗费发票、医疗费清单、病例资料",
									span: 24,
									prop: "is_invoice",
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
								`${getValue(1)}期间在${getValue(2)}医院住院(门诊)治疗，累计发生医疗费${getValue(3)}元(${getValue(0)})` +
								`<br>医疗费发票、医疗费清单、病例资料：${isType(4)}`
							);
						}
					},
					{
						name: "2.护理费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "nurse_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "nurse_day",
									label: "住院护理天数",
									attrs: {
										placeholder: "请输入天数",
										suffix: "天"
									}
								},
								{
									type: "input",
									value: "",
									prop: "nurse_fee",
									label: "支付护理费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "nurse_work_fee",
									label: "或护理人员发生误工费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "short_nurse_fee",
									label: "或遵医嘱短期护理发生护理费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "radio",
									value: null,
									label: "是否有住院证明、医嘱等",
									prop: "is_hospital",
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
							const isType = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value == 1 ? "是" : "否";
							};
							return (
								`住院护理${getValue(1)}天支付护理费(${getValue(0)})${getValue(2)}元(或护理人员发生误工费${getValue(3)}元)，或遵医嘱短期护理发生护理费${getValue(4)}元` +
								`<br>住院证明、医嘱等:${isType(4)}`
							);
						}
					},
					{
						name: "3.营养费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "nutrition_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "nutrition_fee",
									label: "营养费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "radio",
									value: null,
									label: "是否有病历资料",
									prop: "is_medical_history",
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
							const isType = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value == 1 ? "是" : "否";
							};
							return (
								`营养费${getValue(1)}元(${getValue(0)})` +
								`<br>病历资料:${isType(2)}`
							);
						}
					},
					{
						name: "4.住院伙食补助费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "hospital_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "hospital_food_allowance",
									label: "住院伙食补助费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "radio",
									value: null,
									label: "是否有病历资料",
									prop: "is_h_medical_history",
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

							return (
								`住院伙食补助费${getValue(1)}元(${getValue(0)})` +
								`<br>病历资料:${isType(2)}`
							);
						}
					},
					{
						name: "5.误工费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "work_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "range-picker",
									value: [],
									label: "误工时间",
									attrs: {
										placeholder: ["开始日期", "结束日期"],
										format: "YYYY-MM-DD",
										valueFormat: "YYYY-MM-DD"
									},
									prop: "workTime"
								},

								{
									type: "input",
									value: "",
									prop: "work_fee",
									label: "误工费金额",
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

							return `自${getValue(1)}误工费${getValue(2)}元(${getValue(0)})`;
						}
					},
					{
						name: "6.交通费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "transportation_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "transportation_expense",
									label: "交通费",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "radio",
									value: null,
									label: "是否有交通凭证",
									prop: "is_travel_voucher",
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
							const isType = (index) => {
								const value =
									form.form[form.formItem[index].prop];
								return value == 1 ? "是" : "否";
							};
							return (
								`交通费${getValue(1)}元(${getValue(0)})` +
								`<br>交通费凭证:${isType(2)}`
							);
						}
					},
					{
						name: "7.残疾赔偿金",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "disability_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "disability_compensation",
									label: "残疾赔偿金",
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

							return `残疾赔偿金${getValue(1)}元(${getValue(0)})`;
						}
					},
					{
						name: "8.残疾辅助器具费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "subsidiary_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "subsidiary_fee",
									label: "残疾辅助器具费",
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

							return `残疾辅助器具费${getValue(1)}元(${getValue(0)})`;
						}
					},
					{
						name: "9.死亡赔偿金、丧葬费",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "death_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "death_fee",
									label: "死亡赔偿金",
									attrs: {
										placeholder: "请输入金额",
										suffix: "元"
									}
								},
								{
									type: "input",
									value: "",
									prop: "funeral_expenses",
									label: "丧葬费",
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

							return `死亡赔偿金${getValue(1)}元(${getValue(0)})，丧葬费${getValue(2)}元`;
						}
					},
					{
						name: "10.精神损害赔偿金",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "moral_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "moral_damages",
									label: "精神损害赔偿金",
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

							return `精神损害赔偿金${getValue(1)}元(${getValue(0)})`;
						}
					},
					{
						name: "11.其他费用",
						form: {
							span: 8,
							formItem: [
								{
									type: "curreney",
									value: "人民币CNY",
									prop: "other_type",
									label: "币种",
									span: 24,
									attrs: {
										placeholder: "输入其它"
									}
								},
								{
									type: "input",
									value: "",
									prop: "other_fee",
									label: "主张其他费用",
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

							return `主张其他费用${getValue(1)}元(${getValue(0)})`;
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
						name: "1.交通事故发生情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "occurrence",
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
						name: "2.交通事故责任认定",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "ident_of_res",
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
						name: "3.机动车投保情况",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "motor_veh_insurance",
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
						name: "4.其他情况及法律依据",
						form: {
							span: 8,
							formItem: [
								{
									type: "textarea",
									value: "",
									prop: "other_circumstances",
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
						name: "5.证据清单（可另附页）",
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
				case "medicalTime":
					if (model["medical_start"] && model["medical_end"]) {
						return [model["medical_start"], model["medical_end"]];
					}
					return model[key];
				case "workTime":
					if (model["work_start"] && model["work_end"]) {
						return [model["work_start"], model["work_end"]];
					}
					return model[key];
				default:
					return model[key];
			}
		},
		// 提交
		submit: ({ form: originalForm, modules }) => {
			const [medical_start, medical_end = ""] = (
				originalForm.medicalTime || ""
			).split(",");
			const [work_start, work_end = ""] = (
				originalForm.workTime || ""
			).split(",");
			const form = {
				...originalForm,
				medical_end,
				medical_start,
				work_end,
				work_start
			};
			delete form.medicalTime;
			delete form.workTime;

			motorVehicleSave(form).then(() => {
				createDom(
					document.body,
					h(GeneratePleadingsDialog, { modules: toRaw(modules) })
				);
			});
		}
	};
};
