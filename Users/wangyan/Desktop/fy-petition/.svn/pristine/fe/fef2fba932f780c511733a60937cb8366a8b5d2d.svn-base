package com.jsdc.petition.sys_;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import sun.management.resources.agent;

import javax.persistence.*;
import java.util.Date;

//保证保险合同纠纷
@Data
@Entity(name = "insurance_dispute")
@TableName("insurance_dispute")
public class InsuranceDispute extends Model<InsuranceDispute> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //原告（法人、非法人组织）信息
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
    private String plaintiff_type;//类型 0有限责任公司 1股份有限公司 2上市公司3其他企业法人4事业单位5社会团体6基金会7社会服务机构8机关法人9农村集体经济组织法人10城镇农村的合作经济组织法人11基层群众性自治组织法人12个人独资企业13合伙企业14不具有法人资格的专业服务机构15国有控股16国有参股17民营

    //委托诉讼代理人信息
    @Column(length = 2)
    private String is_agent;//是否有委托诉讼代理人  0否1是
    @Column(length = 20)
    private String agent_name;//姓名
    @Column(length = 30)
    private String agent_unit;//单位
    @Column(length = 20)
    private String agent_job;//职务
    @Column(length = 20)
    private String agent_phone;//联系电话
    @Column(length = 2)
    private String agency_authority;//代理权限 0一般授权 1特殊授权

    //送达地址（所填信息除书面特别声明更改外，适用于案件一审、二审、再审所有后续程序）及收件人、联系电
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
    @Column(length = 20)
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
    @Column(length = 30)
    private String defendant_unified_code;//统一社会信息代码
    @Column(length = 20)
    private String c_type;//类型

    //被告（自然人）信息
    @Column(length = 20)
    private String defendant_p_name;//被告姓名
    @Column(length = 20)
    private String defendant_p_card;//身份证号
    @Column(length = 20)
    private String is_unable_provide; // 无法提供 是否勾选 0无法提供 1提供
    @Column(length = 2)
    private String defendant_p_sex;//性别 0男 1女
    @Column(length = 20)
    private String defendant_p_nation;//民族

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date defendant_birth;//出生日期
    @Column(length = 50)
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


    //理赔款
    @Column(length = 20)
    private String settlement_of_claims;//理赔款

    private String claims_currency;//币种 0人民币 1外币
    private String claims_currency_name;//外币名称



    //保费、违约金
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date deadline_date;//截至日期
    @Column(length = 20)
    private String liquidated_damages;//违约金
    private String start_time;//开始时间
    private String premium_currency;//币种 0人民币 1外币
    private String premium_currency_name;//外币名称
    private String premium_detail;//明细


    //主张实现债权的费用信息
    private String is_creditor_money;//是否有债券 0否1是
    private String creditor_detail;//明细

    //4.其他请求信息
    private String other_requests;//其他请求



    //标的总额
    private String gross_subject_matter;//标的总额
    private String subject_currency;//标的总额 币种 0人民币 1外币
    private String currency_type;//外币名称



    //请求依据信息
    private String contract_agreement;//合同约定
    private String legal_provisions;//法律规定



    //仲裁、法院管辖约定信息
    private String is_convention_infor;//是否有仲裁、法院管辖约定信息    0否1是
    private String contract_clause;//合同条款及内容


    //申请财产保全措施信息
    private String is_before_litigation;//是否已经诉前保全 0否1是
    private String court_preservation;//保全法院
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date security_time;//保全时间
    private String is_in_litigation;//是否申请诉讼保全  0否1是


    //保证保险合同的签订情况（合同名称、主体、签订时间、地点、银行等）
    private String contract_detail;//内容



    //保证保险合同的主要约定信息
    private String insurance_amount; // 保证保险金额
    private String insurance_amount_type; //类型 0人民币 1外币
    private String insurance_amount_type_name; //外币名称

    private String premium; // 保费金额
    private String premium_type; // 类型 0人民币 1外币
    private String premium_type_name; // 外币名称

    private String payment_method; // 保险费缴纳方式

    private String claim_conditions; // 理赔条件

    private String insurance_period; // 保险期间

    private String claims_premiums_pursuit; // 理赔款项和未付保费的追索

    private String breach_duty_responsibility; // 违约事由及违约责任

    private String special_agreement; // 特别约定

    private String other; // 其他


    // 对被告就保证保险合同主要条款进行提示注意、说明
    private String is_look_out; //是否有对被告就保证保险合同主要条款进行提示注意、说明 0否1是
    private String notice_details;//提示说明的具体方式以及时间地点

    // 被告借款合同的主要约定
    private String loan_contract_content;//内容



    //被告逾期未还款情况
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date defendant_start_time;//开始时间
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date defendant_end_time;//结束时间
    private String repaid;//已还款
    private String overdue_repaid;//逾期但已还款
    private String total_principal_money;//逾期但已还款
    private String interest;//利息
    private String overdue_payment_s_time;//逾期不还 开始时间
    private String overdue_payment_e_time;//逾期不还 结束时间
    private String loan_principal;//被告欠付借款本金
    private String overdue_payment_interest;//逾期利息
    private String interest_penalty;//罚息
    private String compound_interest;//复利
    private String fine_overdue_payment;//滞纳金
    private String overdue_damages;//违约金
    private String handling_charge;//手续费
    private String detail;//明细
    private String money_type;//0人民币 1外币
    private String money_type_name;//外币名称



    //保证保险合同的履行情况
    private String plaintiff_s_time;//理赔理赔时间
    private String amount_of_indemnity;//赔款金额
    private String assignment_time;//权益转让确认书时间
    private String performance_type;//0人民币 1外币
    private String performance_type_name;//外币名称


    //追索情况
    private String press_payment_time;//追索时间
    private String defendant_paid_premium;//被告已支付保费
    private String repay_a_loan;//归还借款
    private String outstanding_premium;//尚欠保费
    private String de_pri_loan;//欠付借款本金
    private String defendant_interest;//利息
    private String defendant_in_penalty;//罚息
    private String defendant_com_interest;//复利
    private String defendant_payment;//滞纳金
    private String defendant_li_damages;//违约金
    private String defendant_han_charge;//违约金
    private String defendant_type;//0人民币 1外币
    private String defendant_type_name;//外币名称
    private String defendant_detail;//明细

    //其他需要说明的内容（可另附页）
    private String other_content;


    //9.证据清单（可另附页）
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
