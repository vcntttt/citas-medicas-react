import axios from "./axios.js";

export const getEspecialidadesRequest = () => axios.get(`/especialidades`);

export const getDoctoresRequest = () => axios.get(`/drs`);

export const newDateRequest = (data) => axios.post(`/citas/add/dr`, data);

export const getInfoDoc = () => axios.get(`/profile/dr/`);