import { useState } from "react";
import { getCitasByEspecialidadRequest } from "../api/citas";
import dateHelper from "./dateHelper";
import { useParams } from "react-router-dom";
import useRequest from "./useRequest";

function useCalendar() {
  const { id } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const {data: rawCitas} = useRequest(() => getCitasByEspecialidadRequest(id), []);
  const citas = rawCitas ? dateHelper(rawCitas) : [];
  const handleClose = () => {
    setSelectedEvent(null);
  };

  return {
    citas,
    selectedEvent,
    setSelectedEvent,
    handleClose,
  };
}

export default useCalendar;