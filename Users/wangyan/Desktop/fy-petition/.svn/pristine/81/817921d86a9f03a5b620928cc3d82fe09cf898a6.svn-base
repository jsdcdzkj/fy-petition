package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.dao.sys_.DivorceSonDao;
import com.jsdc.petition.sys_.DivorceSon;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface DivorceSonMapper extends BaseMapper<DivorceSon> {

    @SelectProvider(type = DivorceSonDao.class, method = "getEntityList")
    Page<DivorceSon> getEntityList(Page page, DivorceSon bean);
}
