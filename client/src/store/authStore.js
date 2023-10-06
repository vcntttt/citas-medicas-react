import {create} from 'zustand';
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import { getProfileRequest,getUserDates,updateProfile } from "../api/profile";
import Cookies from "js-cookie";
import {persist} from 'zustand/middleware'

const useAuthStore = create(persist((set,get) => ({
    user: null,
    isAuthenticated: false,
    errors: [],
    userData : null,
    userDates : [],
    userHasData : false,
    role : null,

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
                    console.log("checkLogin")
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
            const {isAuthenticated} = get();
            if (!isAuthenticated) return
            console.log("CheckData");
            const res = await getProfileRequest();
            if(res.data.nombre && res.data.apellido){
                set({ userData : res.data, userHasData : true });
                set({ role : res.data.role });
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
    },
    clearErrors : () => {
        set({ errors: [] });
    },
    checkDates : async () => {
        try{
            const {isAuthenticated} = get();
            if (!isAuthenticated) return
            const res = await getUserDates();
            set({ userDates : res.data });
        } catch(error){
            console.log(error.response);
        }
    }
}),
{
  name: 'authStore',
}));

export default useAuthStore;