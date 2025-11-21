package com.jsdc.petition.sys_;

import com.jsdc.petition.sys_.MotorVehicle;
import lombok.Data;

@Data
public class MotorVehicleVo extends MotorVehicle {
    private Integer pageNo = 1;
    private Integer pageSize = 10;
}
