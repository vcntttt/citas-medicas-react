import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const App = () => (
  <div style={{ height: 700 }}>
    <Calendar
      localizer={localizer}
      step={15}
      timeslots={4}
      defaultDate={new Date(2015, 3, 12)}
    />
  </div>
);

export default App;
