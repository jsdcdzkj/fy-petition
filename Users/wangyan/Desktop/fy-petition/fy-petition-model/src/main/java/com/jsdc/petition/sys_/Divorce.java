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
import java.util.List;

//离婚纠纷
@Data
@Entity(name = "divorce")
@TableName("divorce")
public class Divorce extends Model<Divorce> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;



    //原告（自然人）信息
    private String plaintiff_p_name;//被告姓名
    private String plaintiff_p_card;//身份证号
    private String plaintiff_p_sex;//性别
    private String plaintiff_p_nation;//民族
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date date_of_birth;//出生日期
    private String plaintiff_p_work_unit;//工作单位
    private String plaintiff_p_job;//职务
    private String plaintiff_p_phone;//联系电话
    private String plaintiff_p_domicile;//所住地
    private String plaintiff_p_residence;//经常居住地


    //委托诉讼代理人信息
    private String is_agent;//是否有委托诉讼代理人  0否1是
    private String agent_name;//姓名
    private String agent_unit;//单位
    private String agent_job;//职务
    private String agent_phone;//联系电话
    private String agency_authority;//代理权限 0一般授权 1特殊授权


    //送达地址（所填信息除书面特别声明更改外，适用于案件一审、二审、再审所有后续程序）及收件人、联系电
    private String party_address;//地址
    private String party_addressee;//收件人
    private String party_phone;//电话

    //接受电子送达信息
    private String is_electronic_delivery;//是否接收电子送达 0否1是
    private String way_type;//0短信 1微信 2传真 3邮箱 4其他
    private String way_info;//电子送达信息


    //被告（自然人）信息
    private String defendant_p_name;//被告姓名
    private String defendant_p_card;//身份证号
    @Column(length = 20)
    private String is_unable_provide; // 无法提供 是否勾选 0无法提供 1提供
    private String defendant_p_sex;//性别 0男1女
    private String defendant_p_nation;//民族
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date defendant_birth;//出生日期
    private String defendant_p_work_unit;//工作单位
    private String defendant_p_job;//职务
    private String defendant_p_phone;//联系电话
    private String defendant_p_domicile;//所住地
    private String defendant_p_residence;//经常居住地



    //解除婚姻关系
    private String dissolution_marriage;//具体主张


    //有无夫妻共同财产
    private String joint_property;//有无夫妻共同财产 0否1是

    //是否夫妻共同债务
    private String conjugal_debt;//共同债务 0否1是

    //子女直接抚养
    private String child_problem;//是否有此问题 0否1是

    //子女抚养费
    private String child_support;//是否有此问题 0否1是
    private String alimony;//抚养费承担主体 0原告 1被告
    private String money;//金额及明细
    private String pay_type;//支付方式

    //探望权
    private String right_visit;//是否有此问题 0否1是
    private String subject_right;//探望权行使主体 0原告 1被告
    private String mode_exercise;//行使方式

    //离婚损害赔偿／离婚经济补偿／离婚经济帮助
    private String divorce_compensation;//是否有此问题 0否1是
    private String divorce_money;//离婚损害赔偿金额
    private String financial_divorce;//离婚经济补偿
    private String financial_help_ivorce;//离婚经济帮助
    private String financial_type;//币种 0人民币 1外币
    private String currency_type;//外币名称

    //诉讼费用
    private String litigation_cost;//金额明细

    //4.其他请求信息
    private String other_requests;//其他请求


    //仲裁、法院管辖约定信息
    private String convention_info;//是否有仲裁、法院管辖约定信息 0否1是
    private String contract_clause;//合同条款及内容


    //申请财产保全措施信息
    private String is_before_litigation;//是否已经诉前保全 0否1是
    private String court_preservation;//保全法院
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date security_time;//保全时间
    private String is_in_litigation;//是否申请诉讼保全  0否1是



    //婚姻关系基本情况
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date marriage_time;//结婚时间
    private String divorce_roceedings;//之前有无提起过离婚诉讼 0否1是
    private String childbearing_status;//生育子女情况
    private String living_parties;//双方生活情况
    private String grounds_divorce;//离婚事由



    //夫妻共同财产情况
    private String joint_property_detail;//事实和理由

    //夫妻共同债务情况
    private String conjugal_debt_detail;//事实和理由

    //子女直接抚养情况
    private String child_support_detail;//子女直接抚养情况

    private String child_detail;//子女抚养费情况


    //子女探望权情况
    private String child_visit_detail;//子女探望权情况


    //赔偿/补偿/经济帮助相关情况（符合离婚损害赔偿、离婚经济补偿或离婚经济帮助的相关事实等）
    private String compensate_deatil;//内容

    //其他
    private String other;//内容

    //诉请依据（法律及司法解释的规定，要写明具体条文）
    private String basis_claim;//诉请依据

    //证据清单（可另附页）
    private String evidence_list;


    //房屋明细：归属：
    private String house_detail;//0原告 1被告 2其他
    private String house_content;//内容

    //汽车明细：归属：
    private String car;//0原告 1被告 2其他
    private String car_content;//内容


    //存款明细：归属：
    private String money_detail;//0原告 1被告 2其他
    private String money_content;//内容




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
    private List<DivorceSon> divorceSonList ;

    @Transient
    @TableField(exist = false)
    private List<DivorceProperty> divorcePropertyList ;

    @Transient
    @TableField(exist = false)
    private List<DivorceDebt> divorceDebtList ;
}
