import { Link } from 'react-router-dom'
import styles from  './UserCard.module.css'
export default function UserCard(){
return (
    <Link to="/login">    <div className={styles.container}>
    <img
    alt='user'
    src= 'https://www.flaticon.com/free-icons/person'

    width={25}
    height={25}
    />
    <h1 className={styles.text}>Iniciar Sesion</h1>
</div></Link>
)
}
