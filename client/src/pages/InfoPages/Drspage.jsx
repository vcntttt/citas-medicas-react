import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoctoresRequest } from "../../api/drs";

export default function Drspage() {
  let { id } = useParams();
  id = id ? id : 'all';
  const [drs, setDrs] = useState([]);
  useEffect(() => {
    async function getDrs() {
      try{
        const res = await getDoctoresRequest(id);
        setDrs(res.data);
      }catch(error){
        console.log(error.response);
      }
    }
    getDrs();
  })
  return (
    <div>
      <h1 className="text-black text-2xl">Aca se podran ver los doctores</h1>
      {drs.map((item, index) => (
        <p key={index}>{item.nombre} {item.apellido}</p>
      ))}
    </div>
  )
}