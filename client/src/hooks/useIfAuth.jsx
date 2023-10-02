import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
function useIfAuth() {
    const navigate = useNavigate();
    const {isAuthenticated, checkLogin} = useAuthStore();
    useEffect(() => {
        checkLogin();
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, []);
}

export default useIfAuth;