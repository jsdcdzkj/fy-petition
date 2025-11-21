package com.jsdc.petition.sys_;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

/**
 * 民事起诉状（民间借贷纠纷）
 */
@Entity(name = "private_lending_complaint")
@TableName("private_lending_complaint")
public class PrivateLendingComplaint extends Model<PrivateLendingComplaint> {

    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // 主键ID

    /**
     * 当事人信息
     */

    // 原告信息（自然人）
    @Column(length = 20)
    private String ptName; // 原告姓名
    @Column(length = 20)
    private String ptIdNum; // 身份证号
    @Column(length = 2)
    private String ptGender; // 性别 0男 1女
    @Column(length = 20)
    private String ptNation; // 民族
    @Column(length = 20)
    private String ptBirthDate; // 出生日期
    @Column(length = 20)
    private String ptWorkUnit; // 工作单位
    @Column(length = 20)
    private String ptPos; // 职务
    @Column(length = 20)
    private String ptPhone; // 联系电话
    @Column(length = 20)
    private String ptResidence; // 户籍所在地
    @Column(length = 20)
    private String ptFreqAddr; // 经常居住地

    // 原告信息（法人、非法人组织）
    @Column(length = 20)
    private String pName; // 原告名称
    @Column(length = 20)
    private String pAddr; // 原告地址
    @Column(length = 20)
    private String pRegAddr; // 原告注册地
    @Column(length = 20)
    private String pLegalRep; // 法定代表人
    @Column(length = 20)
    private String pRepPos; // 职务
    @Column(length = 20)
    private String pRepPhone; // 联系电话
    @Column(length = 20)
    private String pCreditCode; // 统一社会信用代码
    @Column(length = 20)
    private String pType; // 类型

    // 委托诉讼代理人信息
    @Column(length = 1)
    private String hasAgent; // 是否有委托诉讼代理人
    @Column(length = 20)
    private String agentName; // 代理人姓名
    @Column(length = 20)
    private String agentOrg; // 代理人单位
    @Column(length = 20)
    private String agentPhone; // 代理人电话
    @Column(length = 20)
    private String agentPos; // 代理人职务
    @Column(length = 20)
    private String agentAuth; // 代理权限 一般授权、特殊授权

    // 送达地址（所填信息除书面特别声明更改外，适用于案件一审、二审、再审所有后续程序）及收件人、联系电话
    @Column(length = 20)
    private String delAddr; // 送达地址
    @Column(length = 20)
    private String delRecipient; // 收件人
    @Column(length = 20)
    private String delPhone; // 收件人电话

    // 接受电子送达信息
    @Column(length = 1)
    private String acceptEleDel; // 是否接受电子送达  0否 1是
    @Column(length = 20)
    private String eleDelMethod; // 电子送达方式 短信、微信、传真、邮箱、其他
    @Column(length = 20)
    private String eleDelInfo; // 电子送达信息

    // 被告信息（法人）
    @Column(length = 20)
    private String dOrgName; // 被告名称
    @Column(length = 20)
    private String dOrgAddr; // 被告地址
    @Column(length = 20)
    private String dOrgRegAddr; // 被告注册地
    @Column(length = 20)
    private String dLegalRep; // 法定代表人
    @Column(length = 20)
    private String dRepPos; // 职务
    @Column(length = 20)
    private String dRepPhone; // 联系电话
    @Column(length = 20)
    private String dCreditCode; // 统一社会信用代码
    @Column(length = 20)
    private String dType; // 类型

    // 被告信息（自然人）
    @Column(length = 20)
    private String dName; // 被告姓名
    @Column(length = 20)
    private String dIdNum; // 身份证号
    @Column(length = 2)
    private String dGender; // 性别 0男 1女
    @Column(length = 20)
    private String dNation; // 民族
    @Column(length = 20)
    private String dBirthString; // 出生日期
    @Column(length = 20)
    private String dWorkUnit; // 工作单位
    @Column(length = 20)
    private String dPos; // 职务
    @Column(length = 20)
    private String dPhone; // 联系电话
    @Column(length = 20)
    private String dResidence; // 户籍所在地
    @Column(length = 20)
    private String dFreqAddr; // 经常居住地
    @Column(length = 20)
    private String dIsUnableProvide; // 无法提供 是否勾选

