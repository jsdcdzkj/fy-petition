package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.dao.sys_.FinancialLoanDao;
import com.jsdc.petition.sys_.FinancialLoan;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface FinancialLoanMapper extends BaseMapper<FinancialLoan> {

    @SelectProvider(type = FinancialLoanDao.class, method = "getEntityList")
    Page<FinancialLoan> getEntityList(Page page, FinancialLoan bean);
}
