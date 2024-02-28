package com.appdevteam.agrofundxbackend.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoanRequest {
    String name;
    String description;
    float rateOfIntrest;
    int minLoanAmt;
    int maxLoanAmt;
    int minLoanPeriod;
    int maxLoanPeriod;
}
