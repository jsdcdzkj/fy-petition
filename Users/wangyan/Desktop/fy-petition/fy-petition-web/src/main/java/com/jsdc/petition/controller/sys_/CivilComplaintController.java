package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.CivilComplaintService;
import com.jsdc.petition.sys_.CivilComplaint;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 民事起诉状（银行信用卡纠纷）
 */
@RestController
@RequestMapping("/civilComplaint")
public class CivilComplaintController {

    @Autowired
    CivilComplaintService civilComplaintService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(CivilComplaint bean) {
        return AjaxJson.getSuccessData(civilComplaintService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateCc(@RequestBody CivilComplaint bean) {
        return civilComplaintService.saveOrUpdateCc(bean);
    }

    /**
     * 获取实体类
     *
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(CivilComplaint bean) {
        return civilComplaintService.getEntityById(bean.getId());
    }
}
