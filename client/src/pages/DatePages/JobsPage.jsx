import Card from '../../components/JobCard/Card.jsx'
import { getEspecialidadesRequest } from '../../api/citas.js';
import { useEffect, useState } from 'react';
export default function JobsPage() {

const [especialidades, setEspecialidades] = useState([]);
useEffect(() => {
  async function getEspecialidades() {
    const res = await getEspecialidadesRequest();
    setEspecialidades(res.data);
  }
  if (especialidades.length === 0){
    getEspecialidades();
  }
})

  return (
    <div className = "m-auto -mt-2 bg-greycus-500 flex grow h-740">
      <div className = "m-auto mt-6 bg-greycus-300 w-80% h-690 rounded-xl max-w-1200">
        <h2 className = "text-center text-white font-Times text-5xl mt-10">¿Que Tipo de Servicio Necesita?</h2>
      {especialidades.map((item, index) => (
        <Card key={index} item={item}/>
      ))}
    </div>
    </div>

  )
}