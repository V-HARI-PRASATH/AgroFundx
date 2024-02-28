package com.appdevteam.agrofundxbackend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundxbackend.dto.request.LoanRequest;
import com.appdevteam.agrofundxbackend.entity.Loan;
import com.appdevteam.agrofundxbackend.service.LoanService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@AllArgsConstructor
@RestController
public class LoanController {

    private LoanService lserv;
    
    @GetMapping("/get")
    public ResponseEntity<List<Loan>> getMethodName() {
        return ResponseEntity.ok(lserv.getAllLoan());
    }

    @PostMapping("/post")
    public ResponseEntity<Loan> postMethodName(@RequestBody LoanRequest lr) {
        return ResponseEntity.ok(lserv.createLoan(lr));
    }
    
}
