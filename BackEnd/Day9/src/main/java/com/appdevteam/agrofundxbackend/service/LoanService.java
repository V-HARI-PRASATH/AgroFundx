package com.appdevteam.agrofundxbackend.service;

import java.util.List;

import com.appdevteam.agrofundxbackend.dto.request.LoanRequest;
import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansUsersResponse;
import com.appdevteam.agrofundxbackend.entity.Loan;

public interface LoanService {
    List<Loan> getAllLoan();
    Loan createLoan(LoanRequest lr);
    List<AppUserLoansUsersResponse> getLoanUsers(int loanid);
}
