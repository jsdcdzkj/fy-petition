package com.jsdc.petition.mapper.sys_;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.jsdc.petition.dao.sys_.MotorVehicleDao;
import com.jsdc.petition.sys_.MotorVehicle;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

@Mapper
public interface MotorVehicleMapper extends BaseMapper<MotorVehicle> {

    @SelectProvider(type = MotorVehicleDao.class, method = "getEntityList")
    Page<MotorVehicle> getEntityList(Page page, MotorVehicle bean);
}
