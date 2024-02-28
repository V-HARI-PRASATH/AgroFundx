package com.appdevteam.agrofundxbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdevteam.agrofundxbackend.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin,Integer> {
    
}
