// authStore.js
import {create} from 'zustand';
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";

export const useAuthStore = create((set, get) => ({
    user: null,
    isAuthenticated: false,
    errors: [],
    userData: [],
    // haveData: false,

    //Funciones de autenticacion
    signIn : (user) => {
        set({ user, isAuthenticated: true });
        
    },
    logOut: () => set({ user: null, isAuthenticated: false }),
    showProfile : () => {
        get().user
    }
}))