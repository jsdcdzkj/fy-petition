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

//金融借款合同纠纷
@Data
@Entity(name = "financialloan")
@TableName("financialloan")
public class FinancialLoan extends Model<FinancialLoan> {
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


    //原告（法人、非法人组织）信息
    @Column(length = 20)
    private String plaintiff_s_name;//原告名称
    @Column(length = 50)
    private String plaintiff_s_domicile;//原告所住地
    @Column(length = 50)
    private String domicile_of_plaintiff;//原告注册地/登记地
    @Column(length = 10)
    private String plaintiff_legal_r;//法定代表人
    @Column(length = 20)
    private String plaintiff_job;//职务
    @Column(length = 20)
    private String plaintiff_phone;//联系电话
    @Column(length = 30)
    private String plaintiff_unified_code;//统一社会信息代码
    private String plaintiff_type;//类型 0有限责任公司 1股份有限公司 2上市公司3其他企业法人4事业单位5社会团体6基金会7社会服务机构8机关法人9农村集体经济组织法人10城镇农村的合作经济组织法人11基层群众性自治组织法人12个人独资企业13合伙企业14不具有法人资格的专业服务机构15国有控股16国有参股17民营



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
    private String c_type;//类型

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
    @Column(length = 50)
    private String third_c_domicile;//第三人所住地
    @Column(length = 50)
    private String third_c_address;//第三人注册地/登记地
    @Column(length = 20)
    private String third_c_r;//法定代表人/主要负责人
    @Column(length = 20)
    private String third_c_job;//职务
    @Column(length = 20)
    private String third_c_phone;//联系电话
    @Column(length = 20)
    private String third_c_unified_code;//统一社会信息代码
    @Column(length = 20)
    private String third_c_type;//类型


    //第三人（自然人）信息
    @Column(length = 20)
    private String third_p_name;//被告姓名
    @Column(length = 30)
    private String third_p_card;//身份证号
    @Column(length = 2)
    private String third_unable_provide; // 无法提供 是否勾选 0无法提供 1提供
    @Column(length = 2)
    private String third_p_sex;//性别
    private String third_p_nation;//民族
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date third_date_of_birth;//出生日期
    private String third_p_work_unit;//工作单位
    private String third_p_job;//职务
    private String third_p_phone;//联系电话A
    private String third_p_domicile;//所住地
    private String third_p_residence;//经常居住地


    //本金
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date start_time;//截止日期
    private String principal;//尚欠本金
    private String principal_currency;//币种 0人民币 1外币
    private String principal_currency_name;//外币名称

    //利息
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date interest_start;//截止日期
    private String interest_fee;//欠利息
    private String compound_interest;//复利
    private String liquidated_damages;//罚息（违约金）
    private String calculation_mode;//计算方式
    private String interest_currency;//币种 0人民币 1外币
    private String interest_currency_name;//外币名称
    private String is_pay;//是否请求支付至实际清偿之日止 0否1是


    //主张担保权利信息
    private String is_guarantee;// 0否1是
    private String guarantee_content;// 0否1是



    //主张实现债权的费用信息
    private String is_creditor_money;//是否有债券 0否1是
    private String creditor_detail;//明细

    //4.其他请求信息
    private String other_requests;//其他请求



    //标的总额
    private String gross_subject_matter;//标的总额
    private String subject_currency;//标的总额 币种 0人民币 1外币
    private String subject_currency_name;//外币名称



    //请求依据信息
    private String contract_agreement;//合同约定
    private String legal_provisions;//法律规定



    //仲裁、法院管辖约定信息
    private String is_convention_info;//是否有仲裁、法院管辖约定信息
    private String terms_contract;//合同条款及内容


    //申请财产保全措施信息
    private String is_before_litigation;//是否已经诉前保全 0否1是
    private String court_preservation;//保全法院
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date security_time;//保全时间
    private String is_in_litigation;//是否申请诉讼保全  0否1是


    //合同的签订情况（名称、编号、签订时间、地点等
    private String signing_condition;//内容

    //签订主体
    private String lender;//贷款人
    private String borrower;//借款人

    //借款金额
    private String appoint_fee;//约定
    private String actual_fee;//实际发放

    //借款期限
    private String appoint_start;//约定开始时间
    private String appoint_end;//约定结束时间
    private String is_expire;//是否到期 0否1是


    //借款利率
    private String interest_rate;//利率
    private String rate_type;//1 月 2季 3年
    private String rate_count;//合同条款：第几条

    //逾期上浮
    private String overdue_ascent;//逾期上浮
    private String overdue_type;//1 月 2季 3年
    private String overdue_count;//合同条款：第几条


    //复利
    private String money_compound;//复利
    private String money_count;//合同条款：第几条


    //罚息
    private String interest_penalty;//罚息
    private String interest_count;//合同条款：第几条

    //借款发放时间
    private String release_time;//发放时间
    private String disbursement_amount;//发放金额

    //还款方式
    private String repayment_method;//0还款方式 1等额本息等2额本金3到期一次性还本付息4按月计息，到期一次还本5按季计息，到期一次还本6按年计息，到期一次还本7其他
    private String other;//其它还款方式


    //还款情况
    private String repaid_principal;//已还本金
    private String interest_paid;//已还利息
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date repay_interest_time;//还息至

    //是否存在逾期还款
    private String is_overdue_payment;//是否逾期 0否1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date overdue_time;//逾期时间
    private String days_overdue;//逾期天数

    //是否签订物的担保（抵押、质押）合同
    private String guarantee_contract;//是否有担保（抵押、质押）合同  0否1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date guarantee_time;//签订时间


    //担保人、担保物
    private String thing_surety;//担保人
    private String thing_pledged;//担保物


    //是否最高额担保（抵押、质押）
    private String maximum_guarantee;//是否是最高额担保 0否1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date secured_claim;//担保债权的确定时间
    private String line_of_guarantee;//担保额度





    //是否办理抵押、质押登记
    private String is_pledge;//是否抵押
    private String registration_type;//登记类型 0正式登记1预告登记


    //担保人、担保物


    //是否签订保证合同
    private String guaranty_contract;//是否签订保证合同 0否1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date time_of_signing;//签订时间
    private String surety;//保证人
    private String surety_content;//主要内容


    //保证方式信息
    private String guarantee_mode;//保证方式 0一般保证 1连带责任保证

    //其他担保方式
    private String other_guarantees;//是否有其他担保方式 0否1是
    private String time_signing;//签订时间
    private String form;//形式

    //其他需要说明的内容（可另附页）
    private String other_content;


    //9.证据清单（可另附页）
    private String evidence_list;

    //是否要求提前还款或解除合同
    private String prepayment; //是否提前还款 0否1是

    //类型 0提前还款(加速到期) 1解除合同
    private String prepay_type;


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
