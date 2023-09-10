import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Calendar.module.css";
import Event from "./Event";
import { useState } from "react";

const localizer = momentLocalizer(moment);
export default function MyCalendar({events}) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleClose = () => {
    setSelectedEvent(null);
  }
  return (
    <div className={styles.container}>
    <Calendar
      localizer={localizer}
      step={15}
      timeslots={4}
      views={["week", "day", "month"]}
      defaultView="week"
      events={events}
      onSelectEvent={event => setSelectedEvent(event)}
      eventPropGetter={event => {
        return {
          style: {
            backgroundColor: event.title === "Disponible" ? "#B0FFC6" : "#F07878",
            color: "black",
            fontWeight: "500"
          }
        };
      }}
    />
    {selectedEvent && <Event event={selectedEvent} onClose={handleClose}/>}
  </div>
  )
}