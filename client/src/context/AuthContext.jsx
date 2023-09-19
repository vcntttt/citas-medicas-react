import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import  Cookies  from "js-cookie";
export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const signUp = async (user) => {
        try{
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch(error){
            console.log(error.response);
            setErrors(error.response.data);
        }
    }
    const signIn = async (user) => {
        try{
            const res = await loginRequest(user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch(error){
            console.log(error.response);
            setErrors(error.response.data);
        }
    }

    useEffect(() => {
        async function checkLogin(){
            const cookies = Cookies.get();
            if (cookies.token) {
                try {
                const res = await verifyTokenRequest(cookies.token)
                console.log(res)
                    if (res.data){
                        setUser(res.data);
                        setIsAuthenticated(true);
                    }else {
                        setIsAuthenticated(false);
                    }
                } catch (error) {
                    setIsAuthenticated(false);
                    setUser(null);
                }
            }
        }
        checkLogin();
    },[]);
    return (
        <AuthContext.Provider value={{signUp, user, isAuthenticated, errors, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}