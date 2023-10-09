import { useForm } from "react-hook-form";
import styles from "./Input.module.css";

export default function Input({type, errors, register }) {
    return (
        <div>
            <input className={styles.input} type={type} placeholder={type === "password" ? "Contraseña" : "Email"} {...register(type, { required: true})}/>
            {errors[type] && <p>Este campo es requerido</p>}
        </div>
    );
  } 