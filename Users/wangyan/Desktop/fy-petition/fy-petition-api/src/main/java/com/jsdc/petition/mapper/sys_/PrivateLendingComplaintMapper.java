package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.dao.sys_.PrivateLendingComplaintDao;
import com.jsdc.petition.sys_.PrivateLendingComplaint;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

/**
 * 民事起诉状（民间借贷纠纷）
 */
@Mapper
public interface PrivateLendingComplaintMapper extends BaseMapper<PrivateLendingComplaint> {

    @SelectProvider(type = PrivateLendingComplaintDao.class, method = "getEntityList")
    Page<PrivateLendingComplaint> getEntityList(Page page, PrivateLendingComplaint bean);
}
