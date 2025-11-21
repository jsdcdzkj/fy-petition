package com.jsdc.petition.sys_;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity(name = "sys_user")
@TableName("sys_user")
public class SysUser extends Model<SysUser> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;//登录账号
    private String card_no;//身份证号
    private String password;//登陆密码
    private String name;//姓名
    private String telephone;//电话
    private String user_type;//账号类型 1:行政管理单位 2:医疗机构 3:零售药店4 开发商
    private String org_code;//所属机构
    private String org_name;//所属机构
    private String dept_id;//部门
    private String status;//状态 0启用1禁用
    @Transient
    @TableField(exist = false)
    private String tempPass;//旧密码

    @Transient
    @TableField(exist = false)
    private Integer[] roleIds;


    @Transient
    @TableField(exist = false)
    private Integer pageNo ;

    @Transient
    @TableField(exist = false)
    private Integer pageSize ;
    private Integer create_user;      //创建人
    private Date create_time;      //创建时间
    private Integer update_user;      //创建用户
    private Date update_time;      //创建时间
    private String is_del;          //删除标志

    @Transient
    @TableField(exist = false)
    private String pass ;

    @Transient
    @TableField(exist = false)
    private String loginName ;
}
