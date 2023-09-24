import styles from '../styles/Formulary.module.css'
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";


export default function Form() {

    const { register, handleSubmit, formState: { errors }, watch} = useForm();
    const {UpdateUp} = useAuth();

    const onSubmit =  handleSubmit(async (data,e) => {
        const gender = watch("gender")
        UpdateUp(data)
        e.preventDefault()
    })


    return (
        <div className={styles.modal}>
            <div className={styles.ventana} >
                <h1>Ingrese datos personales</h1>
        
                <form className={styles.form} onSubmit={onSubmit}>

                    <div className={styles.formDataInfo}>
                        <input type="text" placeholder='Rut:' {...register("rut", { required: true })}/>
                        <input type="text"   placeholder='Nombre' {...register("nombre", { required: true })} />
                        <input type="text" placeholder='Apellidos' {...register("apellido", { required: true })} />

                        <select  className={styles.select}  {...register("genero",{required: true})} >
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                        </select>
                    </div>

                    {/* 
                    <div className={styles.formDataContact}>
                        <h2>Datos de contacto</h2>


                        <input type="text" placeholder='Rut:' />
                        <input type="text" placeholder='Telefono' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Direccion' />
                    </div>
                    */}
                    <input className={styles.SubmitButton} type="submit" value="enviar"/>

                </form>
                <div className={styles.ExitButton}>
                    <Link to="/"><button>Salir</button></Link>
                </div>
            </div>
        </div>
    )
}