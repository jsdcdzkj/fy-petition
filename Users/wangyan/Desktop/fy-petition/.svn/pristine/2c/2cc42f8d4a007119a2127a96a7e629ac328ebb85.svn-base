package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.PropertyComplaintService;
import com.jsdc.petition.sys_.PropertyComplaint;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 民事起诉状（物业服务合同纠纷）
 */
@RestController
@RequestMapping("/propertyComplaint")
public class PropertyComplaintController {

    @Autowired
    PropertyComplaintService pcService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(PropertyComplaint bean) {
        return AjaxJson.getSuccessData(pcService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdatePc(@RequestBody PropertyComplaint bean) {
        return pcService.saveOrUpdatePc(bean);
    }

    /**
     * 获取实体类
     *
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(PropertyComplaint bean) {
        return pcService.getEntityById(bean.getId());
    }
}
