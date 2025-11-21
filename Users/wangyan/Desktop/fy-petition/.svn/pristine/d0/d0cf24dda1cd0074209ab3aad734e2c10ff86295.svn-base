package com.jsdc.petition.service.sys_;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.mapper.sys_.InsuranceDisputeMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.Common;
import com.jsdc.petition.sys_.InsuranceDispute;
import com.jsdc.petition.sys_.InsuranceDisputeVo;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class InsuranceDisputeService extends BaseService<InsuranceDispute> {

    @Autowired
    private InsuranceDisputeMapper insuranceDisputeMapper;

    @Autowired
    CommonService commonService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    public Page<InsuranceDispute> getPageList(InsuranceDisputeVo vo) {
        QueryWrapper<InsuranceDispute> queryWrapper = new QueryWrapper<>();

        //testMapper.getEntityList(new Page<>(vo.getPageNo(), vo.getPageSize()),vo);
        return insuranceDisputeMapper.selectPage(new Page<>(vo.getPageNo(), vo.getPageSize()), queryWrapper);

    }

    /**
     * 查询 todo
     *
     * @return
     */
    public List<InsuranceDispute> getList(InsuranceDispute entity) {
        QueryWrapper<InsuranceDispute> queryWrapper = new QueryWrapper<>();
        return insuranceDisputeMapper.selectList(queryWrapper);
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    public AjaxJson saveOrUpdateInsuranceDispute(InsuranceDispute bean) {
        if (null == bean.getId()) {
            bean.setCreate_time(new Date());
            bean.setIs_del("0");
        } else {
            bean.setUpdate_time(new Date());
        }

        bean.insertOrUpdate();


        Common common = new Common();
        common.setType(0);
        common.setLawsuit_id(bean.getId());
        common.setPlaintiff_s_name(bean.getPlaintiff_s_name());
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


