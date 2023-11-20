import { useCallback, useEffect } from "react";
import useAuthStore from "../store/authStore";
import { getCitasDoctorRequest } from "../api/drs";
import { getUserDates } from "../api/profile";

function useIfAuth() {
    const { setUserDates, role, isAuthenticated} = useAuthStore();

    const checkDates = useCallback(async ()=>{
        try{
            if (!isAuthenticated) {
                setUserDates([]);
                return
            }
            let response = null;
            if (role === 'doctor') {
                response = await getCitasDoctorRequest();
            } else if (role === 'admin' || role === 'paciente') {
                response = await getUserDates();
            }
            if (response) setUserDates(response.data);
        }catch(error){
            console.error(error);
        }
    }, [isAuthenticated, role]);

    useEffect(()=>{
        checkDates();
    }, [checkDates]);
    
    return {checkDates};
}

export default useIfAuth;