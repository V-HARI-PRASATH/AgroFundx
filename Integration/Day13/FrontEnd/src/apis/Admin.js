import axios from 'axios';
import { resolve } from './resolve.js';

export async function getAllUsers()
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.get('http://localhost:8080/api/user/getAll',{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

export async function createLoan(loan)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.post(`http://localhost:8080/api/loan/create`,loan,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

export async function deleteLoan(id)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.delete(`http://localhost:8080/api/loan/delete/${id}`,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

export async function updateLoan(id,loan)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.put(`http://localhost:8080/api/loan/update/${id}`,loan,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));

}

export async function updateLoanStatus(id,status)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.put(`http://localhost:8080/api/loan/updatestatus/${id}/${status}`,{},{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));

}
export async function getPendingLoans()
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.get(`http://localhost:8080/api/loan/getPendingLoans`,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));

}

//getallusersoftheloanbyid