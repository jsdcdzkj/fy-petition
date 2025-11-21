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
 * 民事起诉状（银行信用卡纠纷）
 */
@Entity(name = "civil_complaint")
@TableName("civil_complaint")
public class CivilComplaint extends Model<CivilComplaint> {

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
    @Column(length = 50)
    private String ptWorkUnit; // 工作单位
    @Column(length = 50)
    private String ptPos; // 职务
    @Column(length = 20)
    private String ptPhone; // 联系电话
    @Column(length = 50)
    private String ptResidence; // 户籍所在地
    @Column(length = 50)
    private String ptFreqAddr; // 经常居住地

    // 原告信息（法人、非法人组织）
    @Column(length = 20)
    private String pName; // 原告名称
    @Column(length = 50)
    private String pAddress; // 原告所住地
    @Column(length = 50)
    private String pRegAddress; // 原告注册地/登记地
    @Column(length = 20)
    private String pLegalRep; // 法定代表人/主要负责人
    @Column(length = 50)
    private String pLegalRepPos; // 职务
    @Column(length = 20)
    private String pLegalRepPhone; // 联系电话
    @Column(length = 50)
    private String pCreditCode; // 统一社会信息代码
    @Column(length = 20)
    private String pType; // 类型

    // 委托诉讼代理人信息
    @Column(length = 1)
    private String hasAgent; // 是否有委托诉讼代理人 有/无
    @Column(length = 20)
    private String agentName; // 代理人姓名
    @Column(length = 20)
    private String agentOrg; // 代理人单位
    @Column(length = 20)
    private String agentPhone; // 代理人电话
    @Column(length = 20)
    private String agentPos; // 代理人职务
    @Column(length = 20)
    private String agentAuth; // 代理权限 代理权限、一般授权特殊授权

    // 送达地址（所填信息除书面特别声明更改外，适用于案件一审、二审、再审所有后续程序）及收件人、联系电话
    @Column(length = 50)
    private String delAddr; // 送达地址
    @Column(length = 20)
    private String delRecipient; // 收件人
    @Column(length = 20)
    private String delPhone; // 收件人电话

    //接受电子送达信息
    @Column(length = 1)
    private String acceptEleDel; // 是否接受电子送达 0否 1是
    @Column(length = 20)
    private String eleDelMethod; // 电子送达方式
    @Column(length = 50)
    private String eleDelInfo; // 电子送达信息

    // 被告信息（法人）
    @Column(length = 20)
    private String dOrgName; // 被告名称
    @Column(length = 50)
    private String dOrgAddr; // 被告地址
    @Column(length = 50)
    private String dOrgRegAddr; // 被告注册地
    @Column(length = 20)
    private String dLegalRep; // 法定代表人
    @Column(length = 50)
    private String dRepPos; // 职务
    @Column(length = 20)
    private String dRepPhone; // 联系电话
    @Column(length = 50)
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
    private String dBirthDate; // 出生日期
    @Column(length = 50)
    private String dWorkUnit; // 工作单位
    @Column(length = 50)
    private String dPos; // 职务
    @Column(length = 20)
    private String dPhone; // 联系电话
    @Column(length = 50)
    private String dResidence; // 户籍所在地
    @Column(length = 50)
    private String dFreqAddr; // 经常居住地
    @Column(length = 20)
    private String dIsUnableProvide; // 无法提供 是否勾选

    // 第三人信息（法人）
    @Column(length = 20)
    private String tpOrgName; // 第三人名称
    @Column(length = 50)
    private String tpOrgAddr; // 第三人地址
    @Column(length = 50)
    private String tpOrgRegAddr; // 第三人注册地
    @Column(length = 20)
    private String tpLegalRep; // 法定代表人
    @Column(length = 20)
    private String tpRepPos; // 职务
    @Column(length = 20)
    private String tpRepPhone; // 联系电话
    @Column(length = 50)
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
    private String tpBirthDate; // 出生日期
    @Column(length = 50)
    private String tpWorkUnit; // 工作单位
    @Column(length = 20)
    private String tpPos; // 职务
    @Column(length = 20)
    private String tpPhone; // 联系电话
    @Column(length = 50)
    private String tpResidence; // 户籍所在地
    @Column(length = 50)
    private String tpFreqAddr; // 经常居住地
    @Column(length = 20)
    private String isUnableProvide; // 无法提供 是否勾选

