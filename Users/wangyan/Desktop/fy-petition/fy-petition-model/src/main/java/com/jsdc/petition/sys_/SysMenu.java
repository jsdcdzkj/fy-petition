package com.jsdc.petition.sys_;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;


@Data
@Entity(name = "sys_menu")
@TableName("sys_menu")
public class SysMenu extends Model<SysMenu> {
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String parent_id;//父级ID
    private String title;//标题(菜单名称)
    private String router_name;//路由名称
    private String router_url;//路由链接
    private String vue_url;//vue文件路径
    private String redirect_type;//重定向类型
    private String icon;//图标
    private String is_show;//是否在菜单中显示
    private Integer sort;//排序

    private String create_user;      //创建人
    private Date create_time;      //创建时间
    private String update_user;      //创建用户
    private Date update_time;      //创建时间
    private String is_del;          //删除标志
}
