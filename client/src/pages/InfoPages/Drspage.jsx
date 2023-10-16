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
    <div className="grid grid-cols-[1fr,2fr] min-h-[90vh]">
      <div className="bg-slate-800 grid grid-cols-1 gap-4 min-h-[90vh]">
        <h1 className="text-2xl py-4 text-center text-white">Especialidades</h1>
        {especialidades.map((item) => (
          <div key={item} className="justify-center mx-10">
            <div className="bg-onahau-500" >
              <input className="pl-4"
                type="checkbox"
                name={item.toLowerCase()}
                value={item}
                onChange={handleEspecialidadChange}
              />
              <label htmlFor={item.toLowerCase()}  className="mx-4 text-2xl">{item}</label>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-onahau-500 p-6 rounded-sm text-black items-center py-4 grid grid-cols-1 gap-2 max-h-[90vh] overflow-y-auto">
        <h1 className="text-black text-2xl">Nuestros doctores: </h1>
        {filteredDrs.map((item, index) => (
          <Doctor key={index} doctor={item} />
        ))}
      </div>
    </div>
  );
}
