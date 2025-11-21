package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.dao.sys_.DivorcePropertyDao;
import com.jsdc.petition.sys_.DivorceProperty;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface DivorcePropertyMapper extends BaseMapper<DivorceProperty> {

    @SelectProvider(type = DivorcePropertyDao.class, method = "getEntityList")
    Page<DivorceProperty> getEntityList(Page page, DivorceProperty bean);
}
