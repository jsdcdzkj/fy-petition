package com.jsdc.petition.service.sys_;

import cn.dev33.satoken.secure.SaSecureUtil;
import cn.dev33.satoken.stp.StpUtil;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.mapper.sys_.SysUserMapper;
import com.jsdc.petition.service.BaseService;
import com.jsdc.petition.sys_.SysUser;
import com.jsdc.petition.sys_.SysUserRole;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
public class SysUserService extends BaseService<SysUser> {

    @Autowired
    private SysUserMapper sysUserMapper;

    @Autowired
    private SysUserRoleService sysUserRoleService;


    /**
     * 登录方法
     * Author wzn
     * Date 2023/3/7 14:09
     */
    public AjaxJson login(String userName, String password) {

        SysUser sysUser = this.getOne(new QueryWrapper<SysUser>().eq("is_del", "0"));
        JSONObject token = new JSONObject();
        if (sysUser != null) {
//            if ("1".equals(sysUser.getStatus())) {
//                return AjaxJson.getError("账号已锁定,请联系管理员！");
//            }
//            try {
//                password= URLDecoder.decode(password, "UTF-8");
//            } catch (Exception e) {
//                e.printStackTrace();
//            }

            if (StringUtils.hasText(password) && SaSecureUtil.md5(password).equals(sysUser.getPassword())) {
                sysUser.setPass(password);
                HashMap<Boolean, Object> map = verifyPass(sysUser);
                Boolean check = (Boolean) map.get("check");
                if (check) {
                    StpUtil.login(sysUser.getId());
                    token.put("jsdcToken", StpUtil.getTokenValue());
                    token.put("user", this.getUser());
//                    token.put("roles", StpUtil.getRoleList());
                    return AjaxJson.getSuccessData(token);
                } else {
                    return AjaxJson.getSuccessData(map);
                }

            } else {
                return AjaxJson.getError("密码错误！");
            }
        } else {
            return AjaxJson.getError("无此用户");
        }
    }


    /**
     * 获取用户
     *
     * @return
     */
    public SysUser getUser() {
        if (StpUtil.getLoginId() != null) {
            return this.getById((Serializable) StpUtil.getLoginId());
        }
        return null;
    }


    /**
     * 登出
     */
    public void logout() {
        StpUtil.logout();
    }


    /**
     * 新增用户
     *
     * @param sysUser
     * @return
     */
    public AjaxJson saveUser(SysUser sysUser) {
        SysUser currUser = getUser();

//        //唯一性校验
//        boolean check = this.checkOnly(sysUser);
//        if (!check) {
//            return AjaxJson.getError("身份证号码已存在,禁止重复添加！");
//        }
        if (null != sysUser.getId()) {
            if (!StringUtils.isEmpty(sysUser.getPassword())) {
                //加密
                if (!sysUser.getPassword().equals(sysUserMapper.selectById(sysUser.getId()).getPassword())) {
                    sysUser.setPassword(SaSecureUtil.md5(sysUser.getPassword()));
                }
            }

            //修改
            sysUser.setUpdate_user(currUser.getId());
            sysUser.setUpdate_time(new Date());
            sysUserRoleService.remove(new QueryWrapper<SysUserRole>().eq("user_id", sysUser.getId()));
        } else {
            //判断用户名是否重复
            List<SysUser> list = this.list(new QueryWrapper<SysUser>().eq("username", sysUser.getUsername()).eq("is_del", "0"));
            if (list != null && list.size() > 0) {
                return AjaxJson.getError("用户名重复！");
            }

            if (sysUser.getPassword().length() < 8) {
                throw new RuntimeException("密码长度至少需要8位!");
            }

//            //强密码校验
//            boolean isStrong = validateStrongPassword(sysUser.getPassword());
//
//            if (!isStrong) {
//                throw new RuntimeException("密码必须包含字母,数字以及特殊符号!");
//            }
            //加密
            sysUser.setPassword(SaSecureUtil.md5(sysUser.getPassword()));
            //新增
            sysUser.setCreate_user(currUser.getId());
            sysUser.setCreate_time(new Date());
            sysUser.setIs_del("0");
            sysUser.setStatus("0");
        }


        sysUser.insertOrUpdate();
        if (!StringUtils.isEmpty(sysUser.getPassword())) {
            //新增用户角色关联数据
            for (Integer roleId : sysUser.getRoleIds()) {
                SysUserRole sysUserRole = new SysUserRole();
                sysUserRole.setRole_id(roleId);
                sysUserRole.setUser_id(sysUser.getId());
                sysUserRole.insert();
            }
        }

        return AjaxJson.getSuccess();
    }


    // 正则表达式用于验证密码强度
    private static final String PASSWORD_REGEX =
            "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*()_+`\\-={}:\";'<>,.\\/]).{8,16}$";

    /**
     * 验证密码是否符合强密码规则
     *
     * @param password 待验证的密码
     * @return 如果密码符合规则返回true，否则返回false
     */
    public static boolean validateStrongPassword(String password) {
        return password.matches(PASSWORD_REGEX);
    }

    /**
     * 用户启用、禁用
     * Author wzn
     * Date 2023/3/24 13:58
     */
    public AjaxJson forbidden(SysUser sysUser) {
        SysUser currUser = getUser();

        //修改
        sysUser.setUpdate_user(currUser.getId());
        sysUser.setUpdate_time(new Date());
        sysUser.updateById();
        return AjaxJson.getSuccess();
    }

    /**
     * 身份证号唯一性校验
     * Author wzn
     * Date 2023/3/9 13:59
     */
    public boolean checkOnly(SysUser sysUser) {
        boolean checkOnly = true; //没有重复
        QueryWrapper<SysUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("card_no", sysUser.getCard_no());
        queryWrapper.eq("is_del", "0");
        List<SysUser> sysUserList = sysUserMapper.selectList(queryWrapper);
        if (!sysUserList.isEmpty()) {
            checkOnly = false;
            if (null != sysUser.getId()) {
                if (sysUser.getId().equals(sysUserList.get(0).getId())) {
                    checkOnly = true;
                }
            }
        }
        return checkOnly;
    }

    /**
     * 修改密码
     * Author wzn
     * Date 2023/3/8 8:57
     */
    public AjaxJson pass(SysUser sysUser) {

        SysUser currUser = null;

        if (StringUtils.isEmpty(sysUser.getPassword())) {
            currUser = getUser();
        } else {
            currUser = sysUserMapper.selectOne(new QueryWrapper<SysUser>().eq("is_del", "0"));
        }


        if (!currUser.getPassword().equals(SaSecureUtil.md5(sysUser.getTempPass()))) {
            return AjaxJson.getError("旧密码输入错误，请重新输入！");
        }

        if (sysUser.getPassword().length() < 8) {
            return AjaxJson.getError("密码长度至少需要8位!");
        }

//        //强密码校验
//        boolean isStrong = validateStrongPassword(sysUser.getPassword());
//
//        if (!isStrong) {
//            return AjaxJson.getError("密码必须包含字母,数字以及特殊符号!");
//        }
        currUser.setPassword((SaSecureUtil.md5(sysUser.getPassword())));
        currUser.updateById();
        return AjaxJson.getSuccess();
    }


    public HashMap<Boolean, Object> verifyPass(SysUser user) {
        HashMap map = new HashMap();
        map.put("check", true);

        if (null == user) {
            map.put("check", false);
            map.put("msg", "用户不存在！");
            return map;
        }

        if (user.getPassword().length() < 8) {
            map.put("check", false);
            map.put("msg", "密码长度至少需要8位!");
            return map;
        }

//        if (SaSecureUtil.md5(user.getCard_no().substring(user.getCard_no().length() - 6) + "@xzyb").equals(user.getPassword())) {
//            map.put("check", false);
//            map.put("msg", "初始密码,请修改!");
//            return map;
//        }
        //强密码校验
//        boolean isStrong = validateStrongPassword(user.getPass());
//
//        if (!isStrong) {
//            map.put("check", false);
//            map.put("msg", "密码必须包含字母,数字以及特殊符号!");
//            return map;
//        }

        return map;
    }


    /**
     * 用户列表
     * Author wzn
     * Date 2023/3/8 14:00
     */
    public Page<SysUser> selectUserList(SysUser sysUser) {
        Page<SysUser> page = new Page<>(sysUser.getPageNo(), sysUser.getPageSize());
        QueryWrapper<SysUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("is_del", "0");
        if (!"".equals(sysUser.getUsername()) && null != sysUser.getUsername()) {
            queryWrapper.like("username", sysUser.getUsername());
        }
        if (!"".equals(sysUser.getCard_no()) && null != sysUser.getCard_no()) {
            queryWrapper.eq("card_no", sysUser.getCard_no());
        }
        if (!"".equals(sysUser.getUser_type()) && null != sysUser.getUser_type()) {
            queryWrapper.eq("user_type", sysUser.getUser_type());
        }
        Page<SysUser> userPage = sysUserMapper.selectPage(page, queryWrapper);
        return userPage;
    }

    public void initPass() {
        QueryWrapper<SysUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("is_del", "0");
        List<SysUser> sysUserList = sysUserMapper.selectList(queryWrapper);
        for (SysUser s : sysUserList) {
            s.setPassword(SaSecureUtil.md5(s.getCard_no().substring(s.getCard_no().length() - 6) + "@xzyb"));
            s.updateById();
        }


    }


}
