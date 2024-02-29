package com.appdevteam.agrofundxbackend.mapper;

import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansLoansResponse;
import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansUsersResponse;
import com.appdevteam.agrofundxbackend.entity.AppUserLoans;

public class AppUserLoansMapper {
    public static AppUserLoansLoansResponse mapToAppUserLoansLoansResponse(AppUserLoans aul)
    {
        return new AppUserLoansLoansResponse(aul.getId(),aul.getLoan(),aul.getStatus());
    }
    public static AppUserLoansUsersResponse mapToAppUserLoansUsersResponse(AppUserLoans aul)
    {
        return new AppUserLoansUsersResponse(aul.getId(),aul.getAppuser(),aul.getStatus());
    }
}
