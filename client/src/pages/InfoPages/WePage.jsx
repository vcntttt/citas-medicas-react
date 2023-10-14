
//import styles from '../../styles/WePage.module.css';
import doc_1 from '../../assets/doc_1.webp';
import doc_2 from '../../assets/doc_2.webp';
import Button from '../../components/Info/Button';
import { useState } from 'react';

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
    <div className="flex justify-center text-center mx-20 my-20">


      <div className="flex w-[20%] bg-[#2E3238] flex-col  ">

        <Button name="otro boton" onClick={() => ChangeText("mision")} text="Mision" />

        <Button name="otro boton" onClick={() => ChangeText("historia")} text="Historia" />

        <Button name="otro boton" onClick={() => ChangeText("premios")} text="Premios" />

        <Button name="otro boton" onClick={() => ChangeText("directorio")} text="Directorio" />

      </div>

      <div className="w-6/12 flex ml-4 ">
        <div className=" w-[80%]">
          <div className='h-[80%]'>
            <h1 className=" text-[black] mb-8 text-xl">Nosotros</h1>
            <p className=' mb-8">{'>
              {text}
            </p>

          </div>

          <p className=" bg-[#C1FFFF] ">
            "La medicina no tiene color; es un puente que nos
            conecta a todos, sin importar el tono de piel.
            Juntos, creamos un futuro de salud y bienestar
            para todos, donde la diversidad aumenta nuestro entendimiento y empatía."
          </p>
        </div>

        <div className=" w-60  ">
          <img className="m-2.5" src={doc_1} />

          <img className="m-2.5" src={doc_2} />
        </div>

      </div>

    </div>
  )
}