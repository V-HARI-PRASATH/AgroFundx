package com.appdevteam.agrofundxbackend.service;
import java.util.List;

import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansLoansResponse;
import com.appdevteam.agrofundxbackend.entity.AppUser;

public interface AppUserService {
    List<AppUser> getAllAppUser();
    List<AppUserLoansLoansResponse> getUserLoans(int userid);
    AppUser updateAppUser(AppUser app_User);
    AppUser getAppUser(int id);
}
