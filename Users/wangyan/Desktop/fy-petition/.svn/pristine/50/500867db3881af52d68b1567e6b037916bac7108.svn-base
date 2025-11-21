package com.jsdc.petition.controller.sys_;

import com.jsdc.petition.service.sys_.*;
import com.jsdc.petition.sys_.CommonVo;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * todo
 * controller控制器
 */
@RestController
@RequestMapping("/common")

public class CommonController {

    @Autowired
    CommonService commonService;
    @Autowired
    InsuranceDisputeService insuranceDisputeService;
    @Autowired
    MotorVehicleService motorVehicleService;
    @Autowired
    FinancialLoanService financialLoanService;
    @Autowired
    LabourService labourService;
    @Autowired
    DivorceService divorceService;
    @Autowired
    SalesContractComplaintService salesContractComplaintService;
    @Autowired
    PrivateLendingComplaintService privateLendingComplaintService;
    @Autowired
    FinancialLeaseComplaintService financialLeaseComplaintService;
    @Autowired
    PropertyComplaintService propertyComplaintService;
    @Autowired
    CivilComplaintService civilComplaintService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    @RequestMapping("/getPageList")

    public AjaxJson getPageList(CommonVo bean) {
        return AjaxJson.getSuccessData(commonService.getPageList(bean));
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    @RequestMapping("/saveOrUpdate")
    public AjaxJson saveOrUpdateCommon(@RequestBody CommonVo bean) {
        return commonService.saveOrUpdateCommon(bean);
    }

    /**
     * 获取实体类
     *
     * @param bean
     * @return
     */
    @RequestMapping("/getEntity")
    public AjaxJson getEntity(CommonVo bean) {
        if (null == bean.getType()) {
            return AjaxJson.getError("参数type不能为空");
        }
        if (null == bean.getLawsuit_id()) {
            return AjaxJson.getError("参数lawsuit_id不能为空");
        }
        if (0 == bean.getType()) {
            // 保证保险合同纠纷 0
            return insuranceDisputeService.getEntityById(bean.getLawsuit_id());
        } else if (1 == bean.getType()) {
            //机动车交通事故责任纠纷 1
            return motorVehicleService.getEntityById(bean.getLawsuit_id());
        } else if (2 == bean.getType()) {
            //金融借款合同纠纷 2
            return financialLoanService.getEntityById(bean.getLawsuit_id());
        } else if (3 == bean.getType()) {
            //劳动争议纠纷 3
            return labourService.getEntityById(bean.getLawsuit_id());
        } else if (4 == bean.getType()) {
            //离婚纠纷起诉状 4
            return divorceService.getEntityById(bean.getLawsuit_id());
        } else if (5 == bean.getType()) {
            //买卖合同纠纷 5
            return salesContractComplaintService.getEntityById(bean.getLawsuit_id());
        } else if (6 == bean.getType()) {
            //民间借贷纠纷 6
            return privateLendingComplaintService.getEntityById(bean.getLawsuit_id());
        } else if (7 == bean.getType()) {
            //融资租赁合同纠纷 7
            return financialLeaseComplaintService.getEntityById(bean.getLawsuit_id());
        } else if (8 == bean.getType()) {
            //物业服务合同纠纷 8
            return propertyComplaintService.getEntityById(bean.getLawsuit_id());
        } else if (9 == bean.getType()) {
            //银行信用卡纠纷 9
            return civilComplaintService.getEntityById(bean.getLawsuit_id());
        }
        return AjaxJson.getError("暂无数据");
    }
}