    /**
     * 诉讼请求和依据
     */
    //透支本金
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date opEndTime; // 截至 xx 止，
    @Column(length = 20)
    private String outPrincipal; // 尚欠本金 xx 元。
    @Column(length = 20)
    private String overdraftCurr; // 透支本金币种（人民币/外币）
    @Column(length = 20)
    private String opCurrency;// 币种
    @Column(length = 20)
    private String opFrgCurrency;// 外币币种

    // 利息、罚息、复利、滞纳金、违约金、手续费等
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date itEndTime; // 截至 xx 止，
    @Column(length = 20)
    private String itAmount; // 罚息、复利、滞纳金、违约金、手续费等共计 xx 元
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date itAfterTime; // 自 xx 之后的利息、罚息、复利、滞纳金、违约金以及手续费等各项费用按照信用卡领用协议计算至实际清偿之日止
    @Column(length = 500)
    private String itDetails;//明细

    // 主张担保权利信息
    @Column(length = 1)
    private String isAdvGuaRights;// 是否主张担保权利
    @Column(length = 500)
    private String agrContent;// 内容

    //主张实现债权的费用信息
    @Column(length = 1)
    private String isAdvCostDebt; // 是否主张实现债权的费用   0否 1是
    @Column(length = 500)
    private String acdDetails; // 明细

    // 其他请求信息
    @Column(length = 500)
    private String otherReqs;// 其他请求

    // 标的总额
    @Column(length = 20)
    private String subTotalAmount;// 标的总额
    @Column(length = 20)
    private String subCurrency;// 币种
    @Column(length = 20)
    private String subFrgCurrency;// 外币币种

    // 请求依据信息
    @Column(length = 500)
    private String contractBasis; // 合同约定
    @Column(length = 500)
    private String legalBasis; // 法律依据

    /**
     * 约定管辖和诉讼保全
     */
    //仲裁、法院管辖约定信息
    @Column(length = 1)
    private String hasArbitration; // 是否有仲裁条款 0否 1是
    @Column(length = 500)
    private String arbitrationContent; // 合同条款及内容

    //申请财产保全措施信息
    @Column(length = 1)
    private String hasPrePreserve; // 是否已经诉前保全  0否 1是
    @Column(length = 50)
    private String preserveCourt; // 保全法院
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date preserveString; // 保全日期
    @Column(length = 1)
    private String hasLitigationPreserve; // 是否申请诉讼保全  0否 1是

    /**
     * 事实与理由
     */
    //信用卡办理情况（信用卡卡号、信用卡登记权利人、办卡时间、办卡行等）
    @Column(length = 500)
    private String creditCardDetails; // 内容

    // 信用卡合约的主要约定
    @Column(length = 20)
    private String overdraftAmount; // 透支金额
    @Column(length = 50)
    private String bcStandard; // 利息、罚息、复利、滞纳金、违约金、手续费等的计算标准
    @Column(length = 500)
    private String breachTerms; // 违约责任
    @Column(length = 500)
    private String terminationCond; // 解除条件
    @Column(length = 20)
    private String bcCurrency;// 币种
    @Column(length = 20)
    private String bcFrgCurrency;// 外币币种

    // 3.是否对被告就信用卡合约主要条款进行提示注意、说明
    @Column(length = 1)
    private String hasNotice; // 是否提示注意、说明 0否 1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date noticeDate; // 提示时间
    @Column(length = 50)
    private String noticeLocation; // 提示地点

    // 4.被告已还款金额
    @Column(length = 20)
    private String repaidAmt; // 被告已还款金额
    @Column(length = 20)
    private String raCurrency;// 币种
    @Column(length = 20)
    private String raFrgCurrency;// 外币币种

    // 5.被告逾期未还款金额
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date overdueDate; // 逾期时间
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date ouEndDate; // 截至日期
    @Column(length = 20)
    private String ouPrincipal; // 被告欠付信用卡本金
    @Column(length = 20)
    private String ouInterest; // 截至日期，被告欠付信用卡利息
    @Column(length = 20)
    private String ouDefaultInterest; // 截至日期，被告欠付信用卡罚息
    @Column(length = 20)
    private String ouCompoundInterest; // 截至日期，被告欠付信用卡复利
    @Column(length = 20)
    private String ouLateFee; // 截至日期，被告欠付信用卡滞纳金
    @Column(length = 20)
    private String ouPenalty; // 截至日期，被告欠付信用卡违约金
    @Column(length = 20)
    private String ouCommission; // 截至日期，被告欠付信用卡手续费
    @Column(length = 20)
    private String ouCurrency;// 币种
    @Column(length = 20)
    private String ouFrgCurrency;// 外币币种

