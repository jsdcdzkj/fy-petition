package com.jsdc.petition.sys_;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

//夫妻共同财产
@Data
@Entity(name = "divorce_property")
@TableName("divorce_property")
public class DivorceProperty extends Model<DivorceProperty> {
    /** 记录id  */
    @Id
    @TableId(value = "id", type = IdType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //离婚纠纷id
    private Integer divorce_id;



    //其他1明细：归属：
    private String other;//0原告 1被告 2其他
    private String other_content;//内容





    
}
