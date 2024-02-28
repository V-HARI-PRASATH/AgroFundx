package com.appdevteam.agrofundxbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AppUserLoans {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @ManyToOne
    AppUser appuser;

    @ManyToOne
    Loan loan;

    String status;
}
