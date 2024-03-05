package com.appdevteam.agrofundxbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansLoansResponse;
import com.appdevteam.agrofundxbackend.entity.AppUser;
import com.appdevteam.agrofundxbackend.entity.AppUserLoans;
import com.appdevteam.agrofundxbackend.mapper.AppUserLoansMapper;
import com.appdevteam.agrofundxbackend.repository.AppUserRepository;
import com.appdevteam.agrofundxbackend.service.AppUserService;
import java.util.List;
import java.util.ArrayList;

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
    public List<AppUserLoansLoansResponse> getUserLoans(int userid)
    {
        AppUser au=aurepo.findById(userid).orElse(null);
        if(au!=null)
        {
            List<AppUserLoans> laul= au.getAppUserLoans();
            List<AppUserLoansLoansResponse> laullr=new ArrayList<>();
            for(AppUserLoans aul:laul)
            {
                AppUserLoansLoansResponse aullr=AppUserLoansMapper.mapToAppUserLoansLoansResponse(aul);
                laullr.add(aullr);
            }
            return laullr;
        }
        return null;
    }
    @Override
    public AppUser updateAppUser(AppUser app_User)
    {
        return aurepo.save(app_User);
    }
    @Override
    public AppUser getAppUser(int id)
    {
        return aurepo.findById(id).orElse(null);
    }
}
