package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.SalesContractComplaintService;
import com.jsdc.petition.sys_.SalesContractComplaint;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 民事起诉状（买卖合同纠纷）
 */
@RestController
@RequestMapping("/salesContractComplaint")
public class SalesContractComplaintController {

    @Autowired
    SalesContractComplaintService sccService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(SalesContractComplaint bean) {
        return AjaxJson.getSuccessData(sccService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateScc(@RequestBody SalesContractComplaint bean) {
        return sccService.saveOrUpdateScc(bean);
    }

    /**
     * 获取实体类
     *
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(SalesContractComplaint bean) {
        return sccService.getEntityById(bean.getId());
    }
}
