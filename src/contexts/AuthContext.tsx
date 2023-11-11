import { JwtPayload, jwtDecode } from "jwt-decode";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { ROLES } from "../constants/Roles";

interface User {
    id: string;
    name: string;
    roles: string[];
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    signIn(credentials: SignInCredentials): Promise<void>;
    user: User | undefined;
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface LoginResponse {
    token: string;
}

interface TokenPayload extends JwtPayload {
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": Array<keyof typeof ROLES> | keyof typeof ROLES;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {

    destroyCookie(undefined, 'proj.token');

    setTimeout(() => {
        window.location.href = '/';
    }, 1000);
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [ user, setUser ] = useState<User | undefined>(() => {

        const { 'proj.token': acessToken } = parseCookies();

        if (acessToken) {

            let { 
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": name,
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": id,
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": roles
            } = jwtDecode<TokenPayload>(acessToken);

            if (typeof roles === 'string')
                roles = [roles]

            return {
                id,
                name,
                roles
            }
        }

        return undefined;
    });

    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInCredentials) {
        
        await api.post<LoginResponse>('login', {
            email,
            password
        })
        .then((response) => {

            const { token } = response.data;

            let isMemberOnly = false;

            setCookie(undefined, 'proj.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            });


            let { 
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": name,
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": id,
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": roles
            } = jwtDecode<TokenPayload>(token);

            if (typeof roles === 'string') {
                roles = [roles];
                isMemberOnly = true;
            }

            setUser({
                id,
                name,
                roles: roles as Array<keyof typeof ROLES>
            })

            if (isMemberOnly)
                window.location.href = '/teste';
            else
                window.location.href = '/manager';
        })
        .catch((err: AxiosError) => {
            toast.error(err?.message);
        })
        
        
    }

    return (
        <AuthContext.Provider value={{signIn, isAuthenticated, user}}>
            {children}
        </AuthContext.Provider>
    );
}