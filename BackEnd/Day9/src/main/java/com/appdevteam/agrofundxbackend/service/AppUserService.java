package com.appdevteam.agrofundxbackend.service;
import java.util.List;

import com.appdevteam.agrofundxbackend.dto.request.AppUserRequest;
import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansLoansResponse;
import com.appdevteam.agrofundxbackend.entity.AppUser;

public interface AppUserService {
    List<AppUser> getAllAppUser();
    AppUser createAppUser(AppUserRequest au);
    List<AppUserLoansLoansResponse> getUserLoans(int userid);
}
