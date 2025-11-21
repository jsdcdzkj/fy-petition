package com.jsdc.petition.sys_;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

//机动车交通事故责任纠纷
@Data
@Entity(name = "motor_vehicle")
@TableName("motor_vehicle")
public class MotorVehicle extends Model<MotorVehicle> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;




    //原告（自然人）信息
    @Column(length = 20)
    private String plaintiff_p_name;//被告姓名
    @Column(length = 30)
    private String plaintiff_p_card;//身份证号
    @Column(length = 2)
    private String plaintiff_p_sex;//性别 0男1女
    @Column(length = 20)
    private String plaintiff_p_nation;//民族
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date date_of_birth;//出生日期
    @Column(length = 50)
    private String plaintiff_p_work_unit;//工作单位
    @Column(length = 20)
    private String plaintiff_p_job;//职务
    @Column(length = 20)
    private String plaintiff_p_phone;//联系电话
    @Column(length = 50)
    private String plaintiff_p_domicile;//所住地
    @Column(length = 50)
    private String plaintiff_p_residence;//经常居住地



    //--原告
    @Column(length = 20)
    private String plaintiff_s_name;//原告名称
    @Column(length = 50)
    private String plaintiff_s_domicile;//原告所住地
    @Column(length = 50)
    private String domicile_of_plaintiff;//原告注册地/登记地
    @Column(length = 20)
    private String plaintiff_legal_r;//法定代表人
    @Column(length = 20)
    private String plaintiff_job;//职务
    @Column(length = 20)
    private String plaintiff_phone;//联系电话
    @Column(length = 30)
    private String plaintiff_unified_code;//统一社会信息代码
    @Column(length = 20)
    private String plaintiff_type;//统类型



    //委托诉讼代理人信息
    @Column(length = 2)
    private String is_agent;//是否有委托诉讼代理人  0否1是
    @Column(length = 20)
    private String agent_name;//姓名
    @Column(length = 20)
    private String agent_unit;//单位
    @Column(length = 20)
    private String agent_job;//职务
    @Column(length = 20)
    private String agent_phone;//联系电话
    @Column(length = 2)
    private String agency_authority;//代理权限 0一般授权 1特殊授权



    @Column(length = 50)
    private String party_address;//地址
    @Column(length = 20)
    private String party_addressee;//收件人
    @Column(length = 20)
    private String party_phone;//电话

    //接受电子送达信息
    @Column(length = 2)
    private String is_electronic_delivery;//是否接收电子送达 0否1是
    @Column(length = 2)
    private String way_type;//0短信 1微信 2传真 3邮箱 4其他
    @Column(length = 30)
    private String way_info;//电子送达信息




    //被告（法人、非法人组织）信息
    @Column(length = 20)
    private String defendant_c_name;//被告名称
    @Column(length = 50)
    private String defendant_c_domicile;//被告所住地
    @Column(length = 50)
    private String domicile_of_defendant;//被告注册地/登记地
    @Column(length = 20)
    private String defendant_legal_r;//法定代表人/主要负责人
    @Column(length = 20)
    private String defendant_job;//职务
    @Column(length = 20)
    private String defendant_phone;//联系电话
    @Column(length = 20)
    private String defendant_unified_code;//统一社会信息代码
    @Column(length = 2)
    private String c_type;//类型 0有限责任公司 1股份有限公司 2上市公司3其他企业法人4事业单位5社会团体6基金会7社会服务机构8机关法人9农村集体经济组织法人10城镇农村的合作经济组织法人11基层群众性自治组织法人12个人独资企业13合伙企业14不具有法人资格的专业服务机构15国有控股16国有参股17民营




    //被告（自然人）信息
    @Column(length = 20)
    private String defendant_p_name;//被告姓名
    @Column(length = 30)
    private String defendant_p_card;//身份证号
    @Column(length = 20)
    private String is_unable_provide; // 无法提供 是否勾选 0无法提供 1提供
    @Column(length = 2)
    private String defendant_p_sex;//性别
    @Column(length = 20)
    private String defendant_p_nation;//民族
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date defendant_birth;//出生日期
    @Column(length = 20)
    private String defendant_p_work_unit;//工作单位
    @Column(length = 20)
    private String defendant_p_job;//职务
    @Column(length = 20)
    private String defendant_p_phone;//联系电话
    @Column(length = 50)
    private String defendant_p_domicile;//所住地
    @Column(length = 50)
    private String defendant_p_residence;//经常居住地

    //第三人（法人、非法人组织）信息
    @Column(length = 20)
    private String third_c_name;//第三人名称
    @Column(length = 20)
    private String third_c_domicile;//第三人所住地
    @Column(length = 20)
    private String third_c_address;//第三人注册地/登记地
    @Column(length = 20)
    private String third_c_r;//法定代表人/主要负责人
    @Column(length = 20)
    private String third_c_job;//职务
    @Column(length = 20)
    private String third_c_phone;//联系电话
    @Column(length = 30)
    private String third_c_unified_code;//统一社会信息代码
    @Column(length = 20)
    private String third_c_type;//类型

    //第三人（自然人）信息
    @Column(length = 20)
    private String third_p_name;//被告姓名
    @Column(length = 20)
    private String third_p_card;//身份证号
    @Column(length = 20)
    private String third_unable_provide; // 无法提供 是否勾选 0无法提供 1提供
    @Column(length = 2)
    private String third_p_sex;//性别 0男1女
    @Column(length = 20)
    private String third_p_nation;//民族
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date third_date_of_birth;//出生日期
    @Column(length = 50)
    private String third_p_work_unit;//工作单位
    @Column(length = 20)
    private String third_p_job;//职务
    @Column(length = 20)
    private String third_p_phone;//联系电话
    @Column(length = 50)
    private String third_p_domicile;//所住地
    @Column(length = 50)
    private String third_p_residence;//经常居住地




    //医疗费
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date medical_start;//开始时间
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date medical_end;//开始时间
    private String org_name;//医院住院（门诊
    private String medical_fee;//医疗费
    private String medical_type;//币种 0人民币 1外币
    private String medical_type_name;//外币名称
    private String is_invoice;//是否有医疗费发票、医疗费清单、病例资料

    //护理费
    private String nurse_day;//护理天数
    private String nurse_fee;//护理费
    private String nurse_work_fee;//护理人员发生误工费
    private String short_nurse_fee;//遵医嘱短期护理发生护理费
    private String nurse_type;//币种 0人民币 1外币
    private String nurse_type_name;//外币名称
    private String is_hospital;//是否有住院证明、医嘱等 0否1是


    //营养费
    private String nutrition_fee;//营养费
    private String nutrition_type;//币种 0人民币 1外币
    private String nutrition_type_name;//外币名称
    private String is_medical_history;//是否有病历资料 0否1是

    //住院伙食补助费
    private String hospital_food_allowance;
    private String hospital_type;//币种 0人民币 1外币
    private String hospital_type_name;//外币名称
    private String is_h_medical_history;//是否有病历资料 0否1是

    //误工费
    private String work_start;//误工开始时间
    private String work_end;//误工结束时间
    private String work_fee;//误工费
    private String work_type;//币种 0人民币 1外币
    private String work_type_name;//外币名称

    //交通费
    private String transportation_expense;//交通费
    private String transportation_type;//币种 0人民币 1外币
    private String transportation_type_name;//外币名称
    private String is_travel_voucher;//是否有交通费凭证 0否1是

    //残疾赔偿金
    private String disability_compensation;//残疾赔偿金
    private String disability_type;//币种 0人民币 1外币
    private String disability_type_name;//外币名称

    //残疾辅助器具费
    private String subsidiary_fee;//残疾辅助器具费
    private String subsidiary_type;//币种 0人民币 1外币
    private String subsidiary_type_name;//外币名称


    //死亡赔偿金、丧葬费
    private String death_fee;//死亡赔偿金、
    private String funeral_expenses;//丧葬费、
    private String death_type;//币种 0人民币 1外币
    private String death_type_name;//外币名称


    //精神损害赔偿金
    private String moral_damages;//精神损害赔偿金、
    private String moral_type;//币种 0人民币 1外币
    private String moral_type_name;//外币名称

    //其他费用
    private String other_fee;//其他费用、
    private String other_type;//币种 0人民币 1外币
    private String other_type_name;//外币名称

    //交通事故发生情况
    private String occurrence;

    //责任认定
    private String ident_of_res;

    //机动车投保情况
    private String motor_veh_insurance;

    //其他情况及法律依据
    private String other_circumstances;

    //证据清单（可另附页）
    private String evidence_list;




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


}
