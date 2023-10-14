import { useParams } from "react-router-dom";
import { getDoctoresRequest } from "../../api/drs";
import Doctor from "../../components/Cards/Doctor";
import useRequest from "../../hooks/useRequest";

export default function Drspage() {
  let { id } = useParams();
  id = id ? id : 'all';
  const {data: drs} = useRequest(() => getDoctoresRequest(id), [id]);
  return (
    <div className="grid grid-cols-[1fr,2fr]">
      <div className="bg-slate-800">
        <h1 className="text-2xl py-4">Especialidades</h1>
      </div>
      <div className="bg-onahau-500 p-2 rounded-sm text-black items-center py-4 grid grid-cols-1 gap-2">
        <h1 className="text-black text-2xl">Aca se podran ver los doctores</h1>
      {drs.map((item, index) => (
        <Doctor key={index} doctor={item}/>
      ))}</div>
    </div>
  )
}