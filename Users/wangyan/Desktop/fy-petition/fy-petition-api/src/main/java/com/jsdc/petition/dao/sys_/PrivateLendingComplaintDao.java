package com.jsdc.petition.dao.sys_;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.sys_.PrivateLendingComplaint;
import org.springframework.stereotype.Repository;

/**
 * 民事起诉状（民间借贷纠纷）
 */
@Repository
public class PrivateLendingComplaintDao {


    /**
     * 此方法为默认方法 请添加自己的逻辑代码
     *
     * @param page
     * @param bean
     * @return
     */
    public String getEntityList(Page page, PrivateLendingComplaint bean) {
        String sql = " SELECT *  " +
                " FROM private_lending_complaint  " +
                " WHERE " +
                " 1=1 ";

        return sql;
    }
}
