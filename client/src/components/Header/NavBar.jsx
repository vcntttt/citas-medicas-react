import {NavLink} from "react-router-dom";
import UserCard from "./UserCard/UserCard.jsx";
export default function NavBar({styles}) {
  return (
    <div className={`flex flex-row justify-between p-6 ${styles}`}>
        <ul className="flex md:flex-row flex-col gap-6 items-center">
            <li><NavLink className={({isActive}) => isActive ? "font-bold" : ''} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "font-bold" : ''} to="/jobsList">Especialidades Disponibles</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "font-bold" : ''} to="/drs">Nuestros Doctores</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "font-bold" : ''} to="/we">Nosotros</NavLink></li>
        </ul>
        <UserCard/>
    </div>
  )
}