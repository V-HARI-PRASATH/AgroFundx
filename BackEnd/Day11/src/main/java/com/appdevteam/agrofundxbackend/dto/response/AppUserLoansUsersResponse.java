package com.appdevteam.agrofundxbackend.dto.response;

import com.appdevteam.agrofundxbackend.entity.AppUser;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUserLoansUsersResponse {
    int id;
    AppUser appuser;
    String status; 
}
