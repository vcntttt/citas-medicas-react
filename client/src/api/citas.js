import axios from "./axios.js";

export const getEspecialidadesRequest = () => axios.get(`/especialidades`);

export const getCitasByEspecialidadRequest = (especialidad) => axios.get(`/citas/especialidad/${especialidad}`);

export const pickDateRequest = (citaId) => axios.put(`/citas/pick/${citaId}`);

export const cancelDateRequest = (citaId) => axios.post(`/citas/cancel/${citaId}`);

