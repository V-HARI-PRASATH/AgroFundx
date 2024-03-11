import axios from 'axios';
import { resolve } from './resolve.js';

export async function getUserLoans(id)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.get(`http://localhost:8080/api/user/getloans/${id}`,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

export async function getLoan(id)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.get(`http://localhost:8080/api/loan/get/${id}`,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

export async function getAllLoans()
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.get(`http://localhost:8080/api/loan/getAll`,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}

export async function getUser(id)
{
    const token=localStorage.getItem('JWTtoken');
    return resolve(axios.get(`http://localhost:8080/api/user/get/${id}`,{headers:{"Authorization": `Bearer ${token}`,},}).then(res=>res.data));
}