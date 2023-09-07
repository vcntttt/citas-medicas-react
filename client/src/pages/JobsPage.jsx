import Card from '../components/JobCard/Card.jsx'
import styles from '../components/JobCard/Card.module.css'
import dataDrs from '../tempData/tablaDoctores.json'

export default function JobsPage() {
  const uniqueJobs = dataDrs.reduce((acc, current) => {
    const x = acc.find(item => item.JobTitle === current.JobTitle);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div>
      <h1 className={styles.title}>¿Que Tipo de Servicio Necesita?</h1>
      <div className={styles.container}>
      {uniqueJobs.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
    </div>

  )
}
