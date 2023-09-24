import axios from "./axios.js";


export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);

export const getProfileRequest = () => axios.get(`/profile`);

export const getEspecialidadesRequest = () => axios.get(`/especialidades`);

export const getCitasByEspecialidadRequest = (especialidad) => axios.get(`/citas/especialidad/${especialidad}`);

export const pickDateRequest = (citaId, email) => axios.put(`/citas/pick/${citaId}`, email);

export const updateProfile = (user) => axios.put("/profile",user)