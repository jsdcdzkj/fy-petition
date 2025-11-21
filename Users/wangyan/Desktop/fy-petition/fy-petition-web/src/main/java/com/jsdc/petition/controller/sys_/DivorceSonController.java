package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.DivorceSonService;
import com.jsdc.petition.sys_.DivorceSonVo;
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
@RequestMapping("/divorceSon")
public class DivorceSonController {

    @Autowired
    DivorceSonService divorceSonService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(DivorceSonVo bean) {
        return AjaxJson.getSuccessData(divorceSonService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateDivorceSon(@RequestBody  DivorceSonVo bean) {
        return divorceSonService.saveOrUpdateDivorceSon(bean);
    }

    /**
     * 获取实体类
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(DivorceSonVo bean) {
        return divorceSonService.getEntityById(bean.getId());
    }
}
