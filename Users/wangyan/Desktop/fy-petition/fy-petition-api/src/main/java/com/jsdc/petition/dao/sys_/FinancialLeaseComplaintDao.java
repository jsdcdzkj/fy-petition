package com.jsdc.petition.dao.sys_;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.sys_.FinancialLeaseComplaint;
import org.springframework.stereotype.Repository;

/**
 * 民事起诉状（融资租赁合同纠纷）
 */
@Repository
public class FinancialLeaseComplaintDao {


    /**
     * 此方法为默认方法 请添加自己的逻辑代码
     *
     * @param page
     * @param bean
     * @return
     */
    public String getEntityList(Page page, FinancialLeaseComplaint bean) {
        String sql = " SELECT *  " +
                " FROM financial_lease_complaint  " +
                " WHERE " +
                " 1=1 ";

        return sql;
    }
}
