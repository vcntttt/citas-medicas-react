
import styles from '../../styles/WePage.module.css';
import image from '../../assets/homeImg.webp';

export default function WePage() {
  return (
    <div className={styles.container}>


      <div className={styles.containerPanel}>

        <div className={styles.containerButton}>
          <button>Nuestra mision</button>
        </div>

        <div className={styles.containerButton}>
          <button>Historia</button>
        </div>

        <div className={styles.containerButton}>
          <button>Premios</button>
        </div>

        <div className={styles.containerButton}>
          <button>Directorio</button>

        </div>

      </div>




      <div className={styles.containerInfo}>
        <div className={styles.containerInfoText}>
          <h1>Nosotros</h1>
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
          <p className={styles.date}>
          "La medicina no tiene color; es un puente que nos 
          conecta a todos, sin importar el tono de piel.
          Juntos, creamos un futuro de salud y bienestar
          para todos, donde la diversidad aumenta nuestro entendimiento y empatía."
          </p>
        </div>

        <div className={styles.containerImages}>
          <img src={image} />

          <img src={image} />
        </div>

      </div>

    </div>
  )
}