import { Link } from "react-router-dom";


export default function Especialidad({nombre}) {
  return (
    <div 
    className="bg-onahau-500 p-2 rounded-sm text-black flex flex-col items-center py-4">
      <h1 className="text-current py-4 text-xl">{nombre}</h1>
      <Link to={`/calendar/${nombre}`}>
        <button className="bg-slate-900 hover:bg-greencus-500 text-white px-2 py-1 rounded">
          Pedir Hora
        </button>
      </Link>
    </div>
  )
}