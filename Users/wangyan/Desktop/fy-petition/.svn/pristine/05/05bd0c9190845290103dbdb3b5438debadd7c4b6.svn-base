package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.dao.sys_.DivorceDao;
import com.jsdc.petition.sys_.Divorce;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface DivorceMapper extends BaseMapper<Divorce> {

    @SelectProvider(type = DivorceDao.class, method = "getEntityList")
    Page<Divorce> getEntityList(Page page, Divorce bean);
}
