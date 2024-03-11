package com.appdevteam.agrofundxbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appdevteam.agrofundxbackend.entity.AppUser;
import com.appdevteam.agrofundxbackend.entity.AppUserLoans;
import com.appdevteam.agrofundxbackend.entity.Loan;
import com.appdevteam.agrofundxbackend.repository.AppUserLoansRepository;
import com.appdevteam.agrofundxbackend.repository.AppUserRepository;
import com.appdevteam.agrofundxbackend.repository.LoanRepository;
import com.appdevteam.agrofundxbackend.service.AppUserLoansService;

@Service
public class AppUserLoansServiceImpl implements AppUserLoansService{
    @Autowired
    AppUserLoansRepository aulrepo;
    @Autowired
    AppUserRepository aurepo;
    @Autowired
    LoanRepository lrepo;

    @Override
    public AppUserLoans addLoanToUser(int userid,int loanid)
    {
        AppUserLoans aul=new AppUserLoans();
        AppUser au=aurepo.findById(userid).orElse(null);
        Loan l=lrepo.findById(loanid).orElse(null);
        if(au!=null && l!=null)
        {
            aul.setAppuser(au);
            aul.setLoan(l);
            aul.setStatus("Pending");
            return aulrepo.save(aul);
        }
        else
        {
            return null;
        } 
    }
}
