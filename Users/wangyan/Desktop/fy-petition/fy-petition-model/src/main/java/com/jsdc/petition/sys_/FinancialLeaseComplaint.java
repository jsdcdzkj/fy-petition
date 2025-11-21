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
 * 民事起诉状（融资租赁合同纠纷）
 */
@Entity(name = "financial_lease_complaint")
@TableName("financial_lease_complaint")
public class FinancialLeaseComplaint extends Model<FinancialLeaseComplaint> {

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
    private String pAddr; // 原告所住地
    @Column(length = 20)
    private String pRegAddr; // 原告注册地/登记地
    @Column(length = 20)
    private String pLegalRep; // 法定代表人/主要负责人
    @Column(length = 20)
    private String pRepPos; // 职务
    @Column(length = 20)
    private String pRepPhone; // 联系电话
    @Column(length = 20)
    private String pCreditCode; // 统一社会信用代码
    @Column(length = 20)
    private String pType; // 类型

    // 委托代理人信息
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
    @Column(length = 20)
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
    private String dBirthDate; // 出生日期
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
    private String tpBirthDate; // 出生日期
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
     * 诉讼请求和依据（原告主张支付全部未付租金时，填写第1项至第3项；原告主张解除合同时，填写第4项、第5项；第6项至第10项为共同项）
     */
    //1.支付全部未付租金
    @Column(length = 20)
    private String dueUnpaidAmount; // 到期未付租金
    @Column(length = 20)
    private String unfiredRent; // 未到期租金
    @Column(length = 20)
    private String retPurPrice; // 留购价款
    @Column(length = 20)
    private String rentCurrency;// 币种

    @Column(length = 20)
    private String rentFrgCurrency;// 外币币种

    // 2.违约金、滞纳金、损害赔偿金
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date defEndTime; // 违约截止日期
    @Column(length = 20)
    private String penaltyAmount; // 违约金金额
    @Column(length = 20)
    private String lateFeeAmount; // 滞纳金金额
    @Column(length = 20)
    private String damagesAmount; // 损害赔偿金金额
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date defAfterTime; // 自 xx 之后的违约金、滞纳金、损害赔偿金
    @Column(length = 20)
    private String defAfterAmount; // 以  xx  元为基数
    @Column(length = 20)
    private String defStandard; // 按照 xx 标准计算至全部款项实际付清之日
    @Column(length = 20)
    private String defCurrency;// 币种
    @Column(length = 20)
    private String defFrgCurrency;// 外币币种
    @Column(length = 1000)
    private String defDetails;// 明细

    // 3.是否确认租赁物归原告所有
    @Column(length = 1)
    private String isSure; // 是否确认

    // 4.请求解除合同
    @Column(length = 1)
    private String isLiftCon; // 是否解除 判令解除融资租赁合同确认融资租赁合同
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date liftTime; // 已于  xx  解除

    // 5.返还租赁物，并赔偿因解除合同而受到的损失
    @Column(length = 20)
    private String rlpUnpaidRent; // 支付全部未付租金 xx 元，
    @Column(length = 20)
    private String rlpDueUnpaidAmount; // 到期未付租金 xx 元、
    @Column(length = 20)
    private String rlpUnfiredRent; // 未到期租金 xx 元、
    @Column(length = 20)
    private String rlpRetPurPrice; // 留购价款 xx  元（如约定）
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date rlpEndTime; // 截至 xx 止，
    @Column(length = 20)
    private String rlpLiqDamages; // 违约金  xx 元，
    @Column(length = 20)
    private String rlpLateFee; // 滞纳金 xx 元，
    @Column(length = 20)
    private String rlpDamages; // 损害赔偿金 xx元
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date rlpAfterTime; // 自 xx  之后的违约金、滞纳金、损害赔偿金，
    @Column(length = 20)
    private String rlpAfterAmount;  // 以  xx 元为基数
    @Column(length = 20)
    private String rlpStandard; // 按照 xx 标准计算至全部款项实际付清之日
    @Column(length = 20)
    private String rlpCurrency;// 币种
    @Column(length = 20)
    private String rlpFrgCurrency;// 外币币种
    @Column(length = 1000)
    private String rlpDetails;// 明细

