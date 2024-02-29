package com.appdevteam.agrofundxbackend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundxbackend.dto.request.LoanRequest;
import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansUsersResponse;
import com.appdevteam.agrofundxbackend.entity.Loan;
import com.appdevteam.agrofundxbackend.service.LoanService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;






@AllArgsConstructor
@RequestMapping("/app")
@RestController
public class LoanController {

    private LoanService lserv;
    
    @GetMapping("/get")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<Loan>> getMethodName() {
        return ResponseEntity.ok(lserv.getAllLoan());
    }

    @PostMapping("/post")
    public ResponseEntity<Loan> postMethodName(@RequestBody LoanRequest lr) {
        return ResponseEntity.ok(lserv.createLoan(lr));
    }
    
    @GetMapping("/getusers/{loanid}")
    public ResponseEntity<List<AppUserLoansUsersResponse>> getMethodName(@PathVariable("loanid") int loanid) {
        return ResponseEntity.ok(lserv.getLoanUsers(loanid));
    }
    
}
