package com.jsdc.petition.sys_;

import com.baomidou.mybatisplus.annotation.*;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 系统字典
 *
 * @author wangYan
 * @since 2023-05-08
 */
@Entity
@TableName(value = "SYS_DICT")
@Table(name = "SYS_DICT")
@KeySequence(value = "SEQ_SYS_DICT_ID")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SysDict extends Model<SysDict> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @TableId(value = "id", type = IdType.INPUT)
    private Integer id;
    /**
     * 父类id
     */
    private Integer parentId;
    /**
     * 字典值
     */
    private String dictValue;
    /**
     * 字典类型
     */
    private String dictType;
    /**
     * 字典类型名称
     */
    private String dictTypeName;
    /**
     * 字典名称
     */
    private String dictLabel;
    /**
     * 描述
     */
    private String memo;

    private String colour;

    private Integer sort;

    private Integer createUser;
    private Integer updateUser;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createTime;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date updateTime;
    private Integer isDel;//是否删除 0:正常  1：删除

    @Transient
    @TableField(exist = false)
    private String parentName;

    @Transient
    @TableField(exist = false)
    private List<SysDict> children;
}