    // 5.要求继续履行或是解除合同
    @Column(length = 20)
    private String isConOrTc;// 要求继续履行或是解除合同 1继续履行 2解除合同
    @Column(length = 20)
    private String ctDays;// xx 日内履行完毕付款
    @Column(length = 20)
    private String ctSupplyCommodity;// 供货 是否勾选
    @Column(length = 20)
    private String ctObligation;// 义务 是否勾选
    @Column(length = 20)
    private String ctIsConfirm;// 确买卖合同
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date ctLiftDate;// 已于 XX 解除

    // 6.主张担保权利信息
    @Column(length = 1)
    private String isAdvGuaRights;// 是否主张担保权利
    @Column(length = 1000)
    private String agrContent;// 内容

    // 7.主张实现债权的费用信息
    @Column(length = 1)
    private String isAdvCostDebt; // 是否主张实现债权的费用   0否 1是
    @Column(length = 1000)
    private String acdDetails; // 明细

    // 8.其他请求信息
    @Column(length = 1000)
    private String otherReqs;// 其他请求

    // 9.标的总额
    @Column(length = 20)
    private String subTotalAmount;// 标的总额
    @Column(length = 20)
    private String subCurrency;// 币种
    @Column(length = 20)
    private String subFrgCurrency;// 外币币种

    // 10.请求依据信息
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
    //1.合同的签订情况（名称、编号、签订时间、地点等）
    @Column(length = 1000)
    private String contractDetails; // 内容

    // 2.签订主体
    @Column(length = 20)
    private String sellerName; // 出租人（卖方）
    @Column(length = 20)
    private String buyerName; // 承租人（买方）

    // 3.租赁物情况（租赁物的选择、名称、规格、质量、数量等）
    @Column(length = 1000)
    private String lsContent; // 内容

    // 4.合同约定的租金及支付方式
    @Column(length = 20)
    private String rent;// 租金
    @Column(length = 20)
    private String rtCurrency;// 币种
    @Column(length = 20)
    private String rtFrgCurrency;// 外币币种
    @Column(length = 20)
    private String rtPaymentChannels;// 支付渠道 现金/转账/票据/其他
    @Column(length = 20)
    private String rtBillType;// 票据类型
    @Column(length = 20)
    private String rtChannelName;// 渠道名称
    @Column(length = 20)
    private String rtPaymentMethod;// 支付方式
    @Column(length = 20)
    private String rtInstallmentMethod;// 分期方式

    //5.合同约定的租赁期限、费用
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date leaseStartTime;//租赁期间自 xx 起
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date leaseEndTime;// 至 xx  止
    @Column(length = 20)
    private String outRent;//除租金外产生的  xx  费用 ，
    @Column(length = 20)
    private String undertaker; //由   xx 承担

    // 6.到期后租赁物归属
    @Column(length = 20)
    private String leaseItemOwner; // 租赁物
    @Column(length = 20)
    private String buyoutPrice; // 留购价款
    @Column(length = 20)
    private String bgCurrency;// 币种
    @Column(length = 20)
    private String bgFrgCurrency;// 外币币种

    // 合同约定的违约责任
    @Column(length = 1000)
    private String lbContent;//内容

    // 是否约定回收租赁物条件
    @Column(length = 1)
    private String isAgree;// 是否有  0否 1是
    @Column(length = 500)
    private String agContent;// 具体内容

    // 8.是否约定加速到期条款
    @Column(length = 1)
    private String isAcAgree;// 是否有  0否 1是
    @Column(length = 500)
    private String acContent;// 具体内容

    // 是否约定解除合同条件
    @Column(length = 1)
    private String isCtAgree;// 是否有  0否 1是
    @Column(length = 1000)
    private String ctContent;// 具体内容

    // 租赁物交付时间
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date rpDeliveryTime;//交付时间

    // 租赁物情况
    @Column(length = 20)
    private String leaseSituation;// 情况 质量符合约定或者承租人的使用目的/存在瑕疵
    @Column(length = 1000)
    private String lsnContent;// 具体内容

