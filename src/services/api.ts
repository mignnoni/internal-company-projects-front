import axios, { AxiosError } from "axios";
import { parseCookies } from 'nookies';
import { signOut } from "../contexts/AuthContext"

let cookies = parseCookies();

export const api = axios.create({
    baseURL: 'https://localhost:7091/',
    headers: {
        Authorization: `Bearer ${cookies['proj.token']}`
    }
})

api.interceptors.response.use(response => { 
    return response; 
}, (error: AxiosError) => {

    if (error?.response?.status == 401)
        signOut();

    return Promise.reject(error);

});