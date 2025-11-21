import { companyTypeList, nationalityList } from "./selectList";
import { nextTick } from "vue";

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

// 优化后的处理函数（增加有效性校验）
export const handleIdCardChangeGeneric = (
	_,
	__,
	formCoa,
	idCardField,
	sexField,
	birthField
) => {
	const { form } = formCoa;

	// 获取并标准化身份证号
	const idCard = String(form[idCardField] || "")
		.trim()
		.toUpperCase();

	// 清空关联字段（当输入为空时）
	if (!idCard) {
		form[sexField] = null;
		form[birthField] = null;
		return;
	}

	// 增强版正则校验（严格18位格式）
	const idCardRegex =
		/^\d{6}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/;
	if (!idCardRegex.test(idCard)) {
		form[sexField] = null;
		form[birthField] = null;
		return;
	}

	// 解析日期组件
	const year = idCard.substring(6, 10);
	const rawMonth = idCard.substring(10, 12);
	const rawDay = idCard.substring(12, 14);

	// 日期合法性校验
	let validDate = false;
	try {
		// 构造临时日期对象（解决Date对象的自动纠正问题）
		const tempDate = new Date(`${year}-${rawMonth}-${rawDay}T12:00:00`);
		const isoDate = tempDate.toISOString().split("T")[0];
		const [isoYear, isoMonth, isoDay] = isoDate.split("-");

		// 验证日期是否被自动纠正
		validDate =
			isoYear === year && isoMonth === rawMonth && isoDay === rawDay;
	} catch {
		validDate = false;
	}

	// 设置合法日期或清空
	form[birthField] = validDate ? `${year}-${rawMonth}-${rawDay}` : null;

	// 解析性别（第17位，索引16）
	const genderChar = idCard.charAt(16);
	const genderCode = parseInt(genderChar, 10);

	// 有效时设置性别，否则清空
	form[sexField] = !isNaN(genderCode)
		? genderCode % 2 === 1
			? "0"
			: "1" // 0=男，1=女
		: null;
};

// 处理原告身份证号变化
const handleIdCardChange = (_, __, formCoa) => {
	handleIdCardChangeGeneric(
		_,
		__,
		formCoa,
		"plaintiff_p_card",
		"plaintiff_p_sex",
		"date_of_birth"
	);
};

// 处理被告身份证号变化
const handleIdCardChange2 = (_, __, formCoa) => {
	handleIdCardChangeGeneric(
		_,
		__,
		formCoa,
		"defendant_p_card",
		"defendant_p_sex",
		"defendant_birth"
	);
};

// 处理被告身份证号变化
const handleIdCardChange3 = (_, __, formCoa) => {
	handleIdCardChangeGeneric(
		_,
		__,
		formCoa,
		"third_p_card",
		"third_p_sex",
		"third_date_of_birth"
	);
};

