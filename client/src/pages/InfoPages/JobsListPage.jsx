import { getEspecialidadesRequest } from "../../api/drs";
import Especialidad from "../../components/Cards/Especialidad";
import useRequest from "../../hooks/useRequest";
export default function JobsListPage() {
  const {data: especialidades} = useRequest(() => getEspecialidadesRequest());

  return (
    <div className="">
      <h1 className="text-black my-10 text-2xl text-center">Contamos con las siguientes especialidades</h1>
      <div className="grid m-5 md:grid-cols-2 gap-8 sm:grid-cols-1">
      {especialidades.map((item, index) => (
        <Especialidad nombre={item} key={index}/>
      ))}
      </div>
    </div>
  )
}