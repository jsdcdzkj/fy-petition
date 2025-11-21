package com.jsdc.petition.service.sys_;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.mapper.sys_.DivorceDebtMapper;
import com.jsdc.petition.mapper.sys_.DivorceMapper;
import com.jsdc.petition.mapper.sys_.DivorcePropertyMapper;
import com.jsdc.petition.mapper.sys_.DivorceSonMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.*;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class DivorceService extends BaseService<Divorce> {

    @Autowired
    private DivorceMapper divorceMapper;

    @Autowired
    CommonService commonService;

    @Autowired
    private DivorceSonMapper divorceSonMapper ;

    @Autowired
    private DivorcePropertyMapper divorcePropertyMapper ;

    @Autowired
    private DivorceDebtMapper divorceDebtMapper ;

    /**
     * 分页查询 todo
     *
     * @return
     */
    public Page<Divorce> getPageList(DivorceVo vo) {
        QueryWrapper<Divorce> queryWrapper = new QueryWrapper<>();

        //testMapper.getEntityList(new Page<>(vo.getPageNo(), vo.getPageSize()),vo);
        return divorceMapper.selectPage(new Page<>(vo.getPageNo(), vo.getPageSize()), queryWrapper);

    }

    /**
     * 查询 todo
     *
     * @return
     */
    public List<Divorce> getList(Divorce entity) {
        QueryWrapper<Divorce> queryWrapper = new QueryWrapper<>();
        return divorceMapper.selectList(queryWrapper);
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    public AjaxJson saveOrUpdateDivorce(Divorce bean) {
        if (null == bean.getId()) {
            bean.setCreate_time(new Date());
            bean.setIs_del("0");
        } else {
            bean.setUpdate_time(new Date());
        }

        bean.insertOrUpdate();


        //夫妻共同财产
        if(CollectionUtils.isNotEmpty(bean.getDivorcePropertyList())){
            //先删在增
            QueryWrapper<DivorceProperty> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("divorce_id", bean.getId());
            divorcePropertyMapper.delete(queryWrapper);

            for(DivorceProperty divorceProperty : bean.getDivorcePropertyList()){
                divorceProperty.setDivorce_id(bean.getId());
                divorceProperty.insertOrUpdate() ;
            }
        }


        //夫妻共同债务
        if(CollectionUtils.isNotEmpty(bean.getDivorceDebtList())){
            //先删在增
            QueryWrapper<DivorceDebt> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("divorce_id", bean.getId());
            divorceDebtMapper.delete(queryWrapper);

            for(DivorceDebt divorceDebt : bean.getDivorceDebtList()){
                divorceDebt.setDivorce_id(bean.getId());
                divorceDebt.insertOrUpdate() ;
            }
        }


        //子女直接抚养
        if(CollectionUtils.isNotEmpty(bean.getDivorceSonList())){
            //先删在增
            QueryWrapper<DivorceSon> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("divorce_id", bean.getId());
            divorceSonMapper.delete(queryWrapper);

            for(DivorceSon divorceSon : bean.getDivorceSonList()){
                divorceSon.setDivorce_id(bean.getId());
                divorceSon.insertOrUpdate() ;
            }
        }

        Common common = new Common();
        common.setType(4);
        common.setLawsuit_id(bean.getId());
        common.setPlaintiff_p_name(bean.getPlaintiff_p_name());
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
        Divorce divorce = getById(id) ;

        QueryWrapper<DivorceSon> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("divorce_id", id);
        queryWrapper.orderByAsc("id") ;
        List<DivorceSon> divorceSonList = divorceSonMapper.selectList(queryWrapper) ;
        if(CollectionUtils.isNotEmpty(divorceSonList)){
            divorce.setDivorceSonList(divorceSonList);
        }


        QueryWrapper<DivorceDebt> divorceDebtQueryWrapper = new QueryWrapper<>();
        divorceDebtQueryWrapper.eq("divorce_id", id);
        divorceDebtQueryWrapper.orderByAsc("id") ;
        List<DivorceDebt> divorceDebtList = divorceDebtMapper.selectList(divorceDebtQueryWrapper) ;
        if(CollectionUtils.isNotEmpty(divorceDebtList)){
            divorce.setDivorceDebtList(divorceDebtList);
        }

        QueryWrapper<DivorceProperty> divorcePropertyQueryWrapper = new QueryWrapper<>();
        divorcePropertyQueryWrapper.eq("divorce_id", id);
        divorcePropertyQueryWrapper.orderByAsc("id") ;
        List<DivorceProperty> divorcePropertyList = divorcePropertyMapper.selectList(divorcePropertyQueryWrapper) ;
        if(CollectionUtils.isNotEmpty(divorcePropertyList)){
            divorce.setDivorcePropertyList(divorcePropertyList);
        }
        return AjaxJson.getSuccessData(divorce);
    }

}


