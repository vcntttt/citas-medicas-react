import {NavLink} from "react-router-dom";
import styles from "./NavBar.module.css";
import UserCard from "./UserCard/UserCard.jsx";
export default function NavBar() {
  return (
    <div className='flex flex-row justify-between m-2 p-4'>
        <ul className="flex flex-row gap-6 items-center">
            <li><NavLink className={({isActive}) => isActive ? styles.active : styles.noActive} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles.active : styles.noActive} to="/jobsList">Especialidades Disponibles</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles.active : styles.noActive} to="/drs">Nuestros Doctores</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles.active : styles.noActive} to="/about">Nosotros</NavLink></li>
        </ul>
        <UserCard/>
    </div>
  )
}