    // 租金支付情况
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date rpsStartTime; // 自  xx
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date rpsEndTime;// 至  xx ，
    @Column(length = 20)
    private String rpsPaidRent;// 按约定缴纳租金，已付租金 xx 元，
    @Column(length = 20)
    private String rpsLatePaidRent;// 逾期但已支付租金 xx 元
    @Column(length = 20)
    private String rpsCurrency;// 币种
    @Column(length = 20)
    private String rpsFrgCurrency;// 外币币种
    @Column(length = 1000)
    private String rpsDetails;// 明细

    //逾期未付租金情况
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date orpStartTime;//自 xx 起，
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date orpEndTime;// 开始欠付租金，截至  xx  ，
    @Column(length = 20)
    private String orpOwingRent;// 欠付租金 xx  元、
    @Column(length = 20)
    private String orpLiqDamages; // 违约金  xx 元，
    @Column(length = 20)
    private String orpLateFee; // 滞纳金 xx 元，
    @Column(length = 20)
    private String orpDamages; // 损害赔偿金 xx元
    @Column(length = 20)
    private String orpTotalAmount;// 共计XX元
    @Column(length = 20)
    private String orpCurrency;// 币种
    @Column(length = 20)
    private String orpFrgCurrency;// 外币币种
    @Column(length = 1000)
    private String orpDetails;// 明细

    // 是否签订物的担保（抵押、质押）合同
    @Column(length = 1)
    private String isSignGuaCon;// 是否是  0否 1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date gcSigningTime;// 签订时间

    // 担保人、担保物
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
    @Column(length = 1000)
    private String snMainContent;// 主要内容

    // 保证方式信息
    @Column(length = 20)
    private String guaranteeMethod;// 保证方式 一般保证、连带责任保证

    //其他担保方式
    @Column(length = 1)
    private String isOtherGuaMethods;// 是否有  0否 1是
    // 形式
    @Column(length = 20)
    private String ogForm;

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

    public String getDueUnpaidAmount() {
        return dueUnpaidAmount;
    }

    public void setDueUnpaidAmount(String dueUnpaidAmount) {
        this.dueUnpaidAmount = dueUnpaidAmount;
    }

    public String getUnfiredRent() {
        return unfiredRent;
    }

    public void setUnfiredRent(String unfiredRent) {
        this.unfiredRent = unfiredRent;
    }

    public String getRetPurPrice() {
        return retPurPrice;
    }

    public void setRetPurPrice(String retPurPrice) {
        this.retPurPrice = retPurPrice;
    }

    public String getRentCurrency() {
        return rentCurrency;
    }

    public void setRentCurrency(String rentCurrency) {
        this.rentCurrency = rentCurrency;
    }

    public String getRentFrgCurrency() {
        return rentFrgCurrency;
    }

    public void setRentFrgCurrency(String rentFrgCurrency) {
        this.rentFrgCurrency = rentFrgCurrency;
    }

    public Date getDefEndTime() {
        return defEndTime;
    }

    public void setDefEndTime(Date defEndTime) {
        this.defEndTime = defEndTime;
    }

    public String getPenaltyAmount() {
        return penaltyAmount;
    }

    public void setPenaltyAmount(String penaltyAmount) {
        this.penaltyAmount = penaltyAmount;
    }

    public String getLateFeeAmount() {
        return lateFeeAmount;
    }

    public void setLateFeeAmount(String lateFeeAmount) {
        this.lateFeeAmount = lateFeeAmount;
    }

    public String getDamagesAmount() {
        return damagesAmount;
    }

    public void setDamagesAmount(String damagesAmount) {
        this.damagesAmount = damagesAmount;
    }

    public Date getDefAfterTime() {
        return defAfterTime;
    }

    public void setDefAfterTime(Date defAfterTime) {
        this.defAfterTime = defAfterTime;
    }

    public String getDefAfterAmount() {
        return defAfterAmount;
    }

    public void setDefAfterAmount(String defAfterAmount) {
        this.defAfterAmount = defAfterAmount;
    }

    public String getDefStandard() {
        return defStandard;
    }

    public void setDefStandard(String defStandard) {
        this.defStandard = defStandard;
    }

    public String getDefCurrency() {
        return defCurrency;
    }

    public void setDefCurrency(String defCurrency) {
        this.defCurrency = defCurrency;
    }

    public String getDefFrgCurrency() {
        return defFrgCurrency;
    }

    public void setDefFrgCurrency(String defFrgCurrency) {
        this.defFrgCurrency = defFrgCurrency;
    }

