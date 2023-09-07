import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Calendar.module.css";
const localizer = momentLocalizer(moment);
const App = () => (
  <div className={styles.container}>
    <Calendar
      localizer={localizer}
      step={15}
      timeslots={4}
      views={["week", "day"]}
      defaultView="week"
    />
  </div>
);

export default App;
