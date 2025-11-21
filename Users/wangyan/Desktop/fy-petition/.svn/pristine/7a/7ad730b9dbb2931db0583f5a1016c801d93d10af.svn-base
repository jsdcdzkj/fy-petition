package com.jsdc.petition.sys_;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;


@Data
@Entity(name = "sys_file")
@TableName("sys_file")
public class SysFile extends Model<SysFile> {
    @TableId
    @Id
    private String id;//主键ID
    private String fileName;//文件名称
    private String contentType;//文件类型
    private String fileType;//文件分类  1：图片 2：文件
    private String fileSize;//文件大小
    private String fileUrl;//文件地址
    private String uploadTime;//上传时间
    private String bizType;//业务类型  1.应用图标
    private String bizId;//业务数据ID
    private String fileMd5;//fastDfs 文件md5 用于删除查看等操作
}