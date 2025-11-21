package com.jsdc.petition.utils.FastDfs;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class FastDfsParams {
    private String uploadPath;
    private MultipartFile file;
    private String bizType;//业务类型 1.应用图标
    private String bizId;//业务数据ID
    private String fileName;//文件名


    public FastDfsParams(String uploadPath, MultipartFile file, String bizType, String bizId) {
        this.uploadPath = uploadPath;
        this.file = file;
        this.bizType = bizType;
        this.bizId = bizId;
    }
}
