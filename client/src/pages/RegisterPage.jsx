import styles from '../styles/Register.module.css';
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signUp, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
      }
    }, [isAuthenticated]);
    const onSubmit = (data) => signUp(data) 
  return (
    <div className={styles.container}>

      <div className={styles.imageContainer}>
        <img src="https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>

      <div className={styles.registerMenu}>

          <div className={styles.containerTitle}>
            <h1>Register</h1>
          </div>

          <form className={styles.form} action="" onSubmit={handleSubmit(onSubmit)}>

            <div className={styles.containerInput}>
              <div className={styles.input}>
                <label htmlFor="">Email</label>
                <input {...register("email", { required: true })} placeholder="Email"/>
                {errors.email && <p>Este campo es requerido</p>}
              </div>

              <div className={styles.input}>
                <label htmlFor="">Contraseña</label>
                <input {...register("Password", { required: true })} placeholder="Password" />
                {errors.Password && <p>Este campo es requerido</p>}
              </div>

              <div className={styles.input}>
                <label htmlFor="">Repetir Contraseña</label>
                <input {...register("ConfirmPass", { required: true})} placeholder="Password" />
                {errors.ConfirmPass && <p>Este campo es requerido</p>}

              </div>

            </div>


            <div className={styles.containerSubmit}>

              <input className={styles.submit} type="submit" />

            </div>


          </form> 

      </div>

    </div>

  )
}