package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.dao.sys_.PropertyComplaintDao;
import com.jsdc.petition.sys_.PropertyComplaint;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

/**
 * 民事起诉状（物业服务合同纠纷）
 */
@Mapper
public interface PropertyComplaintMapper extends BaseMapper<PropertyComplaint> {

    @SelectProvider(type = PropertyComplaintDao.class, method = "getEntityList")
    Page<PropertyComplaint> getEntityList(Page page, PropertyComplaint bean);
}
