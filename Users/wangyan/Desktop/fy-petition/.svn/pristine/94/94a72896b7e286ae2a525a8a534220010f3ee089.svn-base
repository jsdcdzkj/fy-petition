package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.DivorceDebtService;

import com.jsdc.petition.sys_.DivorceDebtVo;
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
@RequestMapping("/divorceDebt")
public class DivorceDebtController {

    @Autowired
    DivorceDebtService divorceDebtService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(DivorceDebtVo bean) {
        return AjaxJson.getSuccessData(divorceDebtService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateDivorceDebt(@RequestBody  DivorceDebtVo bean) {
        return divorceDebtService.saveOrUpdateDivorceDebt(bean);
    }

    /**
     * 获取实体类
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(DivorceDebtVo bean) {
        return divorceDebtService.getEntityById(bean.getId());
    }
}