    public String getDefDetails() {
        return defDetails;
    }

    public void setDefDetails(String defDetails) {
        this.defDetails = defDetails;
    }

    public String getIsSure() {
        return isSure;
    }

    public void setIsSure(String isSure) {
        this.isSure = isSure;
    }

    public String getIsLiftCon() {
        return isLiftCon;
    }

    public void setIsLiftCon(String isLiftCon) {
        this.isLiftCon = isLiftCon;
    }

    public Date getLiftTime() {
        return liftTime;
    }

    public void setLiftTime(Date liftTime) {
        this.liftTime = liftTime;
    }

    public String getRlpUnpaidRent() {
        return rlpUnpaidRent;
    }

    public void setRlpUnpaidRent(String rlpUnpaidRent) {
        this.rlpUnpaidRent = rlpUnpaidRent;
    }

    public String getRlpDueUnpaidAmount() {
        return rlpDueUnpaidAmount;
    }

    public void setRlpDueUnpaidAmount(String rlpDueUnpaidAmount) {
        this.rlpDueUnpaidAmount = rlpDueUnpaidAmount;
    }

    public String getRlpUnfiredRent() {
        return rlpUnfiredRent;
    }

    public void setRlpUnfiredRent(String rlpUnfiredRent) {
        this.rlpUnfiredRent = rlpUnfiredRent;
    }

    public String getRlpRetPurPrice() {
        return rlpRetPurPrice;
    }

    public void setRlpRetPurPrice(String rlpRetPurPrice) {
        this.rlpRetPurPrice = rlpRetPurPrice;
    }

    public Date getRlpEndTime() {
        return rlpEndTime;
    }

    public void setRlpEndTime(Date rlpEndTime) {
        this.rlpEndTime = rlpEndTime;
    }

    public String getRlpLiqDamages() {
        return rlpLiqDamages;
    }

    public void setRlpLiqDamages(String rlpLiqDamages) {
        this.rlpLiqDamages = rlpLiqDamages;
    }

    public String getRlpLateFee() {
        return rlpLateFee;
    }

    public void setRlpLateFee(String rlpLateFee) {
        this.rlpLateFee = rlpLateFee;
    }

    public String getRlpDamages() {
        return rlpDamages;
    }

    public void setRlpDamages(String rlpDamages) {
        this.rlpDamages = rlpDamages;
    }

    public Date getRlpAfterTime() {
        return rlpAfterTime;
    }

    public void setRlpAfterTime(Date rlpAfterTime) {
        this.rlpAfterTime = rlpAfterTime;
    }

    public String getRlpAfterAmount() {
        return rlpAfterAmount;
    }

    public void setRlpAfterAmount(String rlpAfterAmount) {
        this.rlpAfterAmount = rlpAfterAmount;
    }

    public String getRlpStandard() {
        return rlpStandard;
    }

    public void setRlpStandard(String rlpStandard) {
        this.rlpStandard = rlpStandard;
    }

    public String getRlpCurrency() {
        return rlpCurrency;
    }

    public void setRlpCurrency(String rlpCurrency) {
        this.rlpCurrency = rlpCurrency;
    }

    public String getRlpFrgCurrency() {
        return rlpFrgCurrency;
    }

    public void setRlpFrgCurrency(String rlpFrgCurrency) {
        this.rlpFrgCurrency = rlpFrgCurrency;
    }

    public String getRlpDetails() {
        return rlpDetails;
    }

    public void setRlpDetails(String rlpDetails) {
        this.rlpDetails = rlpDetails;
    }

    public String getIsConOrTc() {
        return isConOrTc;
    }

    public void setIsConOrTc(String isConOrTc) {
        this.isConOrTc = isConOrTc;
    }

    public String getCtDays() {
        return ctDays;
    }

    public void setCtDays(String ctDays) {
        this.ctDays = ctDays;
    }

    public String getCtSupplyCommodity() {
        return ctSupplyCommodity;
    }

    public void setCtSupplyCommodity(String ctSupplyCommodity) {
        this.ctSupplyCommodity = ctSupplyCommodity;
    }

    public String getCtObligation() {
        return ctObligation;
    }

    public void setCtObligation(String ctObligation) {
        this.ctObligation = ctObligation;
    }