    // 第三人信息（法人）
    @Column(length = 20)
    private String tpOrgName; // 第三人名称
    @Column(length = 20)
    private String tpOrgAddr; // 第三人地址
    @Column(length = 20)
    private String tpOrgRegAddr; // 第三人注册地
    @Column(length = 20)
    private String tpLegalRep; // 法定代表人
    @Column(length = 20)
    private String tpRepPos; // 职务
    @Column(length = 20)
    private String tpRepPhone; // 联系电话
    @Column(length = 20)
    private String tpCreditCode; // 统一社会信用代码
    @Column(length = 20)
    private String tpType; // 类型

    // 第三人信息（自然人）
    @Column(length = 20)
    private String tpName; // 第三人姓名
    @Column(length = 20)
    private String tpIdNum; // 身份证号
    @Column(length = 2)
    private String tpGender; // 性别 0男 1女
    @Column(length = 20)
    private String tpNation; // 民族
    @Column(length = 20)
    private String tpBirthString; // 出生日期
    @Column(length = 20)
    private String tpWorkUnit; // 工作单位
    @Column(length = 20)
    private String tpPos; // 职务
    @Column(length = 20)
    private String tpPhone; // 联系电话
    @Column(length = 20)
    private String tpResidence; // 户籍所在地
    @Column(length = 20)
    private String tpFreqAddr; // 经常居住地
    @Column(length = 20)
    private String isUnableProvide; // 无法提供 是否勾选

    /**
     * 诉讼请求和依据
     */
    //本金
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date plDeadline; // 截至日期
    @Column(length = 20)
    private String principalAmount; // 尚欠本金
    @Column(length = 20)
    private String currency; // 币种 人民币、外币
    @Column(length = 20)
    private String frgCurrency; // 外币币种

    //利息
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date itDeadline; // 截至日期
    @Column(length = 20)
    private String interestAmount; // 利息金额
    @Column(length = 20)
    private String compoundInterest; // 复利金额
    @Column(length = 20)
    private String penaltyInterest; // 罚息（违约金）金额
    @Column(length = 20)
    private String itCalMethod;// 计算方式
    @Column(length = 1)
    private String itIsReqEnd;// 是否请求支付至实际清偿之日止  0否 1是

    // 是否要求提前还款或解除合同
    @Column(length = 1)
    private String IsEarlyRepay;// 是否要求提前还款或解除合同  0否 1是
    @Column(length = 20)
    private String reWay;// 方式

    // 主张担保权利信息
    @Column(length = 1)
    private String isAdvGuaRights;// 是否主张担保权利
    @Column(length = 1000)
    private String agrContent;// 内容

    // 主张实现债权的费用信息
    @Column(length = 1)
    private String isAdvCostDebt; // 是否主张实现债权的费用   0否 1是
    @Column(length = 1000)
    private String acdDetails; // 明细

    // 其他请求信息
    @Column(length = 1000)
    private String otherReqs; // 其他请求

    // 标的总额
    @Column(length = 20)
    private String subTotalAmount;// 标的总额
    @Column(length = 20)
    private String subCurrency;// 币种
    @Column(length = 20)
    private String subFrgCurrency;// 外币币种

    // 请求依据信息
    @Column(length = 1000)
    private String contractBasis; // 合同约定
    @Column(length = 1000)
    private String legalBasis; // 法律依据

    /**
     * 约定管辖和诉讼保全
     */
    //仲裁、法院管辖约定信息
    @Column(length = 1)
    private String hasArbitration; // 是否有仲裁条款 0否 1是
    @Column(length = 1000)
    private String arbitrationContent; // 合同条款及内容

    //申请财产保全措施信息
    @Column(length = 1)
    private String hasPrePreserve; // 是否已经诉前保全  0否 1是
    @Column(length = 20)
    private String preserveCourt; // 保全法院
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date preserveString; // 保全日期
    @Column(length = 1)
    private String hasLitigationPreserve; // 是否申请诉讼保全  0否 1是

    /**
     * 事实与理由
     */
    // 合同的签订情况（名称、编号、签订时间、地点等）
    @Column(length = 1000)
    private String contractDetails; // 内容

    //签订主体
    @Column(length = 20)
    private String lenderName; // 贷款人名称
    @Column(length = 20)
    private String borrowerName; // 借款人名称

    // 借款金额
    @Column(length = 20)
    private String loanAmountAgreed; // 约定借款金额
    @Column(length = 20)
    private String loanAmountActual; // 实际提供金额
    @Column(length = 20)
    private String loanCurrency;// 币种
    @Column(length = 20)
    private String loanFrgCurrency;// 外币币种

