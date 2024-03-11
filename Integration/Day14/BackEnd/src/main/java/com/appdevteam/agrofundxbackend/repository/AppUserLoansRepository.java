package com.appdevteam.agrofundxbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdevteam.agrofundxbackend.entity.AppUserLoans;
import java.util.List;

public interface AppUserLoansRepository extends JpaRepository<AppUserLoans,Integer>{
    List<AppUserLoans> findByStatus(String status);
}
