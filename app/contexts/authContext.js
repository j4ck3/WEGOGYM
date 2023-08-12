import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import * as SecureStorage from 'expo-secure-store';
import { useSegments, useRouter } from 'expo-router';
export const TOKEN_KEY = 'my-jwt';
export const API_URI = 'http://10.0.2.2:5000'

const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext)
};

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
      const inAuthGroup = segments[0] === '(auth)';
  
      if (
        // If the user is not signed in and the initial segment is not anything in the auth group.
        !user &&
        !inAuthGroup
      ) {
        // Redirect to the sign-in page.
        router.replace('/sign-in');
      } else if (user && inAuthGroup) {
        // Redirect away from the sign-in page.
        router.replace('/(tabs)/home');
      }
    }, [user, segments]);
  }
  

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({ token: '', authenticated: false})
    const [user, setUser] = useState({}| null);

    useProtectedRoute(user);

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStorage.getItemAsync(TOKEN_KEY);

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated: true,
                })
                setUser({email: 'sdf'})
            }
        }
        loadToken()
    }, [])

    const update = async (email, userName, description) => {
        const res = await axios.put(`${API_URI}/users/${user._id}`, { email, userName, description});
        return res
    };


    // REGISTER --------------------------------
    const signup = async (email, password, userName) => {
        const res = await axios.post(`${API_URI}/authentication/signup`, { email, userName, password });
        return res; 
    };


    // LOGIN --------------------------------
    const signin = async (email, password) => {
        try {
            const res = await axios.post(`${API_URI}/authentication/signin`, { email, password })
            setAuthState({
                token: res.data.accessToken,
                authenticated: true
            })
            setUser({
                email: email,
                userName: res.data.user.userName
            })

            await SecureStorage.setItemAsync(TOKEN_KEY, res.data.accessToken)

        } catch (error) {
            return { error: true, msg: error.response.data};
        } finally {
            // Set the headers, even if an error occurred in the try block.
            // This ensures that the headers are set correctly in both success and error cases.
            axios.defaults.headers.common['Authorization'] = `Bearer ${authState.token || ''}`;
    
            // Update the authentication state even if an error occurred in the try block.
            setAuthState((prevState) => ({
                ...prevState,
                authenticated: !!prevState.token
            }));
        }
    }

    // LOGOUT --------------------------------
    const signout = async () => {
        await SecureStorage.deleteItemAsync(TOKEN_KEY);
        axios.defaults.headers.common['Authorization'] = '';
        setAuthState({
            token: null,
            authenticated: false
        })
        setUser(null)
    }

    return <AuthContext.Provider value={{authState, user, signup, signin, signout, update}}>{children}</AuthContext.Provider>
}