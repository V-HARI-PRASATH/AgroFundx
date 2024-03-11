package com.appdevteam.agrofundxbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdevteam.agrofundxbackend.entity.AppUser;
import com.appdevteam.agrofundxbackend.entity.UserInfo;



public interface AppUserRepository extends JpaRepository<AppUser,Integer> {
    AppUser findByUserinfo(UserInfo userinfo);
}
