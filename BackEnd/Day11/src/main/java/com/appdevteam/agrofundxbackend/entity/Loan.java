package com.appdevteam.agrofundxbackend.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String name;
    String description;
    float rateOfIntrest;
    int minLoanAmt;
    int maxLoanAmt;
    int minLoanPeriod;
    int maxLoanPeriod;

    @OneToMany(mappedBy = "loan")
    @JsonIgnore
    List<AppUserLoans> appUserLoans;
}