    // 借款期限
    @Column(length = 1)
    private String loanIsDue; // 是否到期
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date loanStartString; // 约定期限 开始日期
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date loanEndString; // 约定期限 结束日期

    // 借款利率
    @Column(length = 20)
    private String isInterestRate; // 利率 是否勾选
    @Column(length = 20)
    private String irTimeType; // 利率 /年/季/月
    @Column(length = 20)
    private String irContractTerms; // 合同条款：第 xx 条

    // 借款提供时间
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date loanProvideString; // 借款提供时间
    @Column(length = 20)
    private String loanProvideAmount; // 借款提供金额
    @Column(length = 20)
    private String lpCurrency;// 币种
    @Column(length = 20)
    private String lpFrgCurrency;// 外币币种

    // 还款方式
    @Column(length = 20)
    private String repayMethod;//还款方式 等额本息、等额本金、到期一次性还本付息、按月计息，到期一次还本、按季计息，到期一次还本、按年计息，到期一次还本、其他
    @Column(length = 20)
    private String otherRepayMethod;// 其他还款方式

    // 还款情况
    @Column(length = 20)
    private String repPrincipal;// 已还本金
    @Column(length = 20)
    private String repInterest; //已还利息
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date repDeadline;//还息截止日期

    // 是否存在逾期还款
    @Column(length = 1)
    private String isOverdue;// 是否逾期
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date overdueTime;//逾期时间
    @Column(length = 20)
    private String overdueDays;//至今已逾期天数

    // 是否签订物的担保（抵押、质押）合同
    @Column(length = 1)
    private String isSignGuaCon;// 是否是  0否 1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date gcSigningTime;// 签订时间

    //担保人、担保物
    @Column(length = 20)
    private String guarantee;// 担保人
    @Column(length = 20)
    private String collateral;// 担保物

    // 是否最高额担保（抵押、质押）
    @Column(length = 1)
    private String isGuarantee;// 是否是
    @Column(length = 20)
    private String geSureTime;// 担保债权的确定时间
    @Column(length = 20)
    private String geLimit;// 担保额度

    // 是否办理抵押、质押登记
    @Column(length = 1)
    private String isMorReg;// 是否是  0否 1是
    @Column(length = 20)
    private String regType;// 登记类型 正式登记、预告登记

    // 是否签订保证合同
    @Column(length = 1)
    private String isSignCon;// 是否有  0否 1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date signingTime;// 签订时间
    @Column(length = 20)
    private String guarantor;// 保证人
    @Column(length = 1000)
    private String snMainContent;// 主要内容

    // 保证方式信息
    @Column(length = 20)
    private String guaranteeMethod;// 保证方式 一般保证、连带责任保证

    // 其他担保方式
    @Column(length = 1)
    private String isOtherGuaMethods;// 是否有  0否 1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date otherSigningTime;// 签订时间
    @Column(length = 20)
    private String ogForm;// 形式

    // 其他需要说明的内容（可另附页）
    @Column(length = 1000)
    private String otherContent;// 内容

    // 证据清单（可另附页）
    @Column(length = 1000)
    private String evidenceListContent;// 内容

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date create_time;      //创建时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date update_time;      //更新时间

    @Column(length = 1)
    private String is_del;          //删除标志

    @Transient
    @TableField(exist = false)
    private Integer pageNo;

    @Transient
    @TableField(exist = false)
    private Integer pageSize;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPtName() {
        return ptName;
    }

    public void setPtName(String ptName) {
        this.ptName = ptName;
    }

    public String getPtIdNum() {
        return ptIdNum;
    }

    public void setPtIdNum(String ptIdNum) {
        this.ptIdNum = ptIdNum;
    }

    public String getPtGender() {
        return ptGender;
    }

    public void setPtGender(String ptGender) {
        this.ptGender = ptGender;
    }

    public String getPtNation() {
        return ptNation;
    }

    public void setPtNation(String ptNation) {
        this.ptNation = ptNation;
    }

    public String getPtBirthDate() {
        return ptBirthDate;
    }

    public void setPtBirthDate(String ptBirthDate) {
        this.ptBirthDate = ptBirthDate;
    }

    public String getPtWorkUnit() {
        return ptWorkUnit;
    }

    public void setPtWorkUnit(String ptWorkUnit) {
        this.ptWorkUnit = ptWorkUnit;
    }

    public String getPtPos() {
        return ptPos;
    }

    public void setPtPos(String ptPos) {
        this.ptPos = ptPos;
    }

    public String getPtPhone() {
        return ptPhone;
    }

