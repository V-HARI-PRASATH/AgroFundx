package com.appdevteam.agrofundxbackend.service;

import java.util.List;

import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansUsersResponse;
import com.appdevteam.agrofundxbackend.entity.Loan;

public interface LoanService {
    List<Loan> getAllLoan();
    Loan createLoan(Loan l);
    List<AppUserLoansUsersResponse> getLoanUsers(int loanid);
    Loan getLoan(int id);
    Loan updateLoan(Loan loan);
    String deleteLoan(int id);
}