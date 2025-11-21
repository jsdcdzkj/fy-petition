package com.jsdc.petition.dao.sys_;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.sys_.MotorVehicle;
import org.springframework.stereotype.Repository;

@Repository
public class MotorVehicleDao {


    /**
     * 此方法为默认方法 请添加自己的逻辑代码
     * @param page
     * @param bean
     * @return
     */
    public String getEntityList(Page page, MotorVehicle bean) {
        String sql = " SELECT *  "+
                " FROM motor_vehicle  "+
                " WHERE "+ 
                " 1=1 ";

        return sql;
    }
}
