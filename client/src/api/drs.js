import axios from "./axios.js";

export const getEspecialidadesRequest = () => axios.get(`/especialidades`);

export const getDoctoresRequest = () => axios.get(`/drs`);
