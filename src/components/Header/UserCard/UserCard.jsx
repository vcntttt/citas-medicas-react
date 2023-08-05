import styles from  '../styles/UserCard.module.css'
import Image from 'next/image'
export default function UserCard(){
return (
    <div className={styles.container}>
        <Image
        alt='user'
        src='/assets/user.svg'
        width={20}
        height={20}
        />
        <h1 className={styles.text}>Login</h1>
    </div>
)
}