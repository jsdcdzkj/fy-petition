package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.MotorVehicleService;
import com.jsdc.petition.sys_.MotorVehicleVo;
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
@RequestMapping("/motorVehicle")
public class MotorVehicleController {

    @Autowired
    MotorVehicleService motorVehicleService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(MotorVehicleVo bean) {
        return AjaxJson.getSuccessData(motorVehicleService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateMotorVehicle(@RequestBody  MotorVehicleVo bean) {
        return motorVehicleService.saveOrUpdateMotorVehicle(bean);
    }

    /**
     * 获取实体类
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(MotorVehicleVo bean) {
        return motorVehicleService.getEntityById(bean.getId());
    }
}
