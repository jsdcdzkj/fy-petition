package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.FinancialLeaseComplaintService;
import com.jsdc.petition.sys_.FinancialLeaseComplaint;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 民事起诉状（融资租赁合同纠纷）
 */
@RestController
@RequestMapping("/financialLeaseComplaint")
public class FinancialLeaseComplaintController {

    @Autowired
    FinancialLeaseComplaintService flcService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(FinancialLeaseComplaint bean) {
        return AjaxJson.getSuccessData(flcService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateFlc(@RequestBody FinancialLeaseComplaint bean) {
        return flcService.saveOrUpdateFlc(bean);
    }

    /**
     * 获取实体类
     *
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(FinancialLeaseComplaint bean) {
        return flcService.getEntityById(bean.getId());
    }
}
