package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.dao.sys_.CommonDao;
import com.jsdc.petition.sys_.Common;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface CommonMapper extends BaseMapper<Common> {

    @SelectProvider(type = CommonDao.class, method = "getEntityList")
    Page<Common> getEntityList(Page page, Common bean);
}
