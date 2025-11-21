package com.jsdc.petition.service.sys_;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.mapper.sys_.DivorceSonMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.DivorceSon;
import com.jsdc.petition.sys_.DivorceSonVo;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class DivorceSonService extends BaseService<DivorceSon> {

    @Autowired
    private DivorceSonMapper divorceSonMapper;

    /**
     * 分页查询 todo
     *
     * @return
     */
    public Page<DivorceSon> getPageList(DivorceSonVo vo) {
        QueryWrapper<DivorceSon> queryWrapper = new QueryWrapper<>();

        //testMapper.getEntityList(new Page<>(vo.getPageNo(), vo.getPageSize()),vo);
        return divorceSonMapper.selectPage(new Page<>(vo.getPageNo(), vo.getPageSize()), queryWrapper);

    }

    /**
     * 查询 todo
     *
     * @return
     */
    public List<DivorceSon> getList(DivorceSon entity) {
        QueryWrapper<DivorceSon> queryWrapper = new QueryWrapper<>();
        return divorceSonMapper.selectList(queryWrapper);
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    public AjaxJson saveOrUpdateDivorceSon(DivorceSon bean) {
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


