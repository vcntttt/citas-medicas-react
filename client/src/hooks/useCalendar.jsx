import { useState, useEffect } from "react";
import { getCitasByEspecialidadRequest } from "../api/citas";
import dateHelper from "./dateHelper";
import { useParams } from "react-router-dom";

function useCalendar() {
  const { id } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    async function getCitas() {
      if (!citas.length) {
        const res = await getCitasByEspecialidadRequest(id);
        const formatedCitas = dateHelper(res.data);
        setCitas(formatedCitas);
      }
    }
    getCitas();
  }, []);

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