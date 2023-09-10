import {NavLink} from "react-router-dom";
import styles from "./NavBar.module.css";
import UserCard from "./UserCard/UserCard.jsx";
export default function NavBar() {
  return (
    <div className={styles.navLinks}>
        <ul>
            <li><NavLink className={({isActive}) => isActive ? styles.active : styles.noActive} to="/">Home</NavLink></li>
            {/* <li><NavLink className={({isActive}) => isActive ? styles.active : styles.noActive} to="/jobs">Especialidades Disponibles</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles.active : styles.noActive} to="/drspage">Nuestros Doctores</NavLink></li> */}
        </ul>
        <UserCard/>
    </div>
  )
}
