package com.appdevteam.agrofundxbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdevteam.agrofundxbackend.entity.UserInfo;


public interface UserInfoRepository extends JpaRepository<UserInfo,Integer> {
    Optional<UserInfo> findByName(String username);
}
