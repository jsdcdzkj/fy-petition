package com.jsdc.petition.dao.sys_;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.sys_.PropertyComplaint;
import org.springframework.stereotype.Repository;

/**
 * 民事起诉状（物业服务合同纠纷）
 */
@Repository
public class PropertyComplaintDao {


    /**
     * 此方法为默认方法 请添加自己的逻辑代码
     *
     * @param page
     * @param bean
     * @return
     */
    public String getEntityList(Page page, PropertyComplaint bean) {
        String sql = " SELECT *  " +
                " FROM property_complaint  " +
                " WHERE " +
                " 1=1 ";

        return sql;
    }
}
