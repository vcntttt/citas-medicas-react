import { getDoctoresRequest, getEspecialidadesRequest } from "../../api/drs";
import Doctor from "../../components/Cards/Doctor";
import useRequest from "../../hooks/useRequest";
import { useState } from "react";

export default function DrsPage() {
  const { data: drs } = useRequest(() => getDoctoresRequest());
  const { data: especialidades } = useRequest(() => getEspecialidadesRequest());

  const [selectedEspecialidades, setSelectedEspecialidades] = useState([]);

  const handleEspecialidadChange = (e) => {
    const especialidad = e.target.value;
    if (e.target.checked) {
      setSelectedEspecialidades(prev => [...prev, especialidad]);
    } else {
      setSelectedEspecialidades(prev => prev.filter(item => item !== especialidad));
    }
  }

  const filteredDrs = drs.filter((doctor) => {
    if (selectedEspecialidades.length === 0) return true;
    return selectedEspecialidades.includes(doctor.especialidad);
  });

  return (
    <div className="grid md:grid-cols-[1fr,2fr] h-[93vh] grid-cols-1 overflow-y-auto md:overflow-y-hidden">
        <h1 className="md:hidden text-2xl py-4 text-center bg-slate-800 text-white">Especialidades</h1>
      <div className="bg-slate-800 md:flex md:flex-col gap-4 grid grid-cols-2 pb-4">
      <h1 className="md:flex text-2xl py-4 text-center bg-slate-800 text-white hidden">Especialidades</h1>
        {especialidades.map((item) => (
          <div key={item} className="px-2 mx-6 bg-onahau-500 h-8 rounded">
              <input className=""
                type="checkbox"
                name={item.toLowerCase()}
                value={item}
                onChange={handleEspecialidadChange}
                />
              <label htmlFor={item.toLowerCase()} className="text-2xl">{item}</label>
          </div>
        ))}
      </div>
      <h1 className="bg-onahau-500 md:hidden text-black py-2 text-2xl text-center">Nuestros doctores: </h1>
      <div className="bg-onahau-500 p-6 rounded-sm text-black items-center py-4 grid md:grid-cols-1 grid-cols-2 gap-2 overflow-y-auto">
        <h1 className="text-black my-2 text-2xl hidden md:flex">Nuestros doctores: </h1>
        {filteredDrs.map((item, index) => (
          <Doctor key={index} doctor={item} />
        ))}
      </div>
    </div>
  );
}