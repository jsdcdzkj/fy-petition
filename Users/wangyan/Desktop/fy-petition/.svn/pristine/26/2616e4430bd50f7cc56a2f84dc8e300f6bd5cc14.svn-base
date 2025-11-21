package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.dao.sys_.LabourDao;
import com.jsdc.petition.sys_.Labour;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface LabourMapper extends BaseMapper<Labour> {

    @SelectProvider(type = LabourDao.class, method = "getEntityList")
    Page<Labour> getEntityList(Page page, Labour bean);
}
