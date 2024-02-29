package com.appdevteam.agrofundxbackend.dto.response;

import com.appdevteam.agrofundxbackend.entity.Loan;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUserLoansLoansResponse {
    int id;
    Loan loan;
    String status;
}
