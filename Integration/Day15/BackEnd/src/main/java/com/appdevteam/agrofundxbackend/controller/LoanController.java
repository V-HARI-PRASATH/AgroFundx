package com.appdevteam.agrofundxbackend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansUsersResponse;
import com.appdevteam.agrofundxbackend.entity.Loan;
import com.appdevteam.agrofundxbackend.service.LoanService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;








@AllArgsConstructor
@RequestMapping("/api/loan")
@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class LoanController {

    private LoanService lserv;
    
    @GetMapping("/getAll")
    public ResponseEntity<List<Loan>> getMethodName() {
        return ResponseEntity.ok(lserv.getAllLoan());
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Loan> getLoan(@PathVariable int id) {
        return ResponseEntity.ok(lserv.getLoan(id));
    }
    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Loan> putMethodName(@PathVariable int id, @RequestBody Loan loan) {
        loan.setId(id);
        return ResponseEntity.ok(lserv.updateLoan(loan));
    }

    @PostMapping("/create")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Loan> postMethodName(@RequestBody Loan l) {
        return ResponseEntity.ok(lserv.createLoan(l));
    }
    
    @GetMapping("/getusers/{loanid}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<AppUserLoansUsersResponse>> getMethodName(@PathVariable("loanid") int loanid) {
        return ResponseEntity.ok(lserv.getLoanUsers(loanid));
    }
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String deleteLoan(@PathVariable int id)
    {
        return lserv.deleteLoan(id);
    }
    
}
