package com.jsdc.petition.service.sys_;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.mapper.sys_.PropertyComplaintMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.Common;
import com.jsdc.petition.sys_.PropertyComplaint;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * 民事起诉状（物业服务合同纠纷）
 */
@Service
@Transactional
public class PropertyComplaintService extends BaseService<PropertyComplaint> {

    @Autowired
    private PropertyComplaintMapper pcMapper;

    @Autowired
    private CommonService commonService;

    /**
     * 分页查询 todo
     *
     * @return
     */
    public Page<PropertyComplaint> getPageList(PropertyComplaint vo) {
        QueryWrapper<PropertyComplaint> queryWrapper = new QueryWrapper<>();

        //testMapper.getEntityList(new Page<>(vo.getPageNo(), vo.getPageSize()),vo);
        return pcMapper.selectPage(new Page<>(vo.getPageNo(), vo.getPageSize()), queryWrapper);

    }

    /**
     * 查询 todo
     *
     * @return
     */
    public List<PropertyComplaint> getList(PropertyComplaint entity) {
        QueryWrapper<PropertyComplaint> queryWrapper = new QueryWrapper<>();
        return pcMapper.selectList(queryWrapper);
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    public AjaxJson saveOrUpdatePc(PropertyComplaint bean) {
        if (null == bean.getId()) {
            bean.setCreate_time(new Date());
            bean.setIs_del("0");
        } else {
            bean.setUpdate_time(new Date());
        }
        bean.insertOrUpdate();

        Common common = new Common();
        common.setType(8);
        common.setLawsuit_id(bean.getId());
        common.setPlaintiff_s_name(bean.getpName());
//        common.setPlaintiff_p_name(bean.getPtName());
        common.setDefendant_c_name(bean.getdOrgName());
        common.setDefendant_p_name(bean.getdName());
        common.setThird_c_name(bean.getTpOrgName());
        common.setThird_p_name(bean.getTpName());
        common.setCreate_time(bean.getCreate_time());
        commonService.saveOrUpdateCommon(common);

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

    public void delEntityById(Integer id) {
        PropertyComplaint bean = new PropertyComplaint();
        bean.setId(id);
        bean.setIs_del("1");
        bean.updateById();
    }
}


