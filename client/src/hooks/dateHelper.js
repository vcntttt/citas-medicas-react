function dateHelper(resData) {
    return resData.map((cita) => ({
      start: new Date(cita.horaInicio),
      end: new Date(cita.horaFin),
      title: cita.estado ? "No disponible" : "Disponible",
      ...cita,
    }));
  }
export default dateHelper;