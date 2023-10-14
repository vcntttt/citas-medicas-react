
//import styles from '../../styles/WePage.module.css';
import image from '../../assets/homeImg.webp';
import Button from '../../components/Info/Button';

export default function WePage() {
  return (
    <div className="flex justify-center text-center mx-20 my-20">


      <div className="flex w-[20%] bg-[#2E3238] flex-col  ">

        <Button name="Historia" />

        <Button name="Hola" />

        <Button name="Premios" />

        <Button name="Directorio" />

      </div>

      <div className="w-6/12 flex ml-4 ">
        <div className=" w-[80%]">
          <h1 className=" text-[black] text-[larger] mb-8">Nosotros</h1>
          <p>Buenos días/tardes/noches a todos. En este momento, me
            complace enormemente poder compartir con ustedes la misión
            que impulsa nuestra web app de enlace médico.En un mundo
            que avanza rápidamente, donde la tecnología y la atención
            médica se entrelazan de maneras emocionantes, nuestra
            visión es clara y poderosa: estamos aquí para conectar
            personas con doctores de una manera más eficiente,
            accesible y humana que nunca antes. Permitan que les
            explique cómo nuestra misión transformará la forma en
            que las personas acceden y experimentan la atención médica.
          </p>
          <p className=" bg-[#C1FFFF] mx-0 my-40">
          "La medicina no tiene color; es un puente que nos 
          conecta a todos, sin importar el tono de piel.
          Juntos, creamos un futuro de salud y bienestar
          para todos, donde la diversidad aumenta nuestro entendimiento y empatía."
          </p>
        </div>

        <div className=" w-60  ">
          <img className="m-2.5" src={image} />

          <img className="m-2.5" src={image} />
        </div>

      </div>

    </div>
  )
}