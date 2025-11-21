package com.jsdc.petition.dao.sys_;

import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.sys_.Common;
import org.springframework.stereotype.Repository;

@Repository
public class CommonDao {


    /**
     * 此方法为默认方法 请添加自己的逻辑代码
     * @param page
     * @param bean
     * @return
     */
    public String getEntityList(Page page, Common bean) {
        String sql = " SELECT *  "+
                " FROM common  "+
                " WHERE "+ 
                " 1=1 ";
        if(StringUtils.isNotBlank(bean.getPlaintiff_s_name())){
            sql += " and plaintiff_s_name like '%"+bean.getPlaintiff_s_name()+"%'" ;
        }


        if(null != bean.getType()){
            sql += " and type ='"+bean.getType()+"'" ;
        }

        if(StringUtils.isNotBlank(bean.getPlaintiff_p_name())){
            sql += " and plaintiff_p_name like '%"+bean.getPlaintiff_p_name()+"%'" ;
        }

        if(StringUtils.isNotBlank(bean.getDefendant_c_name())){
            sql += " and defendant_c_name like '%"+bean.getDefendant_c_name()+"%'" ;
        }


        if(StringUtils.isNotBlank(bean.getDefendant_p_name())){
            sql += " and defendant_p_name like '%"+bean.getDefendant_p_name()+"%'" ;
        }

        if(StringUtils.isNotBlank(bean.getThird_c_name())){
            sql += " and third_c_name like '%"+bean.getThird_c_name()+"%'" ;
        }

        if(StringUtils.isNotBlank(bean.getThird_p_name())){
            sql += " and third_p_name like '%"+bean.getThird_p_name()+"%'" ;
        }

        if(StringUtils.isNotBlank(bean.getStart_time())){
            sql += " and DATE_FORMAT(create_time, '%Y-%m-%d') >= '"+bean.getStart_time()+"'" ;
        }

        if(StringUtils.isNotBlank(bean.getEnd_time())){
            sql += " and DATE_FORMAT(create_time, '%Y-%m-%d') <= '"+bean.getEnd_time()+"'" ;
        }
        sql += " order by create_time desc ";

        return sql;
    }
}
