import { request } from "@/api/index";

export const getPageList = (params) =>
	request.get("/common/getPageList", { params });

export const pass = (params) =>
	request.post("/sysUser/pass", params, { operationMessage: "密码修改成功" });

export const login = (data) => request.post("/login", data);
export const saveOrUpdate = (data) =>
	request.post("/insuranceDispute/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const civilComplaintSaveOrUpdate = (data) =>
	request.post("/civilComplaint/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const propertyComplaintSaveOrUpdate = (data) =>
	request.post("/propertyComplaint/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});
export const motorVehicleSave = (data) =>
	request.post("/motorVehicle/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const financialLoanSave = (data) =>
	request.post("/financialLoan/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const labourSave = (data) =>
	request.post("/labour/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});
export const divorceSave = (data) =>
	request.post("/divorce/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const salesSave = (data) =>
	request.post("/salesContractComplaint/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const financialLeaseComplaintSave = (data) =>
	request.post("/financialLeaseComplaint/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const privateSave = (data) =>
	request.post("/privateLendingComplaint/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const salesContractComplaintSave = (data) =>
	request.post("/	/salesContractComplaint/saveOrUpdate", data, {
		operationMessage: data.id ? "编辑成功" : "保存成功"
	});

export const getEntity = (params) =>
	request.get("/common/getEntity", { params });
