package com.weekly.weekly.controller;

import com.weekly.weekly.config.constant.ApiConstants;
import com.weekly.weekly.data.domain.User;
import com.weekly.weekly.service.LoginService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "user", produces = ApiConstants.Common.API_PRODUCES)
@AllArgsConstructor
public class LoginController {

    @Autowired
    LoginService loginService;

    @ApiOperation(value = "USER 정보 조회")
    @GetMapping("/info")
    public ResponseEntity<User> getUserInfo(
            @RequestParam(value = "loginId", defaultValue = "")String loginId,
            @RequestParam(value = "loginPwd", defaultValue = "") String loginPwd
    ){
        return ResponseEntity.ok(loginService.getUserInfo(loginId,loginPwd));
    }

    @ApiOperation(value = "회원가입")
    @PostMapping("/info")
    public ResponseEntity<Boolean> saveUserInfo(
            @RequestBody User userInfo){
        return ResponseEntity.ok(loginService.saveUserInfo(userInfo));
    }

    @ApiOperation(value = "비밀번호 변경")
    @PutMapping("/info")
    public ResponseEntity<User> editUserInfo(
            @RequestBody User userInfo
    ){

        return ResponseEntity.ok(loginService.editUserInfo(userInfo));
    }
}
