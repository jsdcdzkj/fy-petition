package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.InsuranceDisputeService;
import com.jsdc.petition.sys_.InsuranceDisputeVo;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *  todo  
 *  controller控制器
 */
@RestController
@RequestMapping("/insuranceDispute")
public class InsuranceDisputeController {

    @Autowired
    InsuranceDisputeService insuranceDisputeService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList( InsuranceDisputeVo bean) {
        return AjaxJson.getSuccessData(insuranceDisputeService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateInsuranceDispute(@RequestBody InsuranceDisputeVo bean) {
        return insuranceDisputeService.saveOrUpdateInsuranceDispute(bean);
    }

    /**
     * 获取实体类
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(InsuranceDisputeVo bean) {
        return insuranceDisputeService.getEntityById(bean.getId());
    }
}
