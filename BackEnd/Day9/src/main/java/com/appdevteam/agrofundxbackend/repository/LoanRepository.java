package com.appdevteam.agrofundxbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdevteam.agrofundxbackend.entity.Loan;

public interface LoanRepository extends JpaRepository<Loan,Integer> {
    
}