    // 6.是否向被告进行通知和催收
    @Column(length = 1)
    private String hasNotification; // 是否向被告进行通知和催收
    @Column(length = 500)
    private String notificationDetails; // 通知和催收具体情况

    //是否签订物的担保（抵押、质押）合同
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
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date geSureTime;// 担保债权的确定时间
    @Column(length = 20)
    private String geLimit;// 担保额度
    @Column(length = 20)
    private String geCurrency;// 币种
    @Column(length = 20)
    private String geFrgCurrency;// 外币币种

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
    @Column(length = 500)
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
    @Column(length = 500)
    private String otherContent;// 内容

    // 证据清单（可另附页）
    @Column(length = 500)
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

    public String getpAddress() {
        return pAddress;
    }

    public void setpAddress(String pAddress) {
        this.pAddress = pAddress;
    }

    public String getpRegAddress() {
        return pRegAddress;
    }

    public void setpRegAddress(String pRegAddress) {
        this.pRegAddress = pRegAddress;
    }

    public String getpLegalRep() {
        return pLegalRep;
    }

    public void setpLegalRep(String pLegalRep) {
        this.pLegalRep = pLegalRep;
    }

    public String getpLegalRepPos() {
        return pLegalRepPos;
    }

    public void setpLegalRepPos(String pLegalRepPos) {
        this.pLegalRepPos = pLegalRepPos;
    }

    public String getpLegalRepPhone() {
        return pLegalRepPhone;
    }

