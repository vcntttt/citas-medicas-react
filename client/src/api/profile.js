import axios from "./axios.js";

export const getProfileRequest = () => axios.get(`/profile`);

export const updateProfile = (user) => axios.put("/profile",user)

export const getUserDates = () => axios.get(`/profile/dates/`);