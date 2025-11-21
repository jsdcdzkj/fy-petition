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
 * 民事起诉状（物业服务合同纠纷）
 */
@Entity(name = "property_complaint")
@TableName("property_complaint")
public class PropertyComplaint extends Model<PropertyComplaint> {

    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // 主键ID

    /**
     * 当事人信息
     */

    // 原告（法人、非法人组织）信息
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
    private String pType; //类型 0有限责任公司 1股份有限公司 2上市公司3其他企业法人4事业单位5社会团体6基金会7社会服务机构8机关法人9农村集体经济组织法人10城镇农村的合作经济组织法人11基层群众性自治组织法人12个人独资企业13合伙企业14不具有法人资格的专业服务机构15国有控股16国有参股17民营

    // 委托代理人信息
    @Column(length = 1)
    private String hasAgent; // 是否有代理人
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
     * 诉讼请求和依据
     */
    //1.物业费
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date feeEndTime; // 截至  xx 止，
    @Column(length = 20)
    private String feeAmount; // 尚欠业务费 xx 元
    @Column(length = 20)
    private String feeCurrency;// 币种
    @Column(length = 20)
    private String feeFrgCurrency;// 外币币种

    // 2.违约金
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date pyEndTime; // 截至  xx 止，
    @Column(length = 20)
    private String penaltyAmount; // 欠逾期物业费的违约金 xx 元
    @Column(length = 20)
    private String pyCurrency;// 币种
    @Column(length = 20)
    private String pyFrgCurrency;// 外币币种
    @Column(length = 1)
    private String isReqPayDay;// 是否请求支付至实际清偿之日止 0否 1是

    // 8.其他请求信息
    @Column(length = 1000)
    private String otherReqs; // 其他请求

    // 9.标的总额
    @Column(length = 20)
    private String subTotalAmount; // 标的总额
    @Column(length = 20)
    private String subCurrency;// 币种
    @Column(length = 20)
    private String subFrgCurrency;// 外币币种

    // 10.请求依据信息
    @Column(length = 1000)
    private String contractBasis; // 合同依据
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
    //1.物业服务合同或前期物业服务合同签订情况（名称、编号、签订时间、地点等）
    @Column(length = 1000)
    private String contractDetails; // 合同详情

    //2.签订主体
    @Column(length = 20)
    private String owner; // 业主/建设单位
    @Column(length = 20)
    private String proSerPersonnel; // 物业服务人

    // 3.物业项目情况
    @Column(length = 20)
    private String propertyLoc; // 物业位置
    @Column(length = 20)
    private String propertyArea; // 物业面积
    @Column(length = 20)
    private String propertyOwner; // 物业所有权人

    //4.约定的物业费标准
    @Column(length = 1000)
    private String pyContent; // 内容

    // 5.约定的物业服务期限
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date pspStartTime; // 起始时间
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date pspEndTime; // 结束时间

    // 6.约定的物业费支付方式
    @Column(length = 1000)
    private String pmContent; // 内容

    // 7.约定的逾期支付物业费违约金标准
    @Column(length = 1000)
    private String peContent; // 内容

    // 8.被告欠付物业费数额及计算方式
    @Column(length = 20)
    private String owingProFees;// 欠付物业费数额
    @Column(length = 20)
    private String calMethod;// 具体计算方式
    @Column(length = 20)
    private String clCurrency;// 币种
    @Column(length = 20)
    private String clFrgCurrency;// 外币币种

    // 9.被告应付违约金数额及计算方式
    @Column(length = 20)
    private String liqDamPayAmount;// 应付违约金数额
    @Column(length = 20)
    private String lqCalMethod;// 具体计算方式
    @Column(length = 20)
    private String lqCurrency;// 币种
    @Column(length = 20)
    private String lqFrgCurrency;// 外币币种

    // 10.催缴情况
    @Column(length = 1000)
    private String colContent; // 内容

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

    public Date getFeeEndTime() {
        return feeEndTime;
    }

    public void setFeeEndTime(Date feeEndTime) {
        this.feeEndTime = feeEndTime;
    }

    public String getFeeAmount() {
        return feeAmount;
    }

    public void setFeeAmount(String feeAmount) {
        this.feeAmount = feeAmount;
    }

    public String getFeeCurrency() {
        return feeCurrency;
    }

