package com.appdevteam.agrofundxbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appdevteam.agrofundxbackend.dto.request.AppUserRequest;
import com.appdevteam.agrofundxbackend.entity.AppUser;
import com.appdevteam.agrofundxbackend.repository.AppUserRepository;
import com.appdevteam.agrofundxbackend.service.AppUserService;
import java.util.List;

@Service
public class AppUserServiceImpl implements AppUserService {
    @Autowired
    AppUserRepository aurepo;
    
    @Override
    public List<AppUser> getAllAppUser()
    {
        return aurepo.findAll();
    }
    @Override
    public AppUser createAppUser(AppUserRequest aur)
    {
        AppUser au=new AppUser();
        au.setUsername(aur.getUsername());
        au.setEmail(aur.getEmail());
        au.setPassword(aur.getPassword());
        return aurepo.save(au);
    }
}
