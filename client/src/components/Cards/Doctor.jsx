export default function Doctor({doctor}) {
  return (
    <div className="bg-slate-800 sm:p-2 rounded text-white sm:py-4 sm:w-full w-[90px]">
        <h1 className="text-current">{doctor.nombre} {doctor.apellido}</h1>
    </div>
  )
}