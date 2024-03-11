package com.appdevteam.agrofundxbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.appdevteam.agrofundxbackend.entity.UserInfo;


public interface UserInfoRepository extends JpaRepository<UserInfo,Integer> {
    Optional<UserInfo> findByName(String username);
    @Transactional
    void deleteByName(String username);
}
