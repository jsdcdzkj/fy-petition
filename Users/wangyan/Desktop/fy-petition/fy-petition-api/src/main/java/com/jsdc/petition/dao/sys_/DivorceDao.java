package com.jsdc.petition.dao.sys_;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.sys_.Divorce;
import org.springframework.stereotype.Repository;

@Repository
public class DivorceDao {


    /**
     * 此方法为默认方法 请添加自己的逻辑代码
     * @param page
     * @param bean
     * @return
     */
    public String getEntityList(Page page, Divorce bean) {
        String sql = " SELECT *  "+
                " FROM divorce  "+
                " WHERE "+ 
                " 1=1 ";

        return sql;
    }
}
