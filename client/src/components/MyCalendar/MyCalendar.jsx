import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Calendar.module.css";
import Event from "./Event";
import useCalendar from "../../hooks/useCalendar";

moment.tz.setDefault("America/Santiago");

const localizer = momentLocalizer(moment);
export default function MyCalendar() {
  const { citas: events, selectedEvent, setSelectedEvent, handleClose } = useCalendar();
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
