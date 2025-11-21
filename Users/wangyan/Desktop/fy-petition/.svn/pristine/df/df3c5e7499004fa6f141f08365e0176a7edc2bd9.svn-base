package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.DivorcePropertyService;
import com.jsdc.petition.sys_.DivorcePropertyVo;
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
@RequestMapping("/divorceProperty")
public class DivorcePropertyController {

    @Autowired
    DivorcePropertyService divorcePropertyService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(DivorcePropertyVo bean) {
        return AjaxJson.getSuccessData(divorcePropertyService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateDivorceProperty(@RequestBody  DivorcePropertyVo bean) {
        return divorcePropertyService.saveOrUpdateDivorceProperty(bean);
    }

    /**
     * 获取实体类
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(DivorcePropertyVo bean) {
        return divorcePropertyService.getEntityById(bean.getId());
    }
}
