// authStore.js
import {create} from 'zustand';
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import { getProfileRequest,updateProfile } from "../api/profile";

import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    errors: [],
    userData : null,
    userDates : [],
    userHasData : false,

    //Funciones de autenticacion
    signIn : async (user,navigate) => {
        try{
            const res = await loginRequest(user);
            set({ user: res.data, isAuthenticated: true });
            navigate("/");
        } catch(error){
            console.log(error.response);
            set({ errors: error.response.data });
        }
    },
    signUp : async (user,navigate) => {
        try{
            const res = await registerRequest(user);
            set({ user: res.data, isAuthenticated: true });
            navigate("/");
        } catch(error){
            console.log(error.response.data);
        }
        },
    checkLogin : async () => {
        const cookies = Cookies.get();
        if (cookies.token) {
            try {
            const res = await verifyTokenRequest(cookies.token)
                if (res.data){
                    set({ user: res.data, isAuthenticated: true });
                }else {
                    set({ user: null, isAuthenticated: false });
                }
            } catch (error) {
                set({ user: null, isAuthenticated: false });
                console.log(error.response.data);
            }
        }
    },
    logOut : (navigate) => {
        Cookies.remove("token");
        set({ user: null, isAuthenticated: false , userData : null, userHasData : false , userDates : [] });
        navigate("/");
    },
    checkData : async () => {
        try{
            const res = await getProfileRequest();
            if(res.data.nombre && res.data.apellido){
                set({ userData : res.data, userHasData : true });
            } else{
                set({ userData : null, userHasData : false });
            }
        }catch(error){
            console.log(error.response);
        }
    },
    updateProfile: async (user) => {
        try{
            const res = await updateProfile(user);
            set({ userData : res.data , userHasData : true});
        }catch(error){
            console.log(error.response);
        }
    }
}));

export default useAuthStore;