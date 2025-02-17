package com.weekly.weekly.service;

import com.weekly.weekly.config.constant.ApiConstants;
import com.weekly.weekly.data.domain.User;
import com.weekly.weekly.data.dto.ResponseData;
import com.weekly.weekly.data.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    LoginRepository loginRepository;

    public User getUserInfo(String loginId, String loginPwd){
        User result = new User();
        List<User> userInfo = loginRepository.findUserByIdAndPwd(loginId, loginPwd);
        if(!userInfo.isEmpty()){
            result = userInfo.get(0);
        }

        return result;
    }
    public boolean saveUserInfo(User userInfo){
        boolean result = false;
        User saveResult = loginRepository.save(userInfo);
        if(saveResult.getId().equals(userInfo.getId())){
            result = true;
        }

        return result;
    }


    @Transactional
    public User editUserInfo(User userInfo){

        User editUser = loginRepository.findById(userInfo.getId()).get();

        if(editUser.getId().equals(userInfo.getId())){
            if(!editUser.getPwd().equals(userInfo.getPwd())){
                editUser.setPwd(userInfo.getPwd());
            }else if(!editUser.getName().equals(userInfo.getName())){
                editUser.setName(userInfo.getName());
            }else if(!editUser.getBirth().equals(userInfo.getBirth())){
                editUser.setBirth(userInfo.getBirth());
            }else if(!editUser.getDepart().equals(userInfo.getDepart())){
                editUser.setDepart(userInfo.getDepart());
            }else if(!editUser.getRank().equals(userInfo.getRank())){
                editUser.setRank(userInfo.getRank());
            }else if(!editUser.getEmail().equals(userInfo.getEmail())){
                editUser.setEmail(userInfo.getEmail());
            }else if(!editUser.getTel().equals(userInfo.getTel())){
                editUser.setTel(userInfo.getTel());
            }
        }

        return editUser;
    }

}
