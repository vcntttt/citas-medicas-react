import { useEffect, useState } from "react";
import { getEspecialidadesRequest } from "../../api/drs";
import Especialidad from "../../components/Cards/Especialidad";
export default function JobsList() {
  const [esp, setEsp] = useState([]);
  useEffect(() => {
    async function getEspecialidades() {
      try{
        const res = await getEspecialidadesRequest();
        setEsp(res.data);
      }catch(error){
        console.log(error.response);
      }
    }
    getEspecialidades();
  },[])
  return (
    <div className="">
      <h1 className="text-black my-10 text-2xl">Contamos con las siguientes especialidades</h1>
      <div className="grid m-5 md:grid-cols-2 gap-8 sm:grid-cols-1">
      {esp.map((item, index) => (
        <Especialidad nombre={item} key={index}/>
      ))}
      </div>
    </div>
  )
}
