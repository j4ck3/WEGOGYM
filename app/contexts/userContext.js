import { createContext, useContext, useState } from "react";
import axios from 'axios';
export const API_URI = 'http://10.0.2.2:5000'
const UserContext = createContext({});

export const useUserContext = () => {
    return useContext(UserContext)
};


export const UserContextProvider = ({ children }) => {

    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        try {
            const res = await axios.get(`${API_URI}/users/`);
            setUsers(res.data);
        } catch (error) {
            console.error('An error occurred:', error);
            return { error: true, msg: error };
        }
    }

    return <UserContext.Provider value={{ getAllUsers, users }}>{children}</UserContext.Provider>
}