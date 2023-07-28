import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import * as SecureStorage from 'expo-secure-store';

// interface AuthProps {
//     authState?: {token: string | null, authenticated: boolean | null };
//     onRegister?: (email: string, userName: string, password: string) => Promise<any>;
//     onLogin?: (email: string, userName: string | null, password: string) => Promise<any>;
//     onLogout?: () => Promise<any>;
// }


export const TOKEN_KEY = 'my-jwt';
export const API_URI = 'localhost:5000'

const AuthContext = createContext({});
export const useAuth = () =>  {
    return useContext(AuthContext)
};

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({token: '', authenticated: false})

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStorage.getItemAsync(TOKEN_KEY);

            if(token){
                setAuthState({
                    token: token, 
                    authenticated: true
                })
            }
        }
        loadToken()
    }, [])

    // REGISTER --------------------------------
    const register = async(email, password ) => {
        try {
            return await axios.post(`${API_URI}/signup`, {email, password})
        }catch(e) {
            return {error: true, msg: (e).response.data.text};
        }
    }


    // LOGIN --------------------------------
    const login = async(email, password ) => {
        try {
            const result = await axios.post(`${API_URI}/signin`, {email, password})
            setAuthState({
                token: result.data.accessToken, 
                authenticated: true
            })
            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`

            await SecureStorage.setItemAsync(TOKEN_KEY, result.data.accessToken)
            return result;

        }catch(e) {
            return {error: true, msg: (e).response.data.text};
        }
    }

    // LOGOUT --------------------------------
    const logout = async () => {
        await SecureStorage.deleteItemAsync(TOKEN_KEY);
        axios.defaults.headers.common['Authorization'] = '';
        setAuthState({
            token: null, 
            authenticated: false
        })
    }
    const contextValue = {
        authState,
        register,
        login,
        logout,
      };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}