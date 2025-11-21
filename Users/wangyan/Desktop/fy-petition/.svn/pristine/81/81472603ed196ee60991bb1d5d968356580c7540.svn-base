package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.FinancialLoanService;


import com.jsdc.petition.sys_.FinancialLoanVo;
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
@RequestMapping("/financialLoan")
public class FinancialLoanController {

    @Autowired
    FinancialLoanService financialLoanService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")
    public AjaxJson getPageList(FinancialLoanVo bean) {
        return AjaxJson.getSuccessData(financialLoanService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateFinancialLoan(@RequestBody  FinancialLoanVo bean) {
        return financialLoanService.saveOrUpdateFinancialLoan(bean);
    }

    /**
     * 获取实体类
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(FinancialLoanVo bean) {
        return financialLoanService.getEntityById(bean.getId());
    }
}
