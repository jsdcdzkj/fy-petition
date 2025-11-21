package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.dao.sys_.InsuranceDisputeDao;
import com.jsdc.petition.sys_.InsuranceDispute;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface InsuranceDisputeMapper extends BaseMapper<InsuranceDispute> {

    @SelectProvider(type = InsuranceDisputeDao.class, method = "getEntityList")
    Page<InsuranceDispute> getEntityList(Page page, InsuranceDispute bean);
}
