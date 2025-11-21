package com.jsdc.petition.service.sys_;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.mapper.sys_.DivorceDebtMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.DivorceDebt;
import com.jsdc.petition.sys_.DivorceDebtVo;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class DivorceDebtService extends BaseService<DivorceDebt> {

    @Autowired
    private DivorceDebtMapper divorceDebtMapper;

    /**
     * 分页查询 todo
     *
     * @return
     */
    public Page<DivorceDebt> getPageList(DivorceDebtVo vo) {
        QueryWrapper<DivorceDebt> queryWrapper = new QueryWrapper<>();

        //testMapper.getEntityList(new Page<>(vo.getPageNo(), vo.getPageSize()),vo);
        return divorceDebtMapper.selectPage(new Page<>(vo.getPageNo(), vo.getPageSize()), queryWrapper);

    }

    /**
     * 查询 todo
     *
     * @return
     */
    public List<DivorceDebt> getList(DivorceDebt entity) {
        QueryWrapper<DivorceDebt> queryWrapper = new QueryWrapper<>();
        return divorceDebtMapper.selectList(queryWrapper);
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    public AjaxJson saveOrUpdateDivorceDebt(DivorceDebt bean) {
        bean.insertOrUpdate();
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


