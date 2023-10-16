export default function Doctor({doctor}) {
  return (
    <div className="bg-slate-800 p-2 rounded-sm text-white py-4">
        <h1 className="text-current">{doctor.nombre} {doctor.apellido}</h1>
    </div>
  )
}