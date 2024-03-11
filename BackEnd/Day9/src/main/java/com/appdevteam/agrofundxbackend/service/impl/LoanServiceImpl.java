package com.appdevteam.agrofundxbackend.service.impl;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appdevteam.agrofundxbackend.dto.request.LoanRequest;
import com.appdevteam.agrofundxbackend.dto.response.AppUserLoansUsersResponse;
import com.appdevteam.agrofundxbackend.entity.AppUserLoans;
import com.appdevteam.agrofundxbackend.entity.Loan;
import com.appdevteam.agrofundxbackend.mapper.AppUserLoansMapper;
import com.appdevteam.agrofundxbackend.repository.LoanRepository;
import com.appdevteam.agrofundxbackend.service.LoanService;

@Service
public class LoanServiceImpl implements LoanService {

    @Autowired
    LoanRepository lrepo;

    @Override
    public List<Loan> getAllLoan()
    {
        return lrepo.findAll();
    }
    @Override
    public Loan createLoan(LoanRequest lr)
    {
        Loan l=new Loan();
        l.setName(lr.getName());
        l.setDescription(lr.getDescription());
        // l.setMaxLoanAmt(lr.getMaxLoanAmt());
        // l.setMaxLoanPeriod(lr.getMinLoanPeriod());
        // l.setMinLoanAmt(lr.getMinLoanAmt());
        // l.setMinLoanPeriod(lr.getMinLoanPeriod());
        // l.setRateOfIntrest(lr.getRateOfIntrest());
        return lrepo.save(l);
    }
    @Override
    public List<AppUserLoansUsersResponse> getLoanUsers(int loanid)
    {
        Loan l=lrepo.findById(loanid).orElse(null);
        if(l!=null)
        {
            List<AppUserLoans> laul=l.getAppUserLoans();
            List<AppUserLoansUsersResponse> laulur=new ArrayList<>();
            for(AppUserLoans aul:laul)
            {
                laulur.add(AppUserLoansMapper.mapToAppUserLoansUsersResponse(aul));
            }
            return laulur;
        }
        return null;
    }
}