import axios from 'axios';
import { resolve } from './resolve.js';

export async function addLoanToUser(user_id,loan_id)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.post(`http://localhost:8080/api/loan/add/${user_id}/${loan_id}`,{},{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

export async function updateUser(user_id,user)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.put(`http://localhost:8080/api/user/update/${user_id}`,user,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}