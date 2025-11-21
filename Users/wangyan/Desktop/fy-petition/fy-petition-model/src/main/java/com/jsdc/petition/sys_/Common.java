package com.jsdc.petition.sys_;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

//通用诉讼列表
@Data
@Entity(name = "common")
@TableName("common")
public class Common extends Model<Common> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // 诉讼主表id
    private Integer lawsuit_id;


    //诉讼类型
    // 保证保险合同纠纷 0
    //机动车交通事故责任纠纷 1
    //金融借款合同纠纷 2
    //劳动争议纠纷 3
    //离婚纠纷起诉状 4
    //买卖合同纠纷 5
    //民间借贷纠纷 6
    //融资租赁合同纠纷 7
    //物业服务合同纠纷 8
    //银行信用卡纠纷 9
    private Integer type;

    //原告（法人、非法人组织）名称
    private String plaintiff_s_name;//原告名称

    //原告（自然人）名称
    private String plaintiff_p_name;//原告姓名

    //被告（法人、非法人组织）名称
    private String defendant_c_name;//被告名称

    //被告（自然人）名称
    private String defendant_p_name;//被告姓名


    //第三人（法人、非法人组织）名称
    private String third_c_name;//第三人名称

    //第三人（自然人）名称
    private String third_p_name;

    private Date create_time;      //创建时间


    @Transient
    @TableField(exist = false)
    private String start_time ;

    @Transient
    @TableField(exist = false)
    private String end_time ;

    
}
