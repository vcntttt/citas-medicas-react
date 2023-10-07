import { useForm } from "react-hook-form"

export default function Input({type, errors, register }) {
    return (
        <div>
            <input className='' type={type} placeholder={type === "password" ? "Contraseña" : "Email"} {...register(type, { required: true})}/>
            {errors[type] && <p>Este campo es requerido</p>}
        </div>
    );
  } 