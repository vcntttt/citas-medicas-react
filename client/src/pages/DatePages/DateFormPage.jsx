import DateForm from "../../components/Home/DateForm";

export default function DateFormPage() {
  return (
    <div className="bg-[#2E3238] h-[92vh] flex flex-col items-center justify-center w-full">
        <h1 className="text-white text-2xl mb-4">Agenda la Cita en un Nuevo Horario</h1>
        <DateForm/>
    </div>
  )
}