    public void setFeeCurrency(String feeCurrency) {
        this.feeCurrency = feeCurrency;
    }

    public String getFeeFrgCurrency() {
        return feeFrgCurrency;
    }

    public void setFeeFrgCurrency(String feeFrgCurrency) {
        this.feeFrgCurrency = feeFrgCurrency;
    }

    public Date getPyEndTime() {
        return pyEndTime;
    }

    public void setPyEndTime(Date pyEndTime) {
        this.pyEndTime = pyEndTime;
    }

    public String getPenaltyAmount() {
        return penaltyAmount;
    }

    public void setPenaltyAmount(String penaltyAmount) {
        this.penaltyAmount = penaltyAmount;
    }

    public String getPyCurrency() {
        return pyCurrency;
    }

    public void setPyCurrency(String pyCurrency) {
        this.pyCurrency = pyCurrency;
    }

    public String getPyFrgCurrency() {
        return pyFrgCurrency;
    }

    public void setPyFrgCurrency(String pyFrgCurrency) {
        this.pyFrgCurrency = pyFrgCurrency;
    }

    public String getIsReqPayDay() {
        return isReqPayDay;
    }

    public void setIsReqPayDay(String isReqPayDay) {
        this.isReqPayDay = isReqPayDay;
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

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getProSerPersonnel() {
        return proSerPersonnel;
    }

    public void setProSerPersonnel(String proSerPersonnel) {
        this.proSerPersonnel = proSerPersonnel;
    }

    public String getPropertyLoc() {
        return propertyLoc;
    }

    public void setPropertyLoc(String propertyLoc) {
        this.propertyLoc = propertyLoc;
    }

    public String getPropertyArea() {
        return propertyArea;
    }

    public void setPropertyArea(String propertyArea) {
        this.propertyArea = propertyArea;
    }

    public String getPropertyOwner() {
        return propertyOwner;
    }

    public void setPropertyOwner(String propertyOwner) {
        this.propertyOwner = propertyOwner;
    }

    public String getPyContent() {
        return pyContent;
    }

    public void setPyContent(String pyContent) {
        this.pyContent = pyContent;
    }

    public Date getPspStartTime() {
        return pspStartTime;
    }

    public void setPspStartTime(Date pspStartTime) {
        this.pspStartTime = pspStartTime;
    }

    public Date getPspEndTime() {
        return pspEndTime;
    }

    public void setPspEndTime(Date pspEndTime) {
        this.pspEndTime = pspEndTime;
    }

    public String getPmContent() {
        return pmContent;
    }

    public void setPmContent(String pmContent) {
        this.pmContent = pmContent;
    }

    public String getPeContent() {
        return peContent;
    }

    public void setPeContent(String peContent) {
        this.peContent = peContent;
    }

    public String getOwingProFees() {
        return owingProFees;
    }

    public void setOwingProFees(String owingProFees) {
        this.owingProFees = owingProFees;
    }

    public String getCalMethod() {
        return calMethod;
    }

    public void setCalMethod(String calMethod) {
        this.calMethod = calMethod;
    }

    public String getClCurrency() {
        return clCurrency;
    }

    public void setClCurrency(String clCurrency) {
        this.clCurrency = clCurrency;
    }

    public String getClFrgCurrency() {
        return clFrgCurrency;
    }

    public void setClFrgCurrency(String clFrgCurrency) {
        this.clFrgCurrency = clFrgCurrency;
    }

    public String getLiqDamPayAmount() {
        return liqDamPayAmount;
    }

    public void setLiqDamPayAmount(String liqDamPayAmount) {
        this.liqDamPayAmount = liqDamPayAmount;
    }

    public String getLqCalMethod() {
        return lqCalMethod;
    }

    public void setLqCalMethod(String lqCalMethod) {
        this.lqCalMethod = lqCalMethod;
    }

    public String getLqCurrency() {
        return lqCurrency;
    }

    public void setLqCurrency(String lqCurrency) {
        this.lqCurrency = lqCurrency;
    }

    public String getLqFrgCurrency() {
        return lqFrgCurrency;
    }

    public void setLqFrgCurrency(String lqFrgCurrency) {
        this.lqFrgCurrency = lqFrgCurrency;
    }

    public String getColContent() {
        return colContent;
    }

    public void setColContent(String colContent) {
        this.colContent = colContent;
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
