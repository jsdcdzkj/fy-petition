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
 * 民事起诉状（买卖合同纠纷）
 */
@Entity(name = "sales_contract_complaint")
@TableName("sales_contract_complaint")
public class SalesContractComplaint extends Model<SalesContractComplaint> {

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
    private String dOrgAddr; // 被告所住地
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
     * 诉讼请求和依据（原告为卖方时，填写第1项、第2项；原告为买方时，填写第3项、第4项；第5项至第11项为共同项）
     */
    //1.给付价款（元）
    @Column(length = 20)
    private String paymentAmount; // 价款金额
    @Column(length = 20)
    private String paymentCurrency; // 价款币种 人民币、外币
    @Column(length = 20)
    private String foreignCurrency; // 外币币种

    //2.迟延给付价款的利息（违约金）
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date lpDeadline; // 截至日期
    @Column(length = 20)
    private String lpInterest; // 迟延给付价款的利息
    @Column(length = 20)
    private String lpPenaltyAmount; // 违约金金额
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date lpDate; // 自 xx 日期 之后的逾期利息、违约金
    @Column(length = 20)
    private String lpAmount; // 以 xx 元为基数
    @Column(length = 20)
    private String lpStandard; // 按照 xx 标准计算
    @Column(length = 20)
    private String lpCalculationMethod; // 计算方式
    @Column(length = 20)
    private String lpCurrencyType;// 币种 人民币、外币
    @Column(length = 20)
    private String lpForeignCurrencyType;// 外币币种
    @Column(length = 1)
    private String lpIsPaymentEnd;// 是否请求支付至实际清偿之日止 0否 1是

    //3.赔偿因卖方违约所受的损失
    @Column(length = 20)
    private String compStandard; // 支付赔偿金
    @Column(length = 20)
    private String currency; // 币种 人民币、外币
    @Column(length = 20)
    private String frgCurrency; // 外币币种
    @Column(length = 20)
    private String breachType; // 违约类型 延迟履行、不履行、其他
    @Column(length = 20)
    private String caseDetail; // 具体情形
    @Column(length = 1000)
    private String lossBasis; // 损失计算依据

    //4.是否对标的物的瑕疵承担责任
    @Column(length = 1)
    private String isTakeResponsibility; // 是否对标的物的瑕疵承担责任 0否 1是
    @Column(length = 20)
    private String trDefaultType;// 违约类型 修理、重作、更换、退货、减少价款或者报酬、其他
    @Column(length = 20)
    private String trOthers;// 其他内容

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
    // 合同的签订情况（名称、编号、签订时间、地点等）
    @Column(length = 1000)
    private String contractDetails; // 内容

    //签订主体
    @Column(length = 20)
    private String sellerName; // 出卖人（卖方）名称
    @Column(length = 20)
    private String buyerName; // 买受人（买方）名称

    // 买卖标的物情况（标的物名称、规格、质量、数量等）
    @Column(length = 1000)
    private String sbContent; // 内容

    //合同约定的价格及支付方式
    @Column(length = 20)
    private String unitPrice; // 单价
    @Column(length = 20)
    private String totalPrice; // 总价
    @Column(length = 20)
    private String csCurrency;// 币种
    @Column(length = 20)
    private String csFrgCurrency;// 外币币种
    @Column(length = 20)
    private String csPaymentChannels;// 支付渠道
    @Column(length = 20)
    private String csBillType;// 票据类型
    @Column(length = 20)
    private String csChannelName;// 渠道名称
    @Column(length = 20)
    private String csPaymentMethod;// 支付方式
    @Column(length = 20)
    private String csInstallmentMethod;// 分期方式

    //合同约定的交货时间、地点、方式、风险承担、安装、调试、验收
    @Column(length = 1000)
    private String csContent;//内容

    //合同约定的质量标准及检验方式、质量异议期限
    @Column(length = 1000)
    private String qsContent;//内容

    //合同约定的违约金（定金）
    @Column(length = 20)
    private String isContract;//违约金 是否勾选
    @Column(length = 20)
    private String ctContractTerms;//合同条款：第 xx 条
    @Column(length = 20)
    private String isDeposit;//定金 是否勾选
    @Column(length = 20)
    private String dtContractTerms;//合同条款：第 xx 条
    @Column(length = 20)
    private String isPenaltyDelayed;//延迟履行违约金 是否勾选
    @Column(length = 20)
    private String pdPercentage;//百分比/日
    @Column(length = 20)
    private String pdContractTerms;//合同条款：第 xx 条

