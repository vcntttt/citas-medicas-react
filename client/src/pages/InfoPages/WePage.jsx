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
    <div className=" md:flex bg-greycus-800 w-full h-screen ">

      <div className="   md:w-2/6 flex flex-col items-center justify-center ">

        <div className=' md:flex h-1/4 w-2/3 items-center '>
          <Btn styles='' onClick={() => ChangeText("mision")}>Mision</Btn>

        </div>
        <div className='md:flex h-1/4 w-2/3 items-center'>
          <Btn styles='' onClick={() => ChangeText("historia")}>Historia</Btn>

        </div>
        <div className='md:flex h-1/4 w-2/3 items-center'>
          <Btn styles='' onClick={() => ChangeText("premios")}>Premios</Btn>


        </div>
        <div className='md:flex h-1/4 w-2/3 items-center'>
          <Btn styles='' onClick={() => ChangeText("directorio")}>Directorio</Btn>

        </div>



      </div>

      <div className=" md:w-4/6 flex flex-col items-center justify-center">

        <div className='bg-white h-4/6 rounded text-center '>
          <h1 className="h-1/6 text-2xl ">Nosotros</h1>
          <p className="h-2/6 m-4" >{text}</p>
          <p className="h-1/6 m-4">
            <cite >
              La medicina no tiene color; es un puente que nos
              conecta a todos, sin importar el tono de piel.
              Juntos, creamos un futuro de salud y bienestar
              para todos, donde la diversidad aumenta nuestro entendimiento y empatía.
            </cite>
          </p>

        </div>
      </div>

      <div className="bg-greycus-800 md:w-2/6 flex flex-col items-center justify-center">
        <img className="w-3/6 m-2 mx-auto" src={doc_1} />
        <img className="w-3/6 m-2 mx-auto" src={doc_2} />
      </div>
    </div>
  )
}