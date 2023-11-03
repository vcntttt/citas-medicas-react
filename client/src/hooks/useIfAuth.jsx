import { useEffect } from "react";
import useAuthStore from "../store/authStore";
import { getCitasDoctorRequest } from "../api/drs";
import { getUserDates } from "../api/profile";

function useIfAuth() {
    const { setUserDates, role, isAuthenticated} = useAuthStore();

    useEffect(() => {
        async function checkDates() {
            try {
                if (!isAuthenticated) setUserDates([]);
                let response = null;
                if (role === "doctor") {
                    response = await getCitasDoctorRequest();
                    setUserDates(response.data);
                } else if (role === "paciente") {
                    response = await getUserDates();
                    setUserDates(response.data);
            }} catch (error) {
                console.error(error.response);
            }
        }
        checkDates();
    }, [isAuthenticated, role])
}

export default useIfAuth;