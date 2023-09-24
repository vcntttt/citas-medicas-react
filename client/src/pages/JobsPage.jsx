import Card from '../components/JobCard/Card.jsx'
import styles from '../components/JobCard/Card.module.css'
import { getEspecialidadesRequest } from '../api/citas.js';
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
    <div className='container'>
      <div className={styles.contenedor}>
        <h2>¿Que Tipo de Servicio Necesita?</h2>
      {especialidades.map((item, index) => (
        <Card key={index} item={item}/>
      ))}
    </div>
    </div>

  )
}