    public String getCtIsConfirm() {
        return ctIsConfirm;
    }

    public void setCtIsConfirm(String ctIsConfirm) {
        this.ctIsConfirm = ctIsConfirm;
    }

    public Date getCtLiftDate() {
        return ctLiftDate;
    }

    public void setCtLiftDate(Date ctLiftDate) {
        this.ctLiftDate = ctLiftDate;
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

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public String getBuyerName() {
        return buyerName;
    }

    public void setBuyerName(String buyerName) {
        this.buyerName = buyerName;
    }

    public String getLsContent() {
        return lsContent;
    }

    public void setLsContent(String lsContent) {
        this.lsContent = lsContent;
    }

    public String getRent() {
        return rent;
    }

    public void setRent(String rent) {
        this.rent = rent;
    }

    public String getRtCurrency() {
        return rtCurrency;
    }

    public void setRtCurrency(String rtCurrency) {
        this.rtCurrency = rtCurrency;
    }

    public String getRtFrgCurrency() {
        return rtFrgCurrency;
    }

    public void setRtFrgCurrency(String rtFrgCurrency) {
        this.rtFrgCurrency = rtFrgCurrency;
    }

    public String getRtPaymentChannels() {
        return rtPaymentChannels;
    }

    public void setRtPaymentChannels(String rtPaymentChannels) {
        this.rtPaymentChannels = rtPaymentChannels;
    }

    public String getRtBillType() {
        return rtBillType;
    }

    public void setRtBillType(String rtBillType) {
        this.rtBillType = rtBillType;
    }

    public String getRtChannelName() {
        return rtChannelName;
    }

    public void setRtChannelName(String rtChannelName) {
        this.rtChannelName = rtChannelName;
    }

    public String getRtPaymentMethod() {
        return rtPaymentMethod;
    }

    public void setRtPaymentMethod(String rtPaymentMethod) {
        this.rtPaymentMethod = rtPaymentMethod;
    }

    public String getRtInstallmentMethod() {
        return rtInstallmentMethod;
    }

    public void setRtInstallmentMethod(String rtInstallmentMethod) {
        this.rtInstallmentMethod = rtInstallmentMethod;
    }

    public Date getLeaseStartTime() {
        return leaseStartTime;
    }

    public void setLeaseStartTime(Date leaseStartTime) {
        this.leaseStartTime = leaseStartTime;
    }

    public Date getLeaseEndTime() {
        return leaseEndTime;
    }

    public void setLeaseEndTime(Date leaseEndTime) {
        this.leaseEndTime = leaseEndTime;
    }

    public String getOutRent() {
        return outRent;
    }

    public void setOutRent(String outRent) {
        this.outRent = outRent;
    }

    public String getUndertaker() {
        return undertaker;
    }

    public void setUndertaker(String undertaker) {
        this.undertaker = undertaker;
    }

    public String getLeaseItemOwner() {
        return leaseItemOwner;
    }

    public void setLeaseItemOwner(String leaseItemOwner) {
        this.leaseItemOwner = leaseItemOwner;
    }

    public String getBuyoutPrice() {
        return buyoutPrice;
    }

    public void setBuyoutPrice(String buyoutPrice) {
        this.buyoutPrice = buyoutPrice;
    }

    public String getBgCurrency() {
        return bgCurrency;
    }

    public void setBgCurrency(String bgCurrency) {
        this.bgCurrency = bgCurrency;
    }

    public String getBgFrgCurrency() {
        return bgFrgCurrency;
    }

    public void setBgFrgCurrency(String bgFrgCurrency) {
        this.bgFrgCurrency = bgFrgCurrency;
    }

    public String getLbContent() {
        return lbContent;
    }

    public void setLbContent(String lbContent) {
        this.lbContent = lbContent;
    }

    public String getIsAgree() {
        return isAgree;
    }

    public void setIsAgree(String isAgree) {
        this.isAgree = isAgree;
    }

    public String getAgContent() {
        return agContent;
    }

    public void setAgContent(String agContent) {
        this.agContent = agContent;
    }

    public String getIsCtAgree() {
        return isCtAgree;
    }

    public void setIsCtAgree(String isCtAgree) {
        this.isCtAgree = isCtAgree;
    }

    public String getCtContent() {
        return ctContent;
    }

    public void setCtContent(String ctContent) {
        this.ctContent = ctContent;
    }

    public Date getRpDeliveryTime() {
        return rpDeliveryTime;
    }

    public void setRpDeliveryTime(Date rpDeliveryTime) {
        this.rpDeliveryTime = rpDeliveryTime;
    }

    public String getLeaseSituation() {
        return leaseSituation;
    }

    public void setLeaseSituation(String leaseSituation) {
        this.leaseSituation = leaseSituation;
    }

    public String getLsnContent() {
        return lsnContent;
    }

    public void setLsnContent(String lsnContent) {
        this.lsnContent = lsnContent;
    }

    public Date getRpsStartTime() {
        return rpsStartTime;
    }

    public void setRpsStartTime(Date rpsStartTime) {
        this.rpsStartTime = rpsStartTime;
    }

    public Date getRpsEndTime() {
        return rpsEndTime;
    }

    public void setRpsEndTime(Date rpsEndTime) {
        this.rpsEndTime = rpsEndTime;
    }

    public String getRpsPaidRent() {
        return rpsPaidRent;
    }

    public void setRpsPaidRent(String rpsPaidRent) {
        this.rpsPaidRent = rpsPaidRent;
    }

    public String getRpsLatePaidRent() {
        return rpsLatePaidRent;
    }

    public void setRpsLatePaidRent(String rpsLatePaidRent) {
        this.rpsLatePaidRent = rpsLatePaidRent;
    }

    public String getRpsCurrency() {
        return rpsCurrency;
    }

    public void setRpsCurrency(String rpsCurrency) {
        this.rpsCurrency = rpsCurrency;
    }

    public String getRpsFrgCurrency() {
        return rpsFrgCurrency;
    }

    public void setRpsFrgCurrency(String rpsFrgCurrency) {
        this.rpsFrgCurrency = rpsFrgCurrency;
    }

    public String getRpsDetails() {
        return rpsDetails;
    }

    public void setRpsDetails(String rpsDetails) {
        this.rpsDetails = rpsDetails;
    }

    public Date getOrpStartTime() {
        return orpStartTime;
    }

    public void setOrpStartTime(Date orpStartTime) {
        this.orpStartTime = orpStartTime;
    }

    public Date getOrpEndTime() {
        return orpEndTime;
    }

    public void setOrpEndTime(Date orpEndTime) {
        this.orpEndTime = orpEndTime;
    }

    public String getOrpOwingRent() {
        return orpOwingRent;
    }

    public void setOrpOwingRent(String orpOwingRent) {
        this.orpOwingRent = orpOwingRent;
    }

    public String getOrpLiqDamages() {
        return orpLiqDamages;
    }

    public void setOrpLiqDamages(String orpLiqDamages) {
        this.orpLiqDamages = orpLiqDamages;
    }

    public String getOrpLateFee() {
        return orpLateFee;
    }

    public void setOrpLateFee(String orpLateFee) {
        this.orpLateFee = orpLateFee;
    }

    public String getOrpDamages() {
        return orpDamages;
    }

    public void setOrpDamages(String orpDamages) {
        this.orpDamages = orpDamages;
    }

    public String getOrpTotalAmount() {
        return orpTotalAmount;
    }

    public void setOrpTotalAmount(String orpTotalAmount) {
        this.orpTotalAmount = orpTotalAmount;
    }

    public String getOrpCurrency() {
        return orpCurrency;
    }

    public void setOrpCurrency(String orpCurrency) {
        this.orpCurrency = orpCurrency;
    }

    public String getOrpFrgCurrency() {
        return orpFrgCurrency;
    }

    public void setOrpFrgCurrency(String orpFrgCurrency) {
        this.orpFrgCurrency = orpFrgCurrency;
    }

    public String getOrpDetails() {
        return orpDetails;
    }

    public void setOrpDetails(String orpDetails) {
        this.orpDetails = orpDetails;
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

    public String getIsAcAgree() {
        return isAcAgree;
    }

    public void setIsAcAgree(String isAcAgree) {
        this.isAcAgree = isAcAgree;
    }

    public String getAcContent() {
        return acContent;
    }

    public void setAcContent(String acContent) {
        this.acContent = acContent;
    }
}