    public void setPtPhone(String ptPhone) {
        this.ptPhone = ptPhone;
    }

    public String getPtResidence() {
        return ptResidence;
    }

    public void setPtResidence(String ptResidence) {
        this.ptResidence = ptResidence;
    }

    public String getPtFreqAddr() {
        return ptFreqAddr;
    }

    public void setPtFreqAddr(String ptFreqAddr) {
        this.ptFreqAddr = ptFreqAddr;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public String getpAddr() {
        return pAddr;
    }

    public void setpAddr(String pAddr) {
        this.pAddr = pAddr;
    }

    public String getpRegAddr() {
        return pRegAddr;
    }

    public void setpRegAddr(String pRegAddr) {
        this.pRegAddr = pRegAddr;
    }

    public String getpLegalRep() {
        return pLegalRep;
    }

    public void setpLegalRep(String pLegalRep) {
        this.pLegalRep = pLegalRep;
    }

    public String getpRepPos() {
        return pRepPos;
    }

    public void setpRepPos(String pRepPos) {
        this.pRepPos = pRepPos;
    }

    public String getpRepPhone() {
        return pRepPhone;
    }

    public void setpRepPhone(String pRepPhone) {
        this.pRepPhone = pRepPhone;
    }

    public String getpCreditCode() {
        return pCreditCode;
    }

    public void setpCreditCode(String pCreditCode) {
        this.pCreditCode = pCreditCode;
    }

    public String getpType() {
        return pType;
    }

    public void setpType(String pType) {
        this.pType = pType;
    }

    public String getHasAgent() {
        return hasAgent;
    }

    public void setHasAgent(String hasAgent) {
        this.hasAgent = hasAgent;
    }

    public String getAgentName() {
        return agentName;
    }

    public void setAgentName(String agentName) {
        this.agentName = agentName;
    }

    public String getAgentOrg() {
        return agentOrg;
    }

    public void setAgentOrg(String agentOrg) {
        this.agentOrg = agentOrg;
    }

    public String getAgentPhone() {
        return agentPhone;
    }

    public void setAgentPhone(String agentPhone) {
        this.agentPhone = agentPhone;
    }

    public String getAgentPos() {
        return agentPos;
    }

    public void setAgentPos(String agentPos) {
        this.agentPos = agentPos;
    }

    public String getAgentAuth() {
        return agentAuth;
    }

    public void setAgentAuth(String agentAuth) {
        this.agentAuth = agentAuth;
    }

    public String getDelAddr() {
        return delAddr;
    }

    public void setDelAddr(String delAddr) {
        this.delAddr = delAddr;
    }

    public String getDelRecipient() {
        return delRecipient;
    }

    public void setDelRecipient(String delRecipient) {
        this.delRecipient = delRecipient;
    }

    public String getDelPhone() {
        return delPhone;
    }

    public void setDelPhone(String delPhone) {
        this.delPhone = delPhone;
    }

    public String getAcceptEleDel() {
        return acceptEleDel;
    }

    public void setAcceptEleDel(String acceptEleDel) {
        this.acceptEleDel = acceptEleDel;
    }

    public String getEleDelMethod() {
        return eleDelMethod;
    }

    public void setEleDelMethod(String eleDelMethod) {
        this.eleDelMethod = eleDelMethod;
    }

    public String getEleDelInfo() {
        return eleDelInfo;
    }

    public void setEleDelInfo(String eleDelInfo) {
        this.eleDelInfo = eleDelInfo;
    }

    public String getdOrgName() {
        return dOrgName;
    }

    public void setdOrgName(String dOrgName) {
        this.dOrgName = dOrgName;
    }

    public String getdOrgAddr() {
        return dOrgAddr;
    }

    public void setdOrgAddr(String dOrgAddr) {
        this.dOrgAddr = dOrgAddr;
    }

    public String getdOrgRegAddr() {
        return dOrgRegAddr;
    }

    public void setdOrgRegAddr(String dOrgRegAddr) {
        this.dOrgRegAddr = dOrgRegAddr;
    }

    public String getdLegalRep() {
        return dLegalRep;
    }

    public void setdLegalRep(String dLegalRep) {
        this.dLegalRep = dLegalRep;
    }

    public String getdRepPos() {
        return dRepPos;
    }

    public void setdRepPos(String dRepPos) {
        this.dRepPos = dRepPos;
    }

    public String getdRepPhone() {
        return dRepPhone;
    }

    public void setdRepPhone(String dRepPhone) {
        this.dRepPhone = dRepPhone;
    }

    public String getdCreditCode() {
        return dCreditCode;
    }

    public void setdCreditCode(String dCreditCode) {
        this.dCreditCode = dCreditCode;
    }

    public String getdType() {
        return dType;
    }

    public void setdType(String dType) {
        this.dType = dType;
    }

    public String getdName() {
        return dName;
    }

    public void setdName(String dName) {
        this.dName = dName;
    }

    public String getdIdNum() {
        return dIdNum;
    }

    public void setdIdNum(String dIdNum) {
        this.dIdNum = dIdNum;
    }

    public String getdGender() {
        return dGender;
    }

    public void setdGender(String dGender) {
        this.dGender = dGender;
    }

    public String getdNation() {
        return dNation;
    }

    public void setdNation(String dNation) {
        this.dNation = dNation;
    }

    public String getdBirthString() {
        return dBirthString;
    }

    public void setdBirthString(String dBirthString) {
        this.dBirthString = dBirthString;
    }

    public String getdWorkUnit() {
        return dWorkUnit;
    }

    public void setdWorkUnit(String dWorkUnit) {
        this.dWorkUnit = dWorkUnit;
    }

    public String getdPos() {
        return dPos;
    }

    public void setdPos(String dPos) {
        this.dPos = dPos;
    }

    public String getdPhone() {
        return dPhone;
    }

    public void setdPhone(String dPhone) {
        this.dPhone = dPhone;
    }

    public String getdResidence() {
        return dResidence;
    }

    public void setdResidence(String dResidence) {
        this.dResidence = dResidence;
    }

    public String getdFreqAddr() {
        return dFreqAddr;
    }

    public void setdFreqAddr(String dFreqAddr) {
        this.dFreqAddr = dFreqAddr;
    }

    public String getdIsUnableProvide() {
        return dIsUnableProvide;
    }

    public void setdIsUnableProvide(String dIsUnableProvide) {
        this.dIsUnableProvide = dIsUnableProvide;
    }

    public String getTpOrgName() {
        return tpOrgName;
    }

    public void setTpOrgName(String tpOrgName) {
        this.tpOrgName = tpOrgName;
    }

    public String getTpOrgAddr() {
        return tpOrgAddr;
    }

    public void setTpOrgAddr(String tpOrgAddr) {
        this.tpOrgAddr = tpOrgAddr;
    }

    public String getTpOrgRegAddr() {
        return tpOrgRegAddr;
    }

    public void setTpOrgRegAddr(String tpOrgRegAddr) {
        this.tpOrgRegAddr = tpOrgRegAddr;
    }

    public String getTpLegalRep() {
        return tpLegalRep;
    }

    public void setTpLegalRep(String tpLegalRep) {
        this.tpLegalRep = tpLegalRep;
    }

    public String getTpRepPos() {
        return tpRepPos;
    }

    public void setTpRepPos(String tpRepPos) {
        this.tpRepPos = tpRepPos;
    }

    public String getTpRepPhone() {
        return tpRepPhone;
    }

    public void setTpRepPhone(String tpRepPhone) {
        this.tpRepPhone = tpRepPhone;
    }

    public String getTpCreditCode() {
        return tpCreditCode;
    }

    public void setTpCreditCode(String tpCreditCode) {
        this.tpCreditCode = tpCreditCode;
    }

    public String getTpType() {
        return tpType;
    }

    public void setTpType(String tpType) {
        this.tpType = tpType;
    }

    public String getTpName() {
        return tpName;
    }

    public void setTpName(String tpName) {
        this.tpName = tpName;
    }

    public String getTpIdNum() {
        return tpIdNum;
    }

    public void setTpIdNum(String tpIdNum) {
        this.tpIdNum = tpIdNum;
    }

    public String getTpGender() {
        return tpGender;
    }

    public void setTpGender(String tpGender) {
        this.tpGender = tpGender;
    }

    public String getTpNation() {
        return tpNation;
    }

    public void setTpNation(String tpNation) {
        this.tpNation = tpNation;
    }

    public String getTpBirthString() {
        return tpBirthString;
    }

    public void setTpBirthString(String tpBirthString) {
        this.tpBirthString = tpBirthString;
    }

    public String getTpWorkUnit() {
        return tpWorkUnit;
    }

    public void setTpWorkUnit(String tpWorkUnit) {
        this.tpWorkUnit = tpWorkUnit;
    }

    public String getTpPos() {
        return tpPos;
    }

    public void setTpPos(String tpPos) {
        this.tpPos = tpPos;
    }

    public String getTpPhone() {
        return tpPhone;
    }

    public void setTpPhone(String tpPhone) {
        this.tpPhone = tpPhone;
    }

    public String getTpResidence() {
        return tpResidence;
    }

    public void setTpResidence(String tpResidence) {
        this.tpResidence = tpResidence;
    }

    public String getTpFreqAddr() {
        return tpFreqAddr;
    }

    public void setTpFreqAddr(String tpFreqAddr) {
        this.tpFreqAddr = tpFreqAddr;
    }

    public String getIsUnableProvide() {
        return isUnableProvide;
    }

    public void setIsUnableProvide(String isUnableProvide) {
        this.isUnableProvide = isUnableProvide;
    }

    public Date getPlDeadline() {
        return plDeadline;
    }

    public void setPlDeadline(Date plDeadline) {
        this.plDeadline = plDeadline;
    }

    public String getPrincipalAmount() {
        return principalAmount;
    }

    public void setPrincipalAmount(String principalAmount) {
        this.principalAmount = principalAmount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getFrgCurrency() {
        return frgCurrency;
    }

    public void setFrgCurrency(String frgCurrency) {
        this.frgCurrency = frgCurrency;
    }

    public Date getItDeadline() {
        return itDeadline;
    }

    public void setItDeadline(Date itDeadline) {
        this.itDeadline = itDeadline;
    }

    public String getInterestAmount() {
        return interestAmount;
    }

    public void setInterestAmount(String interestAmount) {
        this.interestAmount = interestAmount;
    }

    public String getCompoundInterest() {
        return compoundInterest;
    }

    public void setCompoundInterest(String compoundInterest) {
        this.compoundInterest = compoundInterest;
    }

    public String getPenaltyInterest() {
        return penaltyInterest;
    }

    public void setPenaltyInterest(String penaltyInterest) {
        this.penaltyInterest = penaltyInterest;
    }

    public String getItCalMethod() {
        return itCalMethod;
    }

    public void setItCalMethod(String itCalMethod) {
        this.itCalMethod = itCalMethod;
    }

    public String getItIsReqEnd() {
        return itIsReqEnd;
    }

    public void setItIsReqEnd(String itIsReqEnd) {
        this.itIsReqEnd = itIsReqEnd;
    }

    public String getIsEarlyRepay() {
        return IsEarlyRepay;
    }

    public void setIsEarlyRepay(String isEarlyRepay) {
        IsEarlyRepay = isEarlyRepay;
    }

    public String getReWay() {
        return reWay;
    }

    public void setReWay(String reWay) {
        this.reWay = reWay;
    }

    public String getIsAdvGuaRights() {
        return isAdvGuaRights;
    }

    public void setIsAdvGuaRights(String isAdvGuaRights) {
        this.isAdvGuaRights = isAdvGuaRights;
    }

    public String getAgrContent() {
        return agrContent;
    }

    public void setAgrContent(String agrContent) {
        this.agrContent = agrContent;
    }

    public String getIsAdvCostDebt() {
        return isAdvCostDebt;
    }

    public void setIsAdvCostDebt(String isAdvCostDebt) {
        this.isAdvCostDebt = isAdvCostDebt;
    }

    public String getAcdDetails() {
        return acdDetails;
    }

    public void setAcdDetails(String acdDetails) {
        this.acdDetails = acdDetails;
    }

    public String getOtherReqs() {
        return otherReqs;
    }

    public void setOtherReqs(String otherReqs) {
        this.otherReqs = otherReqs;
    }

    public String getSubTotalAmount() {
        return subTotalAmount;
    }

    public void setSubTotalAmount(String subTotalAmount) {
        this.subTotalAmount = subTotalAmount;
    }

    public String getSubCurrency() {
        return subCurrency;
    }

    public void setSubCurrency(String subCurrency) {
        this.subCurrency = subCurrency;
    }

    public String getSubFrgCurrency() {
        return subFrgCurrency;
    }

    public void setSubFrgCurrency(String subFrgCurrency) {
        this.subFrgCurrency = subFrgCurrency;
    }

    public String getContractBasis() {
        return contractBasis;
    }

    public void setContractBasis(String contractBasis) {
        this.contractBasis = contractBasis;
    }

    public String getLegalBasis() {
        return legalBasis;
    }

    public void setLegalBasis(String legalBasis) {
        this.legalBasis = legalBasis;
    }

    public String getHasArbitration() {
        return hasArbitration;
    }

    public void setHasArbitration(String hasArbitration) {
        this.hasArbitration = hasArbitration;
    }

    public String getArbitrationContent() {
        return arbitrationContent;
    }

    public void setArbitrationContent(String arbitrationContent) {
        this.arbitrationContent = arbitrationContent;
    }

    public String getHasPrePreserve() {
        return hasPrePreserve;
    }

    public void setHasPrePreserve(String hasPrePreserve) {
        this.hasPrePreserve = hasPrePreserve;
    }

    public String getPreserveCourt() {
        return preserveCourt;
    }

    public void setPreserveCourt(String preserveCourt) {
        this.preserveCourt = preserveCourt;
    }

    public Date getPreserveString() {
        return preserveString;
    }

    public void setPreserveString(Date preserveString) {
        this.preserveString = preserveString;
    }

    public String getHasLitigationPreserve() {
        return hasLitigationPreserve;
    }

    public void setHasLitigationPreserve(String hasLitigationPreserve) {
        this.hasLitigationPreserve = hasLitigationPreserve;
    }

    public String getContractDetails() {
        return contractDetails;
    }

    public void setContractDetails(String contractDetails) {
        this.contractDetails = contractDetails;
    }

    public String getLenderName() {
        return lenderName;
    }

    public void setLenderName(String lenderName) {
        this.lenderName = lenderName;
    }

    public String getBorrowerName() {
        return borrowerName;
    }

    public void setBorrowerName(String borrowerName) {
        this.borrowerName = borrowerName;
    }

    public String getLoanAmountAgreed() {
        return loanAmountAgreed;
    }

    public void setLoanAmountAgreed(String loanAmountAgreed) {
        this.loanAmountAgreed = loanAmountAgreed;
    }

    public String getLoanAmountActual() {
        return loanAmountActual;
    }

    public void setLoanAmountActual(String loanAmountActual) {
        this.loanAmountActual = loanAmountActual;
    }

    public String getLoanCurrency() {
        return loanCurrency;
    }

    public void setLoanCurrency(String loanCurrency) {
        this.loanCurrency = loanCurrency;
    }

    public String getLoanFrgCurrency() {
        return loanFrgCurrency;
    }

    public void setLoanFrgCurrency(String loanFrgCurrency) {
        this.loanFrgCurrency = loanFrgCurrency;
    }

    public String getLoanIsDue() {
        return loanIsDue;
    }

    public void setLoanIsDue(String loanIsDue) {
        this.loanIsDue = loanIsDue;
    }

    public Date getLoanStartString() {
        return loanStartString;
    }

    public void setLoanStartString(Date loanStartString) {
        this.loanStartString = loanStartString;
    }

    public Date getLoanEndString() {
        return loanEndString;
    }

    public void setLoanEndString(Date loanEndString) {
        this.loanEndString = loanEndString;
    }

    public String getIsInterestRate() {
        return isInterestRate;
    }

    public void setIsInterestRate(String isInterestRate) {
        this.isInterestRate = isInterestRate;
    }

    public String getIrTimeType() {
        return irTimeType;
    }

    public void setIrTimeType(String irTimeType) {
        this.irTimeType = irTimeType;
    }

    public String getIrContractTerms() {
        return irContractTerms;
    }

    public void setIrContractTerms(String irContractTerms) {
        this.irContractTerms = irContractTerms;
    }

    public Date getLoanProvideString() {
        return loanProvideString;
    }

    public void setLoanProvideString(Date loanProvideString) {
        this.loanProvideString = loanProvideString;
    }

    public String getLoanProvideAmount() {
        return loanProvideAmount;
    }

    public void setLoanProvideAmount(String loanProvideAmount) {
        this.loanProvideAmount = loanProvideAmount;
    }

    public String getLpCurrency() {
        return lpCurrency;
    }

    public void setLpCurrency(String lpCurrency) {
        this.lpCurrency = lpCurrency;
    }

    public String getLpFrgCurrency() {
        return lpFrgCurrency;
    }

    public void setLpFrgCurrency(String lpFrgCurrency) {
        this.lpFrgCurrency = lpFrgCurrency;
    }

    public String getRepayMethod() {
        return repayMethod;
    }

    public void setRepayMethod(String repayMethod) {
        this.repayMethod = repayMethod;
    }

    public String getOtherRepayMethod() {
        return otherRepayMethod;
    }

    public void setOtherRepayMethod(String otherRepayMethod) {
        this.otherRepayMethod = otherRepayMethod;
    }

    public String getRepPrincipal() {
        return repPrincipal;
    }

    public void setRepPrincipal(String repPrincipal) {
        this.repPrincipal = repPrincipal;
    }

    public String getRepInterest() {
        return repInterest;
    }

    public void setRepInterest(String repInterest) {
        this.repInterest = repInterest;
    }

    public Date getRepDeadline() {
        return repDeadline;
    }

    public void setRepDeadline(Date repDeadline) {
        this.repDeadline = repDeadline;
    }

    public String getIsOverdue() {
        return isOverdue;
    }

    public void setIsOverdue(String isOverdue) {
        this.isOverdue = isOverdue;
    }

    public Date getOverdueTime() {
        return overdueTime;
    }

    public void setOverdueTime(Date overdueTime) {
        this.overdueTime = overdueTime;
    }

    public String getOverdueDays() {
        return overdueDays;
    }

    public void setOverdueDays(String overdueDays) {
        this.overdueDays = overdueDays;
    }

    public String getIsSignGuaCon() {
        return isSignGuaCon;
    }

    public void setIsSignGuaCon(String isSignGuaCon) {
        this.isSignGuaCon = isSignGuaCon;
    }

    public Date getGcSigningTime() {
        return gcSigningTime;
    }

    public void setGcSigningTime(Date gcSigningTime) {
        this.gcSigningTime = gcSigningTime;
    }

    public String getGuarantee() {
        return guarantee;
    }

    public void setGuarantee(String guarantee) {
        this.guarantee = guarantee;
    }

    public String getCollateral() {
        return collateral;
    }

    public void setCollateral(String collateral) {
        this.collateral = collateral;
    }

    public String getIsGuarantee() {
        return isGuarantee;
    }

    public void setIsGuarantee(String isGuarantee) {
        this.isGuarantee = isGuarantee;
    }

    public String getGeSureTime() {
        return geSureTime;
    }

    public void setGeSureTime(String geSureTime) {
        this.geSureTime = geSureTime;
    }

    public String getGeLimit() {
        return geLimit;
    }

    public void setGeLimit(String geLimit) {
        this.geLimit = geLimit;
    }

    public String getIsMorReg() {
        return isMorReg;
    }

    public void setIsMorReg(String isMorReg) {
        this.isMorReg = isMorReg;
    }

    public String getRegType() {
        return regType;
    }

    public void setRegType(String regType) {
        this.regType = regType;
    }

    public String getIsSignCon() {
        return isSignCon;
    }

    public void setIsSignCon(String isSignCon) {
        this.isSignCon = isSignCon;
    }

    public Date getSigningTime() {
        return signingTime;
    }

    public void setSigningTime(Date signingTime) {
        this.signingTime = signingTime;
    }

    public String getGuarantor() {
        return guarantor;
    }

    public void setGuarantor(String guarantor) {
        this.guarantor = guarantor;
    }

    public String getSnMainContent() {
        return snMainContent;
    }

    public void setSnMainContent(String snMainContent) {
        this.snMainContent = snMainContent;
    }

    public String getGuaranteeMethod() {
        return guaranteeMethod;
    }

    public void setGuaranteeMethod(String guaranteeMethod) {
        this.guaranteeMethod = guaranteeMethod;
    }

    public String getIsOtherGuaMethods() {
        return isOtherGuaMethods;
    }

    public void setIsOtherGuaMethods(String isOtherGuaMethods) {
        this.isOtherGuaMethods = isOtherGuaMethods;
    }

    public Date getOtherSigningTime() {
        return otherSigningTime;
    }

    public void setOtherSigningTime(Date otherSigningTime) {
        this.otherSigningTime = otherSigningTime;
    }

    public String getOgForm() {
        return ogForm;
    }

    public void setOgForm(String ogForm) {
        this.ogForm = ogForm;
    }

    public String getOtherContent() {
        return otherContent;
    }

    public void setOtherContent(String otherContent) {
        this.otherContent = otherContent;
    }

    public String getEvidenceListContent() {
        return evidenceListContent;
    }

    public void setEvidenceListContent(String evidenceListContent) {
        this.evidenceListContent = evidenceListContent;
    }

    public Date getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Date create_time) {
        this.create_time = create_time;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Date update_time) {
        this.update_time = update_time;
    }

    public String getIs_del() {
        return is_del;
    }

    public void setIs_del(String is_del) {
        this.is_del = is_del;
    }

    public Integer getPageNo() {
        return pageNo;
    }

    public void setPageNo(Integer pageNo) {
        this.pageNo = pageNo;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}
