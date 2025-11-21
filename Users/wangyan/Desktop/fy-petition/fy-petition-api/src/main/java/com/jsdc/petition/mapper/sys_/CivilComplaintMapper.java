package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.dao.sys_.CivilComplaintDao;
import com.jsdc.petition.sys_.CivilComplaint;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

/**
 * 民事起诉状（银行信用卡纠纷）
 */
@Mapper
public interface CivilComplaintMapper extends BaseMapper<CivilComplaint> {

    @SelectProvider(type = CivilComplaintDao.class, method = "getEntityList")
    Page<CivilComplaint> getEntityList(Page page, CivilComplaint bean);
}
