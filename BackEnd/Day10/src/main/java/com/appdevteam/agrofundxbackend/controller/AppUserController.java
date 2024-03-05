package com.appdevteam.agrofundxbackend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansLoansResponse;
import com.appdevteam.agrofundxbackend.entity.AppUser;
import com.appdevteam.agrofundxbackend.service.AppUserService;

import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;





@AllArgsConstructor
@RequestMapping("/api/user")
@RestController
public class AppUserController {

    private AppUserService auserv;

    @GetMapping("/get/{id}")
    public ResponseEntity<AppUser> getAppUser(@PathVariable int id) {
        return ResponseEntity.ok(auserv.getAppUser(id));
    }
    @GetMapping("/getAll")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<AppUser>> getMethodName() {
        return ResponseEntity.ok(auserv.getAllAppUser());
    }
    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<AppUser> updateUser(@PathVariable int id, @RequestBody  AppUser app_User) {
        app_User.setId(id);
        return ResponseEntity.ok(auserv.updateAppUser(app_User));
    }
    @GetMapping("/getloans/{userid}")
    public ResponseEntity<List<AppUserLoansLoansResponse>> getUserLoans(@PathVariable("userid") int userid) {
        return ResponseEntity.ok(auserv.getUserLoans(userid));
    }
}
