package com.appdevteam.agrofundxbackend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundxbackend.entity.AppUserLoans;
import com.appdevteam.agrofundxbackend.service.AppUserLoansService;

import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@AllArgsConstructor
@RestController
public class AppUserLoansController {

    private AppUserLoansService aulserv;

    @PostMapping("/add/{userid}/{loanid}")
    public ResponseEntity<AppUserLoans> postMethodName(@PathVariable("userid") int userid,@PathVariable("loanid") int loanid) {
        
        return ResponseEntity.ok(aulserv.addLoanToUser(userid, loanid));
    }
    
    
}
