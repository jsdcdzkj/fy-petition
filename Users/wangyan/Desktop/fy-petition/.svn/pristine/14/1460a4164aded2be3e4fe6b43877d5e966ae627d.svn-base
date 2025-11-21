package com.jsdc.petition.service.sys_;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.mapper.sys_.DivorcePropertyMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.DivorceProperty;
import com.jsdc.petition.sys_.DivorcePropertyVo;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class DivorcePropertyService extends BaseService<DivorceProperty> {

    @Autowired
    private DivorcePropertyMapper divorcePropertyMapper;

    /**
     * 分页查询 todo
     *
     * @return
     */
    public Page<DivorceProperty> getPageList(DivorcePropertyVo vo) {
        QueryWrapper<DivorceProperty> queryWrapper = new QueryWrapper<>();

        //testMapper.getEntityList(new Page<>(vo.getPageNo(), vo.getPageSize()),vo);
        return divorcePropertyMapper.selectPage(new Page<>(vo.getPageNo(), vo.getPageSize()), queryWrapper);

    }

    /**
     * 查询 todo
     *
     * @return
     */
    public List<DivorceProperty> getList(DivorceProperty entity) {
        QueryWrapper<DivorceProperty> queryWrapper = new QueryWrapper<>();
        return divorcePropertyMapper.selectList(queryWrapper);
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    public AjaxJson saveOrUpdateDivorceProperty(DivorceProperty bean) {
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


