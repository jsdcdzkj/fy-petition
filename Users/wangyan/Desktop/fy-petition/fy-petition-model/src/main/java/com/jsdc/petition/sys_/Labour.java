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

//劳动争议纠纷
@Data
@Entity(name = "labour")
@TableName("labour")
public class Labour extends Model<Labour> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //原告（自然人）信息
    private String plaintiff_p_name;//原告姓名
    private String plaintiff_p_card;//身份证号
    private String plaintiff_p_sex;//性别 0男1女
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




    //被告（法人、非法人组织）信息
    private String defendant_c_name;//被告名称
    private String defendant_c_domicile;//被告所住地
    private String domicile_of_defendant;//被告注册地/登记地
    private String defendant_legal_r;//法定代表人/主要负责人
    private String defendant_job;//职务
    private String defendant_phone;//联系电话
    private String defendant_unified_code;//统一社会信息代码
    private String c_type;//类型


    //是否主张工资支付
    private String wage_payment;//0否1是
    private String wage_detail;//明细

    //是否主张未签订书面劳动合同双倍工资
    private String double_pay;//0否1是
    private String double_detail;//明细

    //是否主张加班费
    private String overtime_pay;//0否1是
    private String overtime_detail;//明细

    //是否主张未休年休假工资
    private String leave_pay;//0否1是
    private String leave_detail;//明细

    //是否主张未依法缴纳社会保险费造成的经济损失
    private String economic_loss;//0否1是
    private String economic_deatil;//明细

    //是否主张解除劳动合同经济补偿
    private String release_work;//0否1是
    private String release_detail;//明细


    //是否主张违法解除劳动合同赔偿金
    private String break_law;//0否1是
    private String break_detail;//明细

    //其他请求
    private String other_requests;

    //金额及具体主张
    private String cost_bearing;


    //申请财产保全措施信息
    private String is_before_litigation;//是否已经诉前保全 0否1是
    private String court_preservation;//保全法院
    private String instrument_preservation;//保全文书


    //劳动合同合同的签订情况（合同主体、签订时间、地点、合同名称等）
    private String concludeAndSign;//劳动合同合同的签订情况（合同主体、签订时间、地点、合同名称等）

    //劳动合同合同的履行情况（入职时间、用人单位、工作岗位、工作地点、合同约定的每月工资数额及工资构成、办理社会保险的时间及险种、劳动者实际领取的每月工资数额及工资构成、加班工资计算基数及计算方法、原告加班时间及加班费、年休假等）
    private String performance;

    //解除或终止劳动关系情况（解除或终止劳动关系的原因、经济补偿/赔偿金数额等）
    private String termination_employment;

    //工伤情况（发生工伤时间、工伤认定情况、工伤伤残等级、工伤费用等）
    private String occupational_injury;

    //劳动仲裁相关情况（申请劳动仲裁时间、仲裁请求、仲裁文书、仲裁结果等）
    private String labor_arbitration;


    //其他相关情况（如是否农民工）
    private String other_relevant_info;

    //诉请依据（法律及司法解释的规定，要写明具体条文）
    private String basis_of_claim;

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
