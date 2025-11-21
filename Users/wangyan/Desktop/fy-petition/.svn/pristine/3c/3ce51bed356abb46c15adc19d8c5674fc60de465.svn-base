package com.jsdc.petition.sys_;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

//夫妻共同债务
@Data
@Entity(name = "divorce_dept")
@TableName("divorce_dept")
public class DivorceDebt extends Model<DivorceDebt> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //离婚纠纷id
    private Integer divorce_id;



    //其他1明细：归属：
    private String debt;//0原告 1被告 2其他
    private String debt_content;//内容



    
}
