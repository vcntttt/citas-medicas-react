import styles from "../../styles/Login.module.css";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster , toast} from "sonner";
import image from "../../assets/loginIMG.webp"
import { useAuthStore } from "../../store/authStore";

export default function Login() {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {signIn} = useAuthStore();
    const navigate = useNavigate();
    const onSubmit =handleSubmit((data) => {
      signIn(data);
    }) 

    // useEffect(() => {
    //   if (isAuthenticated) {
    //     navigate("/");
    // }},[isAuthenticated]);

    // useEffect(() => {
    //   if(sigInErrors && sigInErrors.length > 0){
    //     sigInErrors.forEach(error => {
    //       toast.error(error)
    //     })
    //   }
    // }, [sigInErrors])
  return (
    <div className={styles.container}>
      <div className={styles.registerMenu}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>Login</h1>
        </div>
        <form className={styles.form} action="" onSubmit={handleSubmit(onSubmit)}>

          <div className={styles.containerData}>
            <input {...register ("email", { required: true })} placeholder="Email" />
            {errors.email && <p className={styles.errorField}>Este campo es requerido</p>}
            <input type="password" {...register ("password", { required: true })} placeholder="Contraseña" />
            {errors.password && <p className={styles.errorField}>Este campo es requerido</p>}
          </div>
          <div className={styles.containerSubmit }>
            <input className={styles.submit} type="submit" value="Entrar"/>
          </div>
          <div className={styles.containerRegister}>
            <label >No tienes una cuenta? <Link className={styles.link} to="/register">Registrate</Link> </label>
          </div>
          <Toaster 
          duration={3000}
          toastOptions={{
            style: {
              background: "red",
              color: "#fff",
              border: 0
            }
          }}
          />
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={image}/>
      </div>
    </div>
  )
}