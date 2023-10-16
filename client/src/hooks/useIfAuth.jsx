import { useEffect } from "react";
import useAuthStore from "../store/authStore";
function useIfAuth() {
    const {checkLogin, checkData, checkDates, renewToken} = useAuthStore();
    useEffect(() => {
        renewToken();
        checkLogin();
        checkData();
        checkDates();
    }, []);
}

export default useIfAuth;