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

//子女直接抚养
@Data
@Entity(name = "divorce_son")
@TableName("divorce_son")
public class DivorceSon extends Model<DivorceSon> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //离婚纠纷id
    private Integer divorce_id;



    //其他1明细：归属：
    private String son;//0原告 1被告 2其他
    private String son_content;//内容



    
}
