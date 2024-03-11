package com.appdevteam.agrofundxbackend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundxbackend.entity.AppUserLoans;
import com.appdevteam.agrofundxbackend.repository.AppUserLoansRepository;
import com.appdevteam.agrofundxbackend.service.AppUserLoansService;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;




@AllArgsConstructor
@RestController
@RequestMapping("/api/loan")
@CrossOrigin(origins = "http://localhost:5173/")
public class AppUserLoansController {

    @Autowired
    AppUserLoansRepository aulr;

    private AppUserLoansService aulserv;

    @PostMapping("/add/{userid}/{loanid}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<AppUserLoans> postMethodName(@PathVariable("userid") int userid,@PathVariable("loanid") int loanid) {
        
        return ResponseEntity.ok(aulserv.addLoanToUser(userid, loanid));
    }

    @PutMapping("/updatestatus/{id}/{newStatus}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String putMethodName(@PathVariable int id,@PathVariable String newStatus) {
        AppUserLoans aul=aulr.findById(id).orElse(null);
        aul.setStatus(newStatus);
        aulr.save(aul);
        return "Updated";
    }
    
    @GetMapping("/getPendingLoans")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<AppUserLoans>> getPendingLoans()
    {
        return ResponseEntity.ok(aulr.findByStatus("Pending"));
    }
    
}
