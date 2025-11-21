package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.dao.sys_.FinancialLeaseComplaintDao;
import com.jsdc.petition.sys_.FinancialLeaseComplaint;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

/**
 * 民事起诉状（融资租赁合同纠纷）
 */
@Mapper
public interface FinancialLeaseComplaintMapper extends BaseMapper<FinancialLeaseComplaint> {

    @SelectProvider(type = FinancialLeaseComplaintDao.class, method = "getEntityList")
    Page<FinancialLeaseComplaint> getEntityList(Page page, FinancialLeaseComplaint bean);
}
