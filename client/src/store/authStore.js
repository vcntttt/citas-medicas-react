import {create} from 'zustand';
import {resendToken , loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import { getProfileRequest,getUserDates,updateProfile } from "../api/profile";
import Cookies from "js-cookie";
import {persist, devtools} from 'zustand/middleware'
import { getInfoDoc } from '../api/drs';


const useAuthStore = create(devtools(persist((set,get) => ({
    user: null,
    isAuthenticated: false,
    errors: [],
    userData : null,
    userDates : [],
    userHasData : false,
    role : null,
    token: '',

    signIn : async (user,navigate) => {
        try{
            const res = await loginRequest(user);
            set({ user: res.data, isAuthenticated: true, role: res.data.role },false, "SignIn");
            navigate("/");
        } catch(error){
            console.log(error.response);
            set({ errors: error.response.data },false, "SignInError");
        }
    },
    signUp : async (user,navigate) => {
        try{
            const res = await registerRequest(user);
            console.log(res.data)
            set({ user: res.data, isAuthenticated: true, role: res.data.role } ,false, "SignUp");
            navigate("/");
        } catch(error){
            set({ errors: error.response.data },false, "SignUpError");
            console.log(error.response.data);
        }
        },
    checkLogin : async () => {
        const cookies = Cookies.get();
        if (cookies.token) {
            try {
            const res = await verifyTokenRequest(cookies.token)
                if (res.data){
                    set({ user: res.data, isAuthenticated: true , token: cookies.token} ,false, "CheckLogin");
                }else {
                    set({ user: null, isAuthenticated: false } ,false, "CheckLoginError");
                }
            } catch (error) {
                set({ user: null, isAuthenticated: false } ,false, "CheckLoginErrors");
                console.log(error.response.data);
            }
        }
    },
    logOut : () => {
        Cookies.remove("token");
        set({ user: null, isAuthenticated: false , userData : null, userHasData : false , userDates : [], role : null, token: '' },false, "LogOut");
    },
    checkData : async () => {
        try{
            const {isAuthenticated} = get();
            if (!isAuthenticated) return
            const res = await getProfileRequest();
            if (res.data.role == 'doctor') {
                const drRes = await getInfoDoc();
                set({ userData : drRes.data, userHasData : true },false, "CheckDataDoctor");
                set({ role : res.data.role } ,false, "setDoctorRole");
                return
            } 
            if(res.data.nombre && res.data.apellido){
                set({ userData : res.data, userHasData : true },false, "CheckData");
                set({ role : res.data.role });
            } else{
                set({ userData : null, userHasData : false },false, "CheckDataError");
            }
        }catch(error){
            console.log(error.response);
        }
    },
    updateProfile: async (user) => {
        try{
            const res = await updateProfile(user);
            set({ userData : res.data , userHasData : true}, false, "UpdateProfile");
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
            set({ userDates : res.data }, false, "CheckDates");
        } catch(error){
            console.log(error.response);
        }
    },
    renewToken : async () => {
        try{
            const {isAuthenticated} = get();
            if (!isAuthenticated) return
            const {user} = get();
            const res = await resendToken(user.email);
            set({ token: res.data, isAuthenticated: true },false, "RenewToken");
        } catch(error){
            console.log(error.response);
        }
    }
}),
{
  name: 'authStore',
})));

export default useAuthStore;