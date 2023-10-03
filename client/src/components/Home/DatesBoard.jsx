import dateHelper from "../../hooks/dateHelper"
import Date from "./Date"

export default function DatesBoard({dates}) {
  const newDates = dateHelper(dates)
  return (
    <div className="bg-slate-800 w-[450px] h-[700px] p-4 rounded-xl">
      <h1 className="text-3xl">Tus Citas</h1>
      <ul>
        {newDates.map((date) => (
          <Date key={date.id} date={date} />
        ))}
      </ul>
    </div>
  )
}
