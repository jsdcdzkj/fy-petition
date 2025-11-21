package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.dao.sys_.SalesContractComplaintDao;
import com.jsdc.petition.sys_.SalesContractComplaint;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

/**
 * 民事起诉状（买卖合同纠纷）
 */
@Mapper
public interface SalesContractComplaintMapper extends BaseMapper<SalesContractComplaint> {

    @SelectProvider(type = SalesContractComplaintDao.class, method = "getEntityList")
    Page<SalesContractComplaint> getEntityList(Page page, SalesContractComplaint bean);
}