// 1.原告（自然人）信息
export const getModule1 = (index = 1) => {
	return {
		name: `${index}.原告（自然人）信息`,
		form: {
			span: 8,
			formItem: [
				{
					type: "input",
					value: "",
					prop: "plaintiff_p_name",
					label: "原告姓名",
					attrs: {
						placeholder: "请输入原告姓名"
					}
				},
				{
					type: "auth-read",
					value: "",
					prop: "plaintiff_p_card",
					label: "身份证号",
					attrs: {
						placeholder: "请输入原告身份证号",
						// 添加change事件监听
						onChange: (item, e, props) => {
							nextTick(() => {
								if (e.sex == "男") {
									props.form["plaintiff_p_sex"] = "0";
								} else {
									props.form["plaintiff_p_sex"] = "1";
								}
								props.form["date_of_birth"] =
									`${e.born.slice(0, 4)}-${e.born.slice(4, 6)}-${e.born.slice(6)}`;
								props.form["plaintiff_p_name"] = e.name;
								props.form["plaintiff_p_domicile"] = e.address;
							});
						}
					}
				},
				{
					type: "radio",
					value: null,
					label: "性别",
					prop: "plaintiff_p_sex",
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
					prop: "plaintiff_p_nation",
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
					prop: "date_of_birth"
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_p_work_unit",
					label: "工作单位",
					attrs: {
						placeholder: "请输入工作单位"
					}
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_p_job",
					label: "职务",
					attrs: {
						placeholder: "请输入职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_p_phone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_p_domicile",
					label: "住所地(户籍所在地)",
					attrs: {
						placeholder: "请输入住所地(户籍所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_p_residence",
					label: "经常居住地",
					attrs: {
						placeholder: "请输入经常居住地"
					}
				}
			]
			// rules: {
			// 	plaintiff_p_name: [
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
					prop: "plaintiff_s_name",
					label: "原告名称",
					attrs: {
						placeholder: "请输入原告名称"
					}
				},

				{
					type: "input",
					value: "",
					prop: "plaintiff_s_domicile",
					label: "原告住所地",
					attrs: {
						placeholder: "请输入原告住所地(主要办事机构所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "domicile_of_plaintiff",
					label: "原告注册地/登记地",
					attrs: {
						placeholder: "请输入原告注册地/登记地"
					}
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_legal_r",
					label: "法定代表人/主要负责人",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人"
					}
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_job",
					label: "职务",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_phone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "plaintiff_unified_code",
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
					prop: "plaintiff_type",
					select: {
						label: "label",
						value: "value",
						options: companyTypeList
					}
				}
			]
			// rules: {
			// 	plaintiff_s_name: [
			// 		{
			// 			required: true,
			// 			message: "请输入原告名称",
			// 			trigger: "blur"
			// 		}
			// 	]
			// }
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
					prop: "is_agent",
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
					prop: "agent_name",
					label: "姓名",
					attrs: {
						placeholder: "请输入委托诉讼代理人姓名"
					}
				},
				{
					type: "input",
					value: "",
					prop: "agent_unit",
					label: "单位",
					attrs: {
						placeholder: "请输入委托诉讼代理人单位名称"
					}
				},
				{
					type: "input",
					value: "",
					prop: "agent_job",
					label: "职务",
					attrs: {
						placeholder: "请输入委托诉讼代理人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "agent_phone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入委托诉讼代理人电话"
					}
				},
				{
					type: "radio",
					value: null,
					label: "代理权限",
					prop: "agency_authority",
					select: {
						label: "label",
						value: "value",
						options: [
							{ label: "一般授权", value: "0" },
							{ label: "特殊授权", value: "1" }
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
					prop: "party_address",
					label: "地址",
					attrs: {
						placeholder: "请输入地址"
					}
				},
				{
					type: "input",
					value: "",
					prop: "party_addressee",
					label: "收件人",
					attrs: {
						placeholder: "请输入收件人姓名"
					}
				},
				{
					type: "input",
					value: "",
					prop: "party_phone",
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
					prop: "is_electronic_delivery",
					select: {
						label: "label",
						value: "value",
						options: [
							{
								label: "接受",
								value: "1",
								bindKeys: []
							},
							{ label: "不接受", value: "0" }
						]
					}
				},
				{
					type: "radio",
					value: null,
					label: "电子送达方式",
					prop: "way_type",
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
					prop: "way_info",
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
						placeholder: "请输入被告住所地(主要办事机构所在地)"
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
						placeholder: "请输入法定代表人/主要负责人"
					}
				},
				{
					type: "input",
					value: "",
					prop: "defendant_job",
					label: "职务",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "defendant_phone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人联系电话"
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
					prop: "defendant_p_name",
					label: "被告姓名",
					attrs: {
						placeholder: "请输入被告姓名"
					}
				},
				{
					type: "input",
					value: "",
					prop: "defendant_p_card",
					span: 5,
					label: "身份证号",
					attrs: {
						placeholder: "请输入被告身份证号",
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
					prop: "is_unable_provide",
					select: {
						label: "label",
						value: "value",
						options: [{ label: "无法提供", value: "0" }]
					},
					attrs: {
						onChange: authCheckChange
					}
				},
				{
					type: "radio",
					value: null,
					label: "性别",
					prop: "defendant_p_sex",
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
					prop: "defendant_p_nation",
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
					prop: "defendant_birth"
				},
				{
					type: "input",
					value: "",
					prop: "defendant_p_work_unit",
					label: "工作单位",
					attrs: {
						placeholder: "请输入工作单位"
					}
				},
				{
					type: "input",
					value: "",
					prop: "defendant_p_job",
					label: "职务",
					attrs: {
						placeholder: "请输入职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "defendant_p_phone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "defendant_p_domicile",
					label: "住所地(户籍所在地)",
					attrs: {
						placeholder: "请输入住所地(户籍所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "defendant_p_residence",
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
					prop: "third_c_name",
					label: "第三人名称",
					attrs: {
						placeholder: "请输入第三人名称"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_c_domicile",
					label: "第三人住所地",
					attrs: {
						placeholder: "请输入第三人住所地(主要办事机构所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_c_address",
					label: "第三人注册地/登记地",
					attrs: {
						placeholder: "请输入被告注册地/登记地"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_c_r",
					label: "法定代表人/主要负责人",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_c_job",
					label: "职务",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_c_phone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入法定代表人/主要负责人联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_c_unified_code",
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
					prop: "third_c_type",
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
					prop: "third_p_name",
					label: "第三人姓名",
					attrs: {
						placeholder: "请输入第三人姓名"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_p_card",
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
					span: 3,
					label: " ",
					prop: "third_unable_provide",
					select: {
						label: "label",
						value: "value",
						options: [{ label: "无法提供", value: "0" }]
					},
					attrs: {
						onChange: authCheckChange
					}
				},
				{
					type: "radio",
					value: null,
					label: "性别",
					prop: "third_p_sex",
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
					prop: "third_p_nation",
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
					prop: "third_date_of_birth"
				},
				{
					type: "input",
					value: "",
					prop: "third_p_work_unit",
					label: "工作单位",
					attrs: {
						placeholder: "请输入工作单位"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_p_job",
					label: "职务",
					attrs: {
						placeholder: "请输入职务"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_p_phone",
					label: "联系电话",
					attrs: {
						placeholder: "请输入联系电话"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_p_domicile",
					label: "住所地(户籍所在地)",
					attrs: {
						placeholder: "请输入住所地(户籍所在地)"
					}
				},
				{
					type: "input",
					value: "",
					prop: "third_p_residence",
					label: "经常居住地",
					attrs: {
						placeholder: "请输入经常居住地"
					}
				}
			]
		}
	};
};
