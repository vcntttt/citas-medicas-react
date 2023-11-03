import dateHelper from "../../hooks/dateHelper"
import Date from "./Date"

export default function DatesBoard({dates, className}) {
  const newDates = dateHelper(dates)
  return (
    <div className={`bg-slate-800 p-4 rounded-xl overflow-y-auto mx-5 ${className}`}>
      <h1 className="text-3xl text-white text-center">Tus Citas</h1>
      <ul>
        {newDates.map((date) => (
          <Date key={date._id} date={date}/>
        ))}
      </ul>
    </div>
  )
}