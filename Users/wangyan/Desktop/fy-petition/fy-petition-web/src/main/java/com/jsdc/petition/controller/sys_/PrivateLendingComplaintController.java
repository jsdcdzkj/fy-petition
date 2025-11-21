package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.PrivateLendingComplaintService;
import com.jsdc.petition.sys_.PrivateLendingComplaint;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 民事起诉状（民间借贷纠纷）
 */
@RestController
@RequestMapping("/privateLendingComplaint")
public class PrivateLendingComplaintController {

    @Autowired
    PrivateLendingComplaintService plcService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(PrivateLendingComplaint bean) {
        return AjaxJson.getSuccessData(plcService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdatePlc(@RequestBody PrivateLendingComplaint bean) {
        return plcService.saveOrUpdatePlc(bean);
    }

    /**
     * 获取实体类
     *
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(PrivateLendingComplaint bean) {
        return plcService.getEntityById(bean.getId());
    }
}
