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
    <div className="grid grid-cols-[1fr,2fr] h-[92vh]">
      <div className="bg-slate-800 flex flex-col gap-4">
        <h1 className="text-2xl py-4 text-center text-white">Especialidades</h1>
        {especialidades.map((item) => (
          <div key={item} className="px-4 mx-6 bg-onahau-500 h-8 rounded">
              <input className=""
                type="checkbox"
                name={item.toLowerCase()}
                value={item}
                onChange={handleEspecialidadChange}
                />
              <label htmlFor={item.toLowerCase()}  className="mx-4 text-2xl">{item}</label>
          </div>
        ))}
      </div>
      <div className="bg-onahau-500 p-6 rounded-sm text-black items-center py-4 flex flex-col gap-2 overflow-y-auto">
        <h1 className="text-black my-2 text-2xl">Nuestros doctores: </h1>
        {filteredDrs.map((item, index) => (
          <Doctor key={index} doctor={item} />
        ))}
      </div>
    </div>
  );
}
