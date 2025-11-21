package com.jsdc.petition.dao.sys_;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.sys_.DivorceDebt;
import org.springframework.stereotype.Repository;

@Repository
public class DivorceDebtDao {


    /**
     * 此方法为默认方法 请添加自己的逻辑代码
     * @param page
     * @param bean
     * @return
     */
    public String getEntityList(Page page, DivorceDebt bean) {
        String sql = " SELECT *  "+
                " FROM divorce_dept  "+
                " WHERE "+ 
                " 1=1 ";

        return sql;
    }
}
