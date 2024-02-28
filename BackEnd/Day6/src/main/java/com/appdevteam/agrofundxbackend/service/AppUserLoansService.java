package com.appdevteam.agrofundxbackend.service;

import com.appdevteam.agrofundxbackend.entity.AppUserLoans;

public interface AppUserLoansService {
    AppUserLoans addLoanToUser(int userid,int loanid);
}
