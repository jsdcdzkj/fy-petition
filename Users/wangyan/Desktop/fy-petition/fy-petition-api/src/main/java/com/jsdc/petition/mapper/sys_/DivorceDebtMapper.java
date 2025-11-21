package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.dao.sys_.DivorceDebtDao;
import com.jsdc.petition.sys_.DivorceDebt;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface DivorceDebtMapper extends BaseMapper<DivorceDebt> {

    @SelectProvider(type = DivorceDebtDao.class, method = "getEntityList")
    Page<DivorceDebt> getEntityList(Page page, DivorceDebt bean);
}
