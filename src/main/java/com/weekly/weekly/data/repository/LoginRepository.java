package com.weekly.weekly.data.repository;

import com.weekly.weekly.data.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoginRepository extends JpaRepository<User, String> {

    List<User> findUserByIdAndPwd(String id, String pwd);

}
