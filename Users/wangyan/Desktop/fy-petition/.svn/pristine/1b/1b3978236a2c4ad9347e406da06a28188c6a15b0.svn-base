package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.LabourService;
import com.jsdc.petition.sys_.LabourVo;
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
@RequestMapping("/labour")
public class LabourController {

    @Autowired
    LabourService labourService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(LabourVo bean) {
        return AjaxJson.getSuccessData(labourService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateLabour(@RequestBody  LabourVo bean) {
        return labourService.saveOrUpdateLabour(bean);
    }

    /**
     * 获取实体类
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(LabourVo bean) {
        return labourService.getEntityById(bean.getId());
    }
}
