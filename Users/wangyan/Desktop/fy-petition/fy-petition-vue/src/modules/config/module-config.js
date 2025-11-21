import { handleIdCardChangeGeneric } from "./module-config2";
import { companyTypeList, nationalityList } from "./selectList";
import { nextTick } from "vue";
// 1.原告（自然人）信息

const authCheckChange = (_, e, formCoa) => {
	nextTick(() => {
		const { form, formItem } = formCoa;
		if (e.length == 1) {
			form[formItem[1].prop] = "无法提供";
			formItem[1].attrs.disabled = true;
		} else {
			form[formItem[1].prop] = "";
			formItem[1].attrs.disabled = false;
		}
	});
};

// 处理被告身份证号变化
const handleIdCardChange2 = (_, __, formCoa) => {
	handleIdCardChangeGeneric(
		_,
		__,
		formCoa,
		"dIdNum",
		"dGender",
		"dBirthDate"
	);
};

// 处理被告身份证号变化
const handleIdCardChange3 = (_, __, formCoa) => {
	handleIdCardChangeGeneric(
		_,
		__,
		formCoa,
		"tpIdNum",
		"tpGender",
		"tpBirthDate"
	);
};

export const getModule1 = (index = 1) => {
	return {
		name: `${index}.原告（自然人）信息`,
		form: {
			span: 8,
			formItem: [
				{
					type: "input",
					value: "",
					prop: "ptName",
					label: "原告姓名",
					attrs: {
						placeholder: "请输入原告姓名"
					}
				},
				{
					type: "auth-read",
					value: "",
					prop: "ptIdNum",
					label: "身份证号",
					attrs: {
						placeholder: "请输入原告身份证号",
						onChange: (item, e, props) => {
							nextTick(() => {
								if (e.sex == "男") {
									props.form["ptGender"] = "0";
								} else {
									props.form["ptGender"] = "1";
								}
								props.form["ptBirthDate"] =
									`${e.born.slice(0, 4)}-${e.born.slice(4, 6)}-${e.born.slice(6)}`;
								props.form["ptName"] = e.name;
								props.form["ptResidence"] = e.address;
							});
						}
					}
				},
				{
					type: "radio",
					value: null,
					label: "性别",
					prop: "ptGender",
					select: {
						label: "label",
						value: "value",
						options: [
							{ label: "男性", value: "0" },
							{ label: "女性", value: "1" }
						]
					}
				},
				{
					type: "select",
					value: null,
					label: "民族",
					attrs: {
						placeholder: "请选择民族"
					},
					prop: "ptNation",
					select: {
						label: "label",
						value: "value",
						options: nationalityList
					}
				},
				{
					type: "date-picker",
					value: null,
					label: "出生日期",
					attrs: {
						placeholder: "请选择日期",
						format: "YYYY-MM-DD",
						valueFormat: "YYYY-MM-DD"
					},
					prop: "ptBirthDate"
				},
				{
					type: "input",
					value: "",
					prop: "ptWorkUnit",
					label: "工作单位",
					attrs: {
						placeholder: "请输入工作单位"
					}
				},
				{
					type: "input",
					value: "",
					prop: "ptPos",
					label: "职务",
					attrs: {
						placeholder: "请输入职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "ptPhone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "ptResidence",
					label: "住所地(户籍所在地)",
					attrs: {
						placeholder: "请输入住所地(户籍所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "ptFreqAddr",
					label: "经常居住地",
					attrs: {
						placeholder: "请输入经常居住地"
					}
				}
			],
			rules: {
				// ptName: [
				// 	{
				// 		required: true,
				// 		message: "请输入原告姓名",
				// 		trigger: "blur"
				// 	}
				// ]
			}
		}
	};
};
// 2.原告（法人、非法人组织）信息
export const getModule2 = (index = 2) => {
	return {
		name: `${index}.原告（法人、非法人组织）信息`,
		form: {
			span: 8,
			formItem: [
				{
					type: "input",
					value: "",
					prop: "pName",
					label: "原告名称",
					attrs: {
						placeholder: "请输入原告名称"
					}
				},

				{
					type: "input",
					value: "",
					prop: "pAddr",
					label: "原告住所地",
					attrs: {
						placeholder: "请输入原告住所地(主要办事机构所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pRegAddr",
					label: "原告注册地/登记地",
					attrs: {
						placeholder: "请输入原告注册地/登记地"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pLegalRep",
					label: "法定代表人/主要负责人",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pRepPos",
					label: "职务",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pRepPhone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pCreditCode",
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
					prop: "pType",
					select: {
						label: "label",
						value: "value",
						options: companyTypeList
					}
				}
			],
			rules: {
				// pName: [
				// 	{
				// 		required: true,
				// 		message: "请输入原告姓名",
				// 		trigger: "blur"
				// 	}
				// ]
			}
		}
	};
};

//3.委托诉讼代理人信息
export const getModule3 = (index = 3) => {
	return {
		name: index + ".委托诉讼代理人信息",
		form: {
			span: 8,
			formItem: [
				{
					type: "radio",
					value: null,
					label: "是否有委托诉讼代理人",
					prop: "hasAgent",

					select: {
						label: "label",
						value: "value",
						options: [
							{ label: "有", value: "1", bindKeys: [] },
							{ label: "无", value: "0" }
						]
					}
				},
				{
					type: "input",
					value: "",
					prop: "agentName",
					label: "姓名",
					attrs: {
						placeholder: "请输入委托诉讼代理人姓名"
					}
				},
				{
					type: "input",
					value: "",
					prop: "agentOrg",
					label: "单位",
					attrs: {
						placeholder: "请输入委托诉讼代理人单位名称"
					}
				},
				{
					type: "input",
					value: "",
					prop: "agentPos",
					label: "职务",
					attrs: {
						placeholder: "请输入委托诉讼代理人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "agentPhone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入委托诉讼代理人电话"
					}
				},
				{
					type: "radio",
					value: null,
					label: "代理权限",
					prop: "agentAuth",
					select: {
						label: "label",
						value: "value",
						options: [
							{ label: "一般授权", value: "1" },
							{ label: "特殊授权", value: "2" }
						]
					}
				}
			]
		}
	};
};
//4.送达地址（所填信息除书面特别声明更改外，适用于案件一审、二审、再审所有后续程序）及收件人、联系电话
export const getModule4 = (index = 4) => {
	return {
		name:
			index +
			".送达地址（所填信息除书面特别声明更改外，适用于案件一审、二审、再审所有后续程序）及收件人、联系电话",
		form: {
			span: 8,
			formItem: [
				{
					type: "input",
					value: "",
					prop: "delAddr",
					label: "地址",
					attrs: {
						placeholder: "请输入地址"
					}
				},
				{
					type: "input",
					value: "",
					prop: "delRecipient",
					label: "收件人",
					attrs: {
						placeholder: "请输入收件人姓名"
					}
				},
				{
					type: "input",
					value: "",
					prop: "delPhone",
					label: "电话",
					attrs: {
						placeholder: "请输入收件人联系电话"
					}
				}
			]
		}
	};
};
//5.接受电子送达信息
export const getModule5 = (index = 5) => {
	return {
		name: index + ".接受电子送达信息",
		form: {
			span: 8,
			formItem: [
				{
					type: "radio",
					value: null,
					label: "是否接受电子送达",
					prop: "acceptEleDel",

					select: {
						label: "label",
						value: "value",
						options: [
							{ label: "接受", value: "1", bindKeys: [] },
							{ label: "不接受", value: "0" }
						]
					}
				},
				{
					type: "radio",
					value: null,
					label: "电子送达方式",
					prop: "eleDelMethod",
					select: {
						label: "label",
						value: "value",
						options: [
							{ label: "短信", value: "0" },
							{ label: "微信", value: "1" },
							{ label: "传真", value: "2" },
							{ label: "邮箱", value: "3" },
							{ label: "其他", value: "4" }
						]
					}
				},
				{
					type: "input",
					value: "",
					prop: "eleDelInfo",
					label: "电子送达信息",
					attrs: {
						placeholder: "请输入电子送达信息"
					}
				}
			]
		}
	};
};
//6.被告（法人、非法人组织）信息
export const getModule6 = (index = 6) => {
	return {
		name: index + ".被告（法人、非法人组织）信息",
		form: {
			span: 8,
			formItem: [
				{
					type: "input",
					value: "",
					prop: "dOrgName",
					label: "被告名称",
					attrs: {
						placeholder: "请输入被告名称"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dOrgAddr",
					label: "被告住所地",
					attrs: {
						placeholder: "请输入被告住所地(主要办事机构所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dOrgRegAddr",
					label: "被告注册地/登记地",
					attrs: {
						placeholder: "请输入被告注册地/登记地"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dLegalRep",
					label: "法定代表人/主要负责人",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dRepPos",
					label: "职务",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dRepPhone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dCreditCode",
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
					prop: "dType",
					select: {
						label: "label",
						value: "value",
						options: companyTypeList
					}
				}
			]
		}
	};
};
// 7.被告（自然人）信息
export const getModule7 = (index = 7) => {
	return {
		name: index + ".被告（自然人）信息",

		form: {
			span: 8,

			formItem: [
				{
					type: "input",
					value: "",
					prop: "dName",
					label: "被告姓名",
					attrs: {
						placeholder: "请输入被告姓名"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dIdNum",
					span: 5,
					label: "身份证号",
					attrs: {
						placeholder: "请输入被告身份证号",
						disabled: false,
						// 添加change事件监听
						onChange: handleIdCardChange2
					}
				},
				{
					type: "checkbox",
					value: [],
					showTemplate: false,
					span: 3,
					label: " ",
					prop: "dIsUnableProvide",
					select: {
						label: "label",
						value: "value",
						options: [{ label: "无法提供", value: "1" }]
					},
					attrs: {
						onChange: authCheckChange
					}
				},
				{
					type: "radio",
					value: null,
					label: "性别",
					prop: "dGender",
					select: {
						label: "label",
						value: "value",
						options: [
							{ label: "男性", value: "0" },
							{ label: "女性", value: "1" }
						]
					}
				},
				{
					type: "select",
					value: null,
					label: "民族",
					attrs: {
						placeholder: "请选择民族"
					},
					prop: "dNation",
					select: {
						label: "label",
						value: "value",
						options: nationalityList
					}
				},
				{
					type: "date-picker",
					value: null,
					label: "出生日期",
					attrs: {
						placeholder: "请选择日期",
						format: "YYYY-MM-DD",
						valueFormat: "YYYY-MM-DD"
					},
					prop: "dBirthDate"
				},
				{
					type: "input",
					value: "",
					prop: "dWorkUnit",
					label: "工作单位",
					attrs: {
						placeholder: "请输入工作单位"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dPos",
					label: "职务",
					attrs: {
						placeholder: "请输入职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dPhone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dResidence",
					label: "住所地(户籍所在地)",
					attrs: {
						placeholder: "请输入住所地(户籍所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "dFreqAddr",
					label: "经常居住地",
					attrs: {
						placeholder: "请输入经常居住地"
					}
				}
			]
		}
	};
};
//8.第三人（法人、非法人组织）信息
export const getModule8 = (index = 8) => {
	return {
		name: index + ".第三人（法人、非法人组织）信息",
		form: {
			span: 8,
			formItem: [
				{
					type: "input",
					value: "",
					prop: "tpOrgName",
					label: "第三人名称",
					attrs: {
						placeholder: "请输入第三人名称"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpOrgAddr",
					label: "第三人住所地",
					attrs: {
						placeholder: "请输入第三人住所地(主要办事机构所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpOrgRegAddr",
					label: "第三人注册地/登记地",
					attrs: {
						placeholder: "请输入被告注册地/登记地"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpLegalRep",
					label: "法定代表人/主要负责人",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpRepPos",
					label: "职务",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpRepPhone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpCreditCode",
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
					prop: "tpType",
					select: {
						label: "label",
						value: "value",
						options: companyTypeList
					}
				}
			]
		}
	};
};
//9.第三人（自然人）信息
export const getModule9 = (index = 9) => {
	return {
		name: index + ".第三人（自然人）信息",
		form: {
			span: 8,
			formItem: [
				{
					type: "input",
					value: "",
					prop: "tpName",
					label: "第三人姓名",
					attrs: {
						placeholder: "请输入第三人姓名"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpIdNum",
					span: 5,
					label: "身份证号",
					attrs: {
						placeholder: "请输入身份证号",
						// 添加change事件监听
						onChange: handleIdCardChange3
					}
				},
				{
					type: "checkbox",
					value: [],
					showTemplate: false,
					label: " ",
					span: 3,
					prop: "isUnableProvide",
					select: {
						label: "label",
						value: "value",
						options: [{ label: "无法提供", value: "1" }]
					},
					attrs: {
						onChange: authCheckChange
					}
				},
				{
					type: "radio",
					value: null,
					label: "性别",
					prop: "tpGender",
					select: {
						label: "label",
						value: "value",
						options: [
							{ label: "男性", value: "0" },
							{ label: "女性", value: "1" }
						]
					}
				},
				{
					type: "select",
					value: null,
					label: "民族",
					attrs: {
						placeholder: "请选择民族"
					},
					prop: "tpNation",
					select: {
						label: "label",
						value: "value",
						options: nationalityList
					}
				},
				{
					type: "date-picker",
					value: null,
					label: "出生日期",
					attrs: {
						placeholder: "请选择日期",
						format: "YYYY-MM-DD",
						valueFormat: "YYYY-MM-DD"
					},
					prop: "tpBirthDate"
				},
				{
					type: "input",
					value: "",
					prop: "tpWorkUnit",
					label: "工作单位",
					attrs: {
						placeholder: "请输入工作单位"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpPos",
					label: "职务",
					attrs: {
						placeholder: "请输入职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpPhone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpResidence",
					label: "住所地(户籍所在地)",
					attrs: {
						placeholder: "请输入住所地(户籍所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "tpFreqAddr",
					label: "经常居住地",
					attrs: {
						placeholder: "请输入经常居住地"
					}
				}
			]
		}
	};
};

// 2.原告（法人、非法人组织）信息
export const getModule10 = (index = 2) => {
	return {
		name: `${index}.原告（法人、非法人组织）信息`,
		form: {
			span: 8,
			formItem: [
				{
					type: "input",
					value: "",
					prop: "pName",
					label: "原告名称",
					attrs: {
						placeholder: "请输入原告名称"
					}
				},

				{
					type: "input",
					value: "",
					prop: "pAddress",
					label: "原告住所地",
					attrs: {
						placeholder: "请输入原告住所地(主要办事机构所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pRegAddress",
					label: "原告注册地/登记地",
					attrs: {
						placeholder: "请输入原告注册地/登记地"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pLegalRep",
					label: "法定代表人/主要负责人",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pLegalRepPos",
					label: "职务",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pLegalRepPhone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "pCreditCode",
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
					prop: "pType",
					select: {
						label: "label",
						value: "value",
						options: companyTypeList
					}
				}
			]
			// rules: {
			// 	pName: [
			// 		{
			// 			required: true,
			// 			message: "请输入原告姓名",
			// 			trigger: "blur"
			// 		}
			// 	]
			// }
		}
	};
};
