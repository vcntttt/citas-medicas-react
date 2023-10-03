import { useEffect } from "react";
import useAuthStore from "../store/authStore";
function useIfAuth() {
    const {checkLogin, checkData, checkDates} = useAuthStore();
    useEffect(() => {
        checkLogin();
        checkData();
        checkDates();
    }, []);
}

export default useIfAuth;