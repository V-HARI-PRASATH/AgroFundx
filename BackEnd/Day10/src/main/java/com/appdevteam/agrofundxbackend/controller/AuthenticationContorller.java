package com.appdevteam.agrofundxbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundxbackend.dto.AuthRequest;
import com.appdevteam.agrofundxbackend.entity.Admin;
import com.appdevteam.agrofundxbackend.entity.AppUser;
import com.appdevteam.agrofundxbackend.entity.UserInfo;
import com.appdevteam.agrofundxbackend.repository.AdminRepository;
import com.appdevteam.agrofundxbackend.repository.AppUserRepository;
import com.appdevteam.agrofundxbackend.repository.UserInfoRepository;
import com.appdevteam.agrofundxbackend.service.JwtService;

@RequestMapping("/auth")
@RestController
public class AuthenticationContorller {

    @Autowired
    private AppUserRepository aurepo;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private AdminRepository adminrepo;

    @Autowired
    private AppUserRepository appUserRepository;

    @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        UserInfo existingUserInfo=repository.findByName(userInfo.getName()).orElse(null);
        if(existingUserInfo!=null)
        {
            return "User Already Exists";
        }
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        if(userInfo.getRoles().equals("ADMIN"))
        {
            Admin admin=new Admin();
            admin.setName(userInfo.getName());
            admin.setUserinfo(userInfo);
            adminrepo.save(admin);
        }
        else if(userInfo.getRoles().equals("USER"))
        {
            AppUser app_user=new AppUser();
            app_user.setName(userInfo.getName());
            app_user.setUserinfo(userInfo);
            appUserRepository.save(app_user);
        }
        return "user added to system ";
    }
    
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }

    @DeleteMapping("/delete")
    public String  deleteUser()
    {
        Authentication curUser= SecurityContextHolder.getContext().getAuthentication();
        String curName=curUser.getName();
        UserInfo userInfo=repository.findByName(curName).orElse(null);
        if(userInfo.getRoles().equals("ADMIN"))
        {
            return "ADMIN can't Deleted";
        }
        AppUser appUser=aurepo.findByUserinfo(userInfo);
        if(!appUser.getAppUserLoans().isEmpty())
        {
            return "User has Pending Loans";
        }
        aurepo.deleteById(appUser.getId());
        repository.deleteById(userInfo.getId());
        return "User Delete!";
    }
}
