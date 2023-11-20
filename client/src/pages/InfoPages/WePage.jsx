import doc_1 from '../../assets/doc_1.webp';
import doc_2 from '../../assets/doc_2.webp';
import { useState } from 'react';
import Btn from '../../components/Home/Btn'

export default function WePage() {
  const [text, setText] = useState('La misión de una plataforma de citas médicas en línea podría ser proporcionar a los pacientes un acceso fácil y conveniente a servicios de atención médica de calidad, permitiéndoles programar citas con profesionales de la salud de manera eficiente y mejorar su experiencia en la búsqueda de atención médica.');

  const ChangeText = (option) => {
    if (option == "mision") {
      setText('La misión de una plataforma de citas médicas en línea podría ser proporcionar a los pacientes un acceso fácil y conveniente a servicios de atención médica de calidad, permitiéndoles programar citas con profesionales de la salud de manera eficiente y mejorar su experiencia en la búsqueda de atención médica.');
    } else if (option == "historia") {
      setText('La historia de la plataforma podría incluir detalles sobre su fundación, por quién y cuándo se creó, así como las etapas clave de su desarrollo y crecimiento. También podría destacar momentos importantes en la evolución de la plataforma.');
    } else if (option == "premios") {
      setText('Los premios que ha recibido una plataforma de citas médicas podrían incluir reconocimientos por su contribución a la atención médica, innovación tecnológica, calidad de servicio o cualquier otro logro significativo. Es importante mencionar los premios específicos que la plataforma haya ganado');
    } else if (option == "directorio") {
      setText('El directorio de la plataforma incluiría información sobre los profesionales de la salud y los proveedores que están disponibles a través de la plataforma para que los pacientes puedan buscar y programar citas con ellos. Debería proporcionar detalles sobre la especialización de los médicos, su ubicación, horarios disponibles y cualquier otra información relevante para los pacientes.')
    } else {
      setText("error")
    }
  };

  const [buttonColors, setButtonColors] = useState({
    mision: 'bg-onahau-500',
    historia: 'bg-onahau-500',
    premios: 'bg-onahau-500',
    directorio: 'bg-onahau-500',
  });

  const ChangeStatus = (option) => {

    setButtonColors(updatedColors => {
      updatedColors = { mision: 'bg-onahau-500', historia: 'bg-onahau-500', premios: 'bg-onahau-500', directorio: 'bg-onahau-500' };
      if (option === "mision") {
        updatedColors.mision = 'bg-onahau-600' 
      } else if (option === "historia") {
        updatedColors.historia = 'bg-onahau-600' 
      } else if (option === "premios") {
        updatedColors.premios = 'bg-onahau-600' 
      } else if (option === "directorio") {
        updatedColors.directorio = 'bg-onahau-600' 
      }
      return updatedColors; 
    });
  }

  return (
    <div className="bg-greycus-800 w-full h-screen  md:flex  ">
      <div className=" flex justify-center  items-center  md:w-2/6  lg:w-1/3">
        <div className='  flex-col h-4/6 w-full '>
          <div className='h-1/4 flex justify-center items-center py-5   '>
            <Btn styles={'w-2/3 '} onClick={() =>{ ChangeText("mision"); ChangeStatus("mision")}} color={buttonColors.mision}>Mision</Btn>
          </div>
          <div className='h-1/4 flex justify-center items-center py-5  '>
            <Btn styles={'w-2/3'} onClick={() =>{ ChangeText("historia"); ChangeStatus('historia')}}   color={buttonColors.historia}>Historia</Btn>
          </div> 
          <div className='h-1/4 flex justify-center items-center py-5   '>
            <Btn styles={'w-2/3'} onClick={() =>{ ChangeText("premios"); ChangeStatus('premios')}} color={buttonColors.premios}>Premios</Btn>
          </div>
          <div className='h-1/4 flex justify-center items-center py-5 '>
            <Btn styles={'w-2/3'} onClick={() =>{ ChangeText("directorio"); ChangeStatus("directorio")}} color={buttonColors.directorio}>Directorio</Btn>
          </div>
        </div>
      </div>

      <div className=" h-full flex items-start md:items-center md:w-4/6 ">
        <div className='bg-white h-4/6 rounded text-center py-4'>
          <h1 className="h-1/6 text-2xl ">Nosotros</h1>
          <p className="md:h-3/6 m-4" >{text}</p>
          <p className="h-1/6 m-4">
            <cite className='m-4'>
              La medicina no tiene color; es un puente que nos
              conecta a todos, sin importar el tono de piel.
              Juntos, creamos un futuro de salud y bienestar
              para todos, donde la diversidad aumenta nuestro entendimiento y empatía.
            </cite>
          </p>
        </div>
      </div>
      
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center  md:w-2/6 lg:w-2/6">
        <img className="w-3/6 m-2 mx-auto lg:w-3/6" src={doc_1} />
        <img className="w-3/6 m-2 mx-auto lg:w-3/6" src={doc_2} />
      </div>
    </div>
  )
}