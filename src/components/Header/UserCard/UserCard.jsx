import styles from  './UserCard.module.css'
export default function UserCard(){
return (
    <div className={styles.container}>
        <img
        alt='user'
        src= 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        width={20}
        height={20}
        />
        <h1 className={styles.text}>Login</h1>
    </div>
)
}