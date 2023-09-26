import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest} from "../api/auth";
import { getProfileRequest, updateProfile } from "../api/profile";
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
    const [haveData, setHaveData] = useState(false);
    const [userData, setUserData] = useState([]);

    async function userHaveData(){
        const res = await getProfileRequest();
        if (res.data.nombre && res.data.apellido && res.data.rut){
            setHaveData(true);
            setUserData(res.data);
        } else{
            setHaveData(false);
            setUserData([]);
        }
    }
    const signUp = async (user) => {
        try{
            const res = await registerRequest(user);
            // console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
            userHaveData();
        } catch(error){
            console.log(error.response);
            setErrors(error.response.data);
        }
    }
    const signIn = async (user) => {
        try{
            const res = await loginRequest(user);
            // console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
            userHaveData();
        } catch(error){
            console.log(error.response);
            setErrors(error.response.data);
        }
    }

    const UpdateUp = async (user) => {
        try {
            console.log("user", user)
            const res = await updateProfile(user)
            console.log("res",res)
            console.log("desde Update up")
            
        } catch(error) {
            console.log(error)
            console.log("no funciono")
        }
    }


    const logOut = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
        setHaveData(false);
        setUserData([]);
    }
    useEffect(() => {
        async function checkLogin(){
            const cookies = Cookies.get();
            if (cookies.token) {
                try {
                const res = await verifyTokenRequest(cookies.token)
                // console.log(res)
                    if (res.data){
                        setUser(res.data);
                        setIsAuthenticated(true);
                        userHaveData();
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
        <AuthContext.Provider value={{signUp, user, isAuthenticated, errors, signIn, logOut, haveData, userData,UpdateUp, userHaveData}}>
            {children}
        </AuthContext.Provider>
    );
}