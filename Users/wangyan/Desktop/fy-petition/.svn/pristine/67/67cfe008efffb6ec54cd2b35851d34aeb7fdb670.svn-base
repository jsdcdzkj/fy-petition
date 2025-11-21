package com.jsdc.petition.controller.sys_;


import com.jsdc.petition.service.sys_.DivorceService;
import com.jsdc.petition.sys_.DivorceVo;
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
@RequestMapping("/divorce")
public class DivorceController {

    @Autowired
    DivorceService divorceService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(DivorceVo bean) {
        return AjaxJson.getSuccessData(divorceService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateDivorce(@RequestBody  DivorceVo bean) {
        return divorceService.saveOrUpdateDivorce(bean);
    }

    /**
     * 获取实体类
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(DivorceVo bean) {
        return divorceService.getEntityById(bean.getId());
    }
}
