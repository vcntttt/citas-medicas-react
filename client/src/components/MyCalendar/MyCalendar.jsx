import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Calendar.module.css";
import Event from "./Event";
import { useState, useEffect } from "react";
import { getCitasByEspecialidadRequest } from "../../api/citas.js";
import { useParams } from "react-router-dom";

moment.tz.setDefault("America/Santiago");

const localizer = momentLocalizer(moment);
export default function MyCalendar() {
  const { id } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    async function getCitas() {
      if (!citas.length) {
        const res = await getCitasByEspecialidadRequest(id);
        const formatedCitas = res.data.map((cita) => ({
          start: new Date(cita.horaInicio),
          end: new Date(cita.horaFin),
          title: cita.estado ? "No disponible" : "Disponible",
          ...cita,
        }));
        setCitas(formatedCitas);
      }
    }
    getCitas();
  }, []);


  // muestra las citas solo cuando se actualiza
  useEffect(() => {
    if (citas.length) {
      console.log(citas);
    }
  }, [citas]);
  let events = citas;
  const handleClose = () => {
    setSelectedEvent(null);
  };
  return (
    <div className={styles.container}>
      <Calendar
        localizer={localizer}
        step={15}
        timeslots={4}
        views={["week", "day", "month"]}
        defaultView="week"
        events={events}
        onSelectEvent={(event) => setSelectedEvent(event)}
        eventPropGetter={(event) => {
          return {
            style: {
              backgroundColor:
                event.title === "Disponible" ? "#B0FFC6" : "#F07878",
              color: "black",
              fontWeight: "500",
            },
          };
        }}
      />
      {selectedEvent && <Event event={selectedEvent} onClose={handleClose} />}
    </div>
  );
}