    //价款支付及标的物交付情况
    @Column(length = 20)
    private String payPrice;//按期支付价款 xx 元，
    @Column(length = 20)
    private String overduePayAmount;// 逾期付款 xx 元，
    @Column(length = 20)
    private String overdueNotPayAmount;// 逾期未付款 xx 元
    @Column(length = 20)
    private String ppCurrency;// 币种
    @Column(length = 20)
    private String ppFrgCurrency;// 外币币种
    @Column(length = 20)
    private String objectsNumber;// 按期交付标的物 xx 件，
    @Column(length = 20)
    private String opObjectsNumber;// 逾期交付 xx 件，
    @Column(length = 20)
    private String opNotObjectsNumber;// 逾期未交付 xx 件

    //是否存在延迟履行
    @Column(length = 1)
    private String isDelay;// 是否延迟 0否 1是
    @Column(length = 20)
    private String delayNature;// 延迟性质 逾期付款、逾期交货
    @Column(length = 20)
    private String delayTime;// 延迟时间 x天

    //是否催促过履行
    @Column(length = 1)
    private String isThereOne;// 是否有  0否 1是
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date urgeTime;// 催促时间
    @Column(length = 20)
    private String urgeMethod;// 催促方式

    // 买卖合同标的物有无质量争议
    @Column(length = 1)
    private String isCyThereOne;// 是否有  0否 1是
    @Column(length = 1000)
    private String cyContent;// 主要内容

    // 标的物质量规格或履行方式是否存在不符合约定的情况
    @Column(length = 1)
    private String aeCyThereOne;// 是否有  0否 1是
    @Column(length = 1000)
    private String aeContent;// 主要内容

    // 是否曾就标的物质量问题进行协商
    @Column(length = 1)
    private String neCyThereOne;// 是否有  0否 1是
    @Column(length = 1000)
    private String neContent;// 主要内容

    // 被告应当支付的利息、违约金、赔偿金
    @Column(length = 20)
    private String isInterest;// 利息 是否勾选
    @Column(length = 20)
    private String interestAmount;// 利息金额
    @Column(length = 20)
    private String isDamages;// 违约金 是否勾选
    @Column(length = 20)
    private String damagesAmount;// 违约金金额
    @Column(length = 20)
    private String isCompensation;// 赔偿金 是否勾选
    @Column(length = 20)
    private String cnAmount;// 赔偿金金额
    @Column(length = 20)
    private String totalAmount;// 合计金额
    @Column(length = 20)
    private String cnCurrency;// 币种
    @Column(length = 20)
    private String cnFrgCurrency;// 外币币种
    @Column(length = 20)
    private String cnCalMethod;// 计算方式

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

    //是否最高额担保（抵押、质押）
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

    //是否办理抵押、质押登记
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

    public String getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(String paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public String getPaymentCurrency() {
        return paymentCurrency;
    }

    public void setPaymentCurrency(String paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
    }

    public String getForeignCurrency() {
        return foreignCurrency;
    }

    public void setForeignCurrency(String foreignCurrency) {
        this.foreignCurrency = foreignCurrency;
    }

    public Date getLpDeadline() {
        return lpDeadline;
    }

    public void setLpDeadline(Date lpDeadline) {
        this.lpDeadline = lpDeadline;
    }

    public String getLpInterest() {
        return lpInterest;
    }

    public void setLpInterest(String lpInterest) {
        this.lpInterest = lpInterest;
    }

    public String getLpPenaltyAmount() {
        return lpPenaltyAmount;
    }

    public void setLpPenaltyAmount(String lpPenaltyAmount) {
        this.lpPenaltyAmount = lpPenaltyAmount;
    }

    public Date getLpDate() {
        return lpDate;
    }

    public void setLpDate(Date lpDate) {
        this.lpDate = lpDate;
    }

    public String getLpAmount() {
        return lpAmount;
    }

    public void setLpAmount(String lpAmount) {
        this.lpAmount = lpAmount;
    }

    public String getLpStandard() {
        return lpStandard;
    }

    public void setLpStandard(String lpStandard) {
        this.lpStandard = lpStandard;
    }

    public String getLpCalculationMethod() {
        return lpCalculationMethod;
    }

    public void setLpCalculationMethod(String lpCalculationMethod) {
        this.lpCalculationMethod = lpCalculationMethod;
    }

    public String getLpCurrencyType() {
        return lpCurrencyType;
    }

    public void setLpCurrencyType(String lpCurrencyType) {
        this.lpCurrencyType = lpCurrencyType;
    }

    public String getLpForeignCurrencyType() {
        return lpForeignCurrencyType;
    }

    public void setLpForeignCurrencyType(String lpForeignCurrencyType) {
        this.lpForeignCurrencyType = lpForeignCurrencyType;
    }

    public String getLpIsPaymentEnd() {
        return lpIsPaymentEnd;
    }

    public void setLpIsPaymentEnd(String lpIsPaymentEnd) {
        this.lpIsPaymentEnd = lpIsPaymentEnd;
    }

    public String getCompStandard() {
        return compStandard;
    }

    public void setCompStandard(String compStandard) {
        this.compStandard = compStandard;
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

    public String getBreachType() {
        return breachType;
    }

    public void setBreachType(String breachType) {
        this.breachType = breachType;
    }

    public String getCaseDetail() {
        return caseDetail;
    }

    public void setCaseDetail(String caseDetail) {
        this.caseDetail = caseDetail;
    }

    public String getLossBasis() {
        return lossBasis;
    }

    public void setLossBasis(String lossBasis) {
        this.lossBasis = lossBasis;
    }

    public String getIsTakeResponsibility() {
        return isTakeResponsibility;
    }

    public void setIsTakeResponsibility(String isTakeResponsibility) {
        this.isTakeResponsibility = isTakeResponsibility;
    }

    public String getTrDefaultType() {
        return trDefaultType;
    }

    public void setTrDefaultType(String trDefaultType) {
        this.trDefaultType = trDefaultType;
    }

    public String getTrOthers() {
        return trOthers;
    }

    public void setTrOthers(String trOthers) {
        this.trOthers = trOthers;
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

    public String getSbContent() {
        return sbContent;
    }

    public void setSbContent(String sbContent) {
        this.sbContent = sbContent;
    }

    public String getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(String unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getCsCurrency() {
        return csCurrency;
    }

    public void setCsCurrency(String csCurrency) {
        this.csCurrency = csCurrency;
    }

    public String getCsFrgCurrency() {
        return csFrgCurrency;
    }

    public void setCsFrgCurrency(String csFrgCurrency) {
        this.csFrgCurrency = csFrgCurrency;
    }

    public String getCsPaymentChannels() {
        return csPaymentChannels;
    }

    public void setCsPaymentChannels(String csPaymentChannels) {
        this.csPaymentChannels = csPaymentChannels;
    }

    public String getCsBillType() {
        return csBillType;
    }

    public void setCsBillType(String csBillType) {
        this.csBillType = csBillType;
    }

    public String getCsChannelName() {
        return csChannelName;
    }

    public void setCsChannelName(String csChannelName) {
        this.csChannelName = csChannelName;
    }

    public String getCsPaymentMethod() {
        return csPaymentMethod;
    }

    public void setCsPaymentMethod(String csPaymentMethod) {
        this.csPaymentMethod = csPaymentMethod;
    }

    public String getCsInstallmentMethod() {
        return csInstallmentMethod;
    }

    public void setCsInstallmentMethod(String csInstallmentMethod) {
        this.csInstallmentMethod = csInstallmentMethod;
    }

    public String getCsContent() {
        return csContent;
    }

    public void setCsContent(String csContent) {
        this.csContent = csContent;
    }

    public String getQsContent() {
        return qsContent;
    }

    public void setQsContent(String qsContent) {
        this.qsContent = qsContent;
    }

    public String getIsContract() {
        return isContract;
    }

    public void setIsContract(String isContract) {
        this.isContract = isContract;
    }

    public String getCtContractTerms() {
        return ctContractTerms;
    }

    public void setCtContractTerms(String ctContractTerms) {
        this.ctContractTerms = ctContractTerms;
    }

    public String getIsDeposit() {
        return isDeposit;
    }

    public void setIsDeposit(String isDeposit) {
        this.isDeposit = isDeposit;
    }

    public String getDtContractTerms() {
        return dtContractTerms;
    }

    public void setDtContractTerms(String dtContractTerms) {
        this.dtContractTerms = dtContractTerms;
    }

    public String getIsPenaltyDelayed() {
        return isPenaltyDelayed;
    }

    public void setIsPenaltyDelayed(String isPenaltyDelayed) {
        this.isPenaltyDelayed = isPenaltyDelayed;
    }

    public String getPdPercentage() {
        return pdPercentage;
    }

    public void setPdPercentage(String pdPercentage) {
        this.pdPercentage = pdPercentage;
    }

    public String getPdContractTerms() {
        return pdContractTerms;
    }

    public void setPdContractTerms(String pdContractTerms) {
        this.pdContractTerms = pdContractTerms;
    }

    public String getPayPrice() {
        return payPrice;
    }

    public void setPayPrice(String payPrice) {
        this.payPrice = payPrice;
    }

    public String getOverduePayAmount() {
        return overduePayAmount;
    }

    public void setOverduePayAmount(String overduePayAmount) {
        this.overduePayAmount = overduePayAmount;
    }

    public String getOverdueNotPayAmount() {
        return overdueNotPayAmount;
    }

    public void setOverdueNotPayAmount(String overdueNotPayAmount) {
        this.overdueNotPayAmount = overdueNotPayAmount;
    }

    public String getPpCurrency() {
        return ppCurrency;
    }

    public void setPpCurrency(String ppCurrency) {
        this.ppCurrency = ppCurrency;
    }

    public String getPpFrgCurrency() {
        return ppFrgCurrency;
    }

    public void setPpFrgCurrency(String ppFrgCurrency) {
        this.ppFrgCurrency = ppFrgCurrency;
    }

    public String getObjectsNumber() {
        return objectsNumber;
    }

    public void setObjectsNumber(String objectsNumber) {
        this.objectsNumber = objectsNumber;
    }

    public String getOpObjectsNumber() {
        return opObjectsNumber;
    }

    public void setOpObjectsNumber(String opObjectsNumber) {
        this.opObjectsNumber = opObjectsNumber;
    }

    public String getOpNotObjectsNumber() {
        return opNotObjectsNumber;
    }

    public void setOpNotObjectsNumber(String opNotObjectsNumber) {
        this.opNotObjectsNumber = opNotObjectsNumber;
    }

    public String getIsDelay() {
        return isDelay;
    }

    public void setIsDelay(String isDelay) {
        this.isDelay = isDelay;
    }

    public String getDelayNature() {
        return delayNature;
    }

    public void setDelayNature(String delayNature) {
        this.delayNature = delayNature;
    }

    public String getDelayTime() {
        return delayTime;
    }

    public void setDelayTime(String delayTime) {
        this.delayTime = delayTime;
    }

    public String getIsThereOne() {
        return isThereOne;
    }

    public void setIsThereOne(String isThereOne) {
        this.isThereOne = isThereOne;
    }

    public Date getUrgeTime() {
        return urgeTime;
    }

    public void setUrgeTime(Date urgeTime) {
        this.urgeTime = urgeTime;
    }

    public String getUrgeMethod() {
        return urgeMethod;
    }

    public void setUrgeMethod(String urgeMethod) {
        this.urgeMethod = urgeMethod;
    }

    public String getIsCyThereOne() {
        return isCyThereOne;
    }

    public void setIsCyThereOne(String isCyThereOne) {
        this.isCyThereOne = isCyThereOne;
    }

    public String getCyContent() {
        return cyContent;
    }

    public void setCyContent(String cyContent) {
        this.cyContent = cyContent;
    }

    public String getAeCyThereOne() {
        return aeCyThereOne;
    }

    public void setAeCyThereOne(String aeCyThereOne) {
        this.aeCyThereOne = aeCyThereOne;
    }

    public String getAeContent() {
        return aeContent;
    }

    public void setAeContent(String aeContent) {
        this.aeContent = aeContent;
    }

    public String getNeCyThereOne() {
        return neCyThereOne;
    }

    public void setNeCyThereOne(String neCyThereOne) {
        this.neCyThereOne = neCyThereOne;
    }

    public String getNeContent() {
        return neContent;
    }

    public void setNeContent(String neContent) {
        this.neContent = neContent;
    }

    public String getIsInterest() {
        return isInterest;
    }

    public void setIsInterest(String isInterest) {
        this.isInterest = isInterest;
    }

    public String getInterestAmount() {
        return interestAmount;
    }

    public void setInterestAmount(String interestAmount) {
        this.interestAmount = interestAmount;
    }

    public String getIsDamages() {
        return isDamages;
    }

    public void setIsDamages(String isDamages) {
        this.isDamages = isDamages;
    }

    public String getDamagesAmount() {
        return damagesAmount;
    }

    public void setDamagesAmount(String damagesAmount) {
        this.damagesAmount = damagesAmount;
    }

    public String getIsCompensation() {
        return isCompensation;
    }

    public void setIsCompensation(String isCompensation) {
        this.isCompensation = isCompensation;
    }

    public String getCnAmount() {
        return cnAmount;
    }

    public void setCnAmount(String cnAmount) {
        this.cnAmount = cnAmount;
    }

    public String getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(String totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getCnCurrency() {
        return cnCurrency;
    }

    public void setCnCurrency(String cnCurrency) {
        this.cnCurrency = cnCurrency;
    }

    public String getCnFrgCurrency() {
        return cnFrgCurrency;
    }

    public void setCnFrgCurrency(String cnFrgCurrency) {
        this.cnFrgCurrency = cnFrgCurrency;
    }

    public String getCnCalMethod() {
        return cnCalMethod;
    }

    public void setCnCalMethod(String cnCalMethod) {
        this.cnCalMethod = cnCalMethod;
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
}
