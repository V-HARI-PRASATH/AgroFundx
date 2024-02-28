package com.appdevteam.agrofundxbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdevteam.agrofundxbackend.entity.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser,Integer> {
    
}
