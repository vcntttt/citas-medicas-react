import { Link } from 'react-router-dom'
import styles from  './UserCard.module.css'
export default function UserCard(){
return (
    <Link to="/login">    <div className={styles.container}>
    <img
    alt='user'
    src= 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    width={25}
    height={25}
    />
    <h1 className={styles.text}>Login</h1>
</div></Link>
)
}