    public void setpLegalRepPhone(String pLegalRepPhone) {
        this.pLegalRepPhone = pLegalRepPhone;
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

    public String getdBirthDate() {
        return dBirthDate;
    }

    public void setdBirthDate(String dBirthDate) {
        this.dBirthDate = dBirthDate;
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

    public String getTpBirthDate() {
        return tpBirthDate;
    }

    public void setTpBirthDate(String tpBirthDate) {
        this.tpBirthDate = tpBirthDate;
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

    public Date getOpEndTime() {
        return opEndTime;
    }

    public void setOpEndTime(Date opEndTime) {
        this.opEndTime = opEndTime;
    }

    public String getOutPrincipal() {
        return outPrincipal;
    }

    public void setOutPrincipal(String outPrincipal) {
        this.outPrincipal = outPrincipal;
    }

    public String getOverdraftCurr() {
        return overdraftCurr;
    }

    public void setOverdraftCurr(String overdraftCurr) {
        this.overdraftCurr = overdraftCurr;
    }

    public String getOpCurrency() {
        return opCurrency;
    }

    public void setOpCurrency(String opCurrency) {
        this.opCurrency = opCurrency;
    }

    public String getOpFrgCurrency() {
        return opFrgCurrency;
    }

    public void setOpFrgCurrency(String opFrgCurrency) {
        this.opFrgCurrency = opFrgCurrency;
    }

    public Date getItEndTime() {
        return itEndTime;
    }

    public void setItEndTime(Date itEndTime) {
        this.itEndTime = itEndTime;
    }

    public String getItAmount() {
        return itAmount;
    }

    public void setItAmount(String itAmount) {
        this.itAmount = itAmount;
    }

    public Date getItAfterTime() {
        return itAfterTime;
    }

    public void setItAfterTime(Date itAfterTime) {
        this.itAfterTime = itAfterTime;
    }

    public String getItDetails() {
        return itDetails;
    }

    public void setItDetails(String itDetails) {
        this.itDetails = itDetails;
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

    public String getCreditCardDetails() {
        return creditCardDetails;
    }

    public void setCreditCardDetails(String creditCardDetails) {
        this.creditCardDetails = creditCardDetails;
    }

    public String getOverdraftAmount() {
        return overdraftAmount;
    }

    public void setOverdraftAmount(String overdraftAmount) {
        this.overdraftAmount = overdraftAmount;
    }

    public String getBcStandard() {
        return bcStandard;
    }

    public void setBcStandard(String bcStandard) {
        this.bcStandard = bcStandard;
    }

    public String getBreachTerms() {
        return breachTerms;
    }

    public void setBreachTerms(String breachTerms) {
        this.breachTerms = breachTerms;
    }

    public String getTerminationCond() {
        return terminationCond;
    }

    public void setTerminationCond(String terminationCond) {
        this.terminationCond = terminationCond;
    }

    public String getBcCurrency() {
        return bcCurrency;
    }

    public void setBcCurrency(String bcCurrency) {
        this.bcCurrency = bcCurrency;
    }

    public String getBcFrgCurrency() {
        return bcFrgCurrency;
    }

    public void setBcFrgCurrency(String bcFrgCurrency) {
        this.bcFrgCurrency = bcFrgCurrency;
    }

    public String getHasNotice() {
        return hasNotice;
    }

    public void setHasNotice(String hasNotice) {
        this.hasNotice = hasNotice;
    }

    public Date getNoticeDate() {
        return noticeDate;
    }

    public void setNoticeDate(Date noticeDate) {
        this.noticeDate = noticeDate;
    }

    public String getNoticeLocation() {
        return noticeLocation;
    }

    public void setNoticeLocation(String noticeLocation) {
        this.noticeLocation = noticeLocation;
    }

    public String getRepaidAmt() {
        return repaidAmt;
    }

    public void setRepaidAmt(String repaidAmt) {
        this.repaidAmt = repaidAmt;
    }

    public String getRaCurrency() {
        return raCurrency;
    }

    public void setRaCurrency(String raCurrency) {
        this.raCurrency = raCurrency;
    }

    public String getRaFrgCurrency() {
        return raFrgCurrency;
    }

    public void setRaFrgCurrency(String raFrgCurrency) {
        this.raFrgCurrency = raFrgCurrency;
    }

    public Date getOverdueDate() {
        return overdueDate;
    }

    public void setOverdueDate(Date overdueDate) {
        this.overdueDate = overdueDate;
    }

    public Date getOuEndDate() {
        return ouEndDate;
    }

    public void setOuEndDate(Date ouEndDate) {
        this.ouEndDate = ouEndDate;
    }

    public String getOuPrincipal() {
        return ouPrincipal;
    }

    public void setOuPrincipal(String ouPrincipal) {
        this.ouPrincipal = ouPrincipal;
    }

    public String getOuInterest() {
        return ouInterest;
    }

    public void setOuInterest(String ouInterest) {
        this.ouInterest = ouInterest;
    }

    public String getOuDefaultInterest() {
        return ouDefaultInterest;
    }

    public void setOuDefaultInterest(String ouDefaultInterest) {
        this.ouDefaultInterest = ouDefaultInterest;
    }

    public String getOuCompoundInterest() {
        return ouCompoundInterest;
    }

    public void setOuCompoundInterest(String ouCompoundInterest) {
        this.ouCompoundInterest = ouCompoundInterest;
    }

    public String getOuLateFee() {
        return ouLateFee;
    }

    public void setOuLateFee(String ouLateFee) {
        this.ouLateFee = ouLateFee;
    }

    public String getOuPenalty() {
        return ouPenalty;
    }

    public void setOuPenalty(String ouPenalty) {
        this.ouPenalty = ouPenalty;
    }

    public String getOuCommission() {
        return ouCommission;
    }

    public void setOuCommission(String ouCommission) {
        this.ouCommission = ouCommission;
    }

    public String getOuCurrency() {
        return ouCurrency;
    }

    public void setOuCurrency(String ouCurrency) {
        this.ouCurrency = ouCurrency;
    }

    public String getOuFrgCurrency() {
        return ouFrgCurrency;
    }

    public void setOuFrgCurrency(String ouFrgCurrency) {
        this.ouFrgCurrency = ouFrgCurrency;
    }

    public String getHasNotification() {
        return hasNotification;
    }

    public void setHasNotification(String hasNotification) {
        this.hasNotification = hasNotification;
    }

    public String getNotificationDetails() {
        return notificationDetails;
    }

    public void setNotificationDetails(String notificationDetails) {
        this.notificationDetails = notificationDetails;
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

    public Date getGeSureTime() {
        return geSureTime;
    }

    public void setGeSureTime(Date geSureTime) {
        this.geSureTime = geSureTime;
    }

    public String getGeLimit() {
        return geLimit;
    }

    public void setGeLimit(String geLimit) {
        this.geLimit = geLimit;
    }

    public String getGeCurrency() {
        return geCurrency;
    }

    public void setGeCurrency(String geCurrency) {
        this.geCurrency = geCurrency;
    }

    public String getGeFrgCurrency() {
        return geFrgCurrency;
    }

    public void setGeFrgCurrency(String geFrgCurrency) {
        this.geFrgCurrency = geFrgCurrency;
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
