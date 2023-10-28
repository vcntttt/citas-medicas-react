import Card from '../../components/JobCard/Card.jsx'
import { getEspecialidadesRequest } from '../../api/drs.js';
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
  <div className="bg-greycus-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-10 h-[92.8vh]">
    <h2 className="text-center text-white text-5xl col-span-full mb-6">¿Qué Tipo de Servicio Necesita?</h2>
    {especialidades.map((item, index) => (
      <Card key={index} item={item} />
    ))}
  </div>
);
}