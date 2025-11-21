package com.jsdc.petition.service.sys_;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.mapper.sys_.CommonMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.Common;
import com.jsdc.petition.sys_.CommonVo;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class CommonService extends BaseService<Common> {

    @Autowired
    private CommonMapper commonMapper;

    /**
     * 分页查询 todo
     *
     * @return
     */
    public Page<Common> getPageList(CommonVo vo) {
        return commonMapper.getEntityList(new Page<>(vo.getPageNo(), vo.getPageSize()),vo);

    }

    /**
     * 查询 todo
     *
     * @return
     */
    public List<Common> getList(Common entity) {
        QueryWrapper<Common> queryWrapper = new QueryWrapper<>();
        return commonMapper.selectList(queryWrapper);
    }

    /**
     * 添加/编辑 todo
     *
     * @param bean
     * @return
     */
    public AjaxJson saveOrUpdateCommon(Common bean) {
        if(null != bean.getLawsuit_id()) {
            QueryWrapper<Common> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("lawsuit_id", bean.getLawsuit_id()) ;
            queryWrapper.eq("type", bean.getType()) ;
            commonMapper.delete(queryWrapper);
        }

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


