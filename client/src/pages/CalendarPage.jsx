import { useParams } from "react-router-dom";
import MyCalendar from '../components/MyCalendar/MyCalendar.jsx'
import citas from '../tempData/tablaCitas.js';

export default function CalendarPage() {
  const {id} = useParams();
  const filteredCitas = citas.filter(cita => cita.especialidad == id);
  return (
    <div>
      <MyCalendar events = {filteredCitas}/>
    </div>
  )
}
