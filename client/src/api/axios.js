import axios from "axios";

const instance = axios.create({
    baseURL: "https://reservatuapi-uct.onrender.com/api",
    withCredentials: true
});
export default instance;