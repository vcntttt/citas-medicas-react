
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
    <div className="bg-[#2E3238] flex w-[83%] mx-40 my-4">


      <div className="flex flex-col justify-center text-center w-3/12">
        <div className="flex h-1/4 text-center items-center justify-center">
          <Button name="otro boton" onClick={() => ChangeText("mision")} text="Mision" />



        </div>
        <div className="flex h-1/4 text-center items-center justify-center">
          <Button name="otro boton" onClick={() => ChangeText("historia")} text="Historia" />


        </div>

        <div className="flex h-1/4 text-center items-center justify-center">
          <Button name="otro boton" onClick={() => ChangeText("premios")} text="Premios" />


        </div>


        <div className="flex h-1/4 text-center items-center justify-center">
          <Button name="otro boton" onClick={() => ChangeText("directorio")} text="Directorio" />


        </div>

      </div>

      <div className="w-6/12 text-[black] bg-[white] m-8">

        <div className="m-8" >
          <h1 className="text-center">Nosotros</h1>
          <p className="mb-[25rem]" >{text}</p>



          <p className="bg-[#C1FFFF]">
            "La medicina no tiene color; es un puente que nos
            conecta a todos, sin importar el tono de piel.
            Juntos, creamos un futuro de salud y bienestar
            para todos, donde la diversidad aumenta nuestro entendimiento y empatía."
          </p>

        </div>


      </div>



      <div className=" flex flex-col justify-center text-center items-center w-3/12">
        <img className="w-56 m-8" src={doc_1} />

        <img className="w-56 m-8" src={doc_2} />
      </div>


    </div>
  )
}