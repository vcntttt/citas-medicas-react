import axios from "axios";
import useAuthStore from "../store/authStore";

const instance = axios.create({
    baseURL: "https://reservatuapi-uct.onrender.com/api",
    withCredentials: true
});

instance.interceptors.request.use(config => {
    const token  = useAuthStore.getState().token;
    config.headers = {
        authorization: `Bearer ${token}`,
    }
    return config
})
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            useAuthStore.getState().logOut();
        }
        return Promise.reject(error)
    }
)
export default instance;