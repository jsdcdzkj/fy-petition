package com.jsdc.petition.service.sys_;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.mapper.sys_.FinancialLoanMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.Common;
import com.jsdc.petition.sys_.FinancialLoan;
import com.jsdc.petition.sys_.FinancialLoanVo;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class FinancialLoanService extends BaseService<FinancialLoan> {

    @Autowired
    private FinancialLoanMapper financialLoanMapper;

    @Autowired
    private CommonService commonService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    public Page<FinancialLoan> getPageList(FinancialLoanVo vo) {
        QueryWrapper<FinancialLoan> queryWrapper = new QueryWrapper<>();

        //testMapper.getEntityList(new Page<>(vo.getPageNo(), vo.getPageSize()),vo);
        return financialLoanMapper.selectPage(new Page<>(vo.getPageNo(), vo.getPageSize()), queryWrapper);

    }

    /**
     * 查询 todo
     *
     * @return
     */
    public List<FinancialLoan> getList(FinancialLoan entity) {
        QueryWrapper<FinancialLoan> queryWrapper = new QueryWrapper<>();
        return financialLoanMapper.selectList(queryWrapper);
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    public AjaxJson saveOrUpdateFinancialLoan(FinancialLoan bean) {
        if (null == bean.getId()) {
            bean.setCreate_time(new Date());
            bean.setIs_del("0");
        } else {
            bean.setUpdate_time(new Date());
        }

        bean.insertOrUpdate();


        if(null != bean.getId()) {
            QueryWrapper<Common> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("lawsuit_id", bean.getId()) ;
            commonService.remove(queryWrapper);
        }

        Common common = new Common();
        common.setType(2);
        common.setLawsuit_id(bean.getId());
        common.setPlaintiff_s_name(bean.getPlaintiff_s_name());
        common.setPlaintiff_p_name(bean.getPlaintiff_p_name());
        common.setDefendant_c_name(bean.getDefendant_c_name());
        common.setDefendant_p_name(bean.getDefendant_p_name());
        common.setCreate_time(bean.getCreate_time());
        commonService.saveOrUpdateCommon(common) ;






        return AjaxJson.getSuccess();
    }

    /**
     * 根据id获取类 todo
     *
     * @param id
     * @return
     */
    public AjaxJson getEntityById(Integer id) {
        return AjaxJson.getSuccessData(getById(id));
    }

}


