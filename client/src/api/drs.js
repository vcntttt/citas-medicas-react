import axios from "./axios.js";

export const getEspecialidadesRequest = () => axios.get(`/especialidades`);

export const getDoctoresRequest = () => axios.get(`/drs`);

export const newDateRequest = (data) => axios.post(`/citas/add/dr`, data);

export const newAdminDateRequest = (data) => axios.post(`/citas/add/admin`, data);

export const getInfoDoc = () => axios.get(`/profile/dr/`);

export const registerDrRequest = (data) => axios.post(`/register/dr`, data);

export const getCitasDoctor = () => axios.get(`/citas/dr`);

export const cancelDoctorDateRequest = (citaId) => axios.delete(`/citas/${citaId}`);