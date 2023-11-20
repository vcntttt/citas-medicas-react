import DateForm from "../../components/Home/DateForm";

export default function DateFormPage() {
  return (
    <div className="bg-[#2E3238] h-[93vh] flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl mb-4">Agenda la cita en un Nuevo Horario</h1>
        <DateForm styles={'w-1/2'}/>
    </div>
  )
}