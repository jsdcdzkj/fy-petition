package com.jsdc.petition.controller.sys_;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jsdc.petition.sys_.SysUser;
import com.jsdc.petition.service.sys_.SysUserService;
import com.jsdc.petition.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/sysUser")
public class SysUserController {

    @Autowired
    private SysUserService sysUserService;






    /**
     * 保存
     * @param sysUser
     * @return
     */
    @PostMapping("/save")
    public AjaxJson saveUser(@RequestBody SysUser sysUser){
        return sysUserService.saveUser(sysUser);
    }


    /**
    *用户启用
    * Author wzn
    * Date 2023/3/24 14:00
    */
    @PostMapping("/forbidden")
    public AjaxJson forbidden(@RequestBody SysUser sysUser){
        return sysUserService.forbidden(sysUser);
    }


    /**
     * 修改密码
     * @param sysUser
     * @return
     */
    @PostMapping("/pass")
    public AjaxJson pass(@RequestBody SysUser sysUser){
        return sysUserService.pass(sysUser);
    }


    /**
     *登录后校验密码
     * @author wzn
     * @date 2024/6/3 15:48
     */
//    @PostMapping("/verifyPass")
//    public AjaxJson verifyPass(@RequestBody SysUser user){
//        return AjaxJson.getSuccess(sysUserService.verifyPass(user));
//    }

    /**
     * 删除用户
     * @param userId
     * @return
     */
    @PostMapping("/delUser")
    public AjaxJson delUser(Integer userId){
        SysUser sysUser = sysUserService.getById(userId);
        if(sysUser != null){
            sysUser.setIs_del("1");
            sysUser.updateById();
        }else {
            return AjaxJson.getError("无此用户数据！");
        }
        return AjaxJson.getSuccess();
    }






    /**
    *用户列表
    * Author wzn
    * Date 2023/3/8 14:00
    */
    @PostMapping("/getList")
    public AjaxJson getList(@RequestBody SysUser sysUser){
        Page<SysUser> userPage = sysUserService.selectUserList(sysUser);
        return AjaxJson.getSuccessData(userPage);
    }




    /**
     * 初始化所有账号的密码 身份证+@0516
     * @author wzn
     * @date 2024/6/3 16:07
     */
    @GetMapping("/initPass")
    public AjaxJson initPass(){
        sysUserService.initPass() ;
        return AjaxJson.getSuccess();
    }

}

