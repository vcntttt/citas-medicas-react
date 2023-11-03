import {create} from 'zustand';
import {persist, devtools} from 'zustand/middleware'

const useAuthStore = create(devtools(persist((set) => ({
    user: null,
    isAuthenticated: false,
    errors: [],
    userDates : [],
    role : null,
    token: '',

    setToken : (token) => set(state => ({
        ...state,
        token,
        isAuthenticated: true
    }), false, "setToken"),

    setUserData : (data) => set(state => ({
        ...state ,
        user: data,
        role : data?.role ?? state.role
    }), false, "setUserData"),
    
    setUserDates : (data) => set(state => ({
        ...state,
        userDates : data
    }), false, "setUserDates"),

    setError: (error) => set(state => ({
        ...state,
        errors: [...state.errors, error] 
    }), false, "setError"),

    logOut : () => set(state => ({
        ...state,
        user: null,
        isAuthenticated: false,
        userDates : [],
        role : null,
        token: ''
    }), false, "logOut"),

    clearErrors : () => set(state => ({
        ...state,
        errors: []
    }))
}),
{
  name: 'authStore',
})));

export default useAuthStore;