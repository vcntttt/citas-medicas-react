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


  return (
    <div className="bg-greycus-800 w-full h-[93vh] pt-8 grid grid-cols-[1fr,3fr,1fr] gap-2">
      <div className=" flex flex-col w-2/3 h-5/6 mx-auto gap-4 me-4 ">
        <div className='flex h-1/4 place-items-center'>
          <Btn styles='' onClick={() => ChangeText("mision")}>Mision</Btn>

        </div>
        <div className='flex h-1/4 place-items-center'>
          <Btn styles='' onClick={() => ChangeText("historia")}>Historia</Btn>


        </div>
        <div className='flex h-1/4 place-items-center'>
          <Btn styles='' onClick={() => ChangeText("premios")}>Premios</Btn>


        </div>
        <div className='flex h-1/4 place-items-center'>
          <Btn styles='' onClick={() => ChangeText("directorio")}>Directorio</Btn>
        </div>

      </div>
      <div className=" bg-white text-black  rounded-md p-10 h-5/6 ms-10">
        <div className="bg-white m-5">
          <h1 className="text-center text-2xl">Nosotros</h1>
          <p className="mb-[25rem]" >{text}</p>
          <cite className="">
            La medicina no tiene color; es un puente que nos
            conecta a todos, sin importar el tono de piel.
            Juntos, creamos un futuro de salud y bienestar
            para todos, donde la diversidad aumenta nuestro entendimiento y empatía.
          </cite>

        </div>

      </div>
      <div className="flex flex-col place-items-center justify-center h-5/6">
        <img className="w-3/6 my-10" src={doc_1} />
        <img className="w-3/6 my-10" src={doc_2} />
      </div>
    </div>
  )
}