package com.jsdc.petition.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.alibaba.fastjson.JSONObject;
import com.jsdc.petition.service.sys_.SysUserService;
import com.jsdc.petition.sys_.SysUser;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/")
public class MainController {
    @Autowired
    private SysUserService sysUserService;

    /**
     * 登录方法
     *
     * @return
     */
    @RequestMapping("/login")
    public AjaxJson login(@RequestBody SysUser sysUser) {

        return sysUserService.login(sysUser.getUsername(), sysUser.getPassword());
    }


    /**
     * 获取用户
     *
     * @return
     */
    @RequestMapping("/userInfo")
    public AjaxJson userInfo() {
        SysUser sysUser = sysUserService.getUser();
        JSONObject result = new JSONObject();
        result.put("permissions", StpUtil.getRoleList());
        result.put("username", sysUser.getUsername());
        return AjaxJson.getSuccessData(result);
    }


    /**
     * 登出
     * Author wzn
     * Date 2023/3/7 14:11
     */
    @RequestMapping("/logout")
    public AjaxJson logout() {
        sysUserService.logout();
        return AjaxJson.getSuccess();
    }


}
