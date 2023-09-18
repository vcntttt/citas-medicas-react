import styles from "../styles/Login.module.css";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";


export default function Login() {

    const {register, handleSubmit} = useForm();
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const onSubmit = (data) => (console.log(data));

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
    }},[isAuthenticated]);
    
  return (
    <div className={styles.container}>
      <div className={styles.registerMenu}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>Login</h1>
        </div>
        <form className={styles.form} action="" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.containerData}>
            <input {...register ("email", { required: true })} placeholder="Email" />
            <input type="password" {...register ("password", { required: true })} placeholder="Contraseña" />
          </div>

          <div className={styles.containerSubmit }>
            <input className={styles.submit} type="submit" value="Entrar"/>
          </div>
          <div className={styles.containerRegister}>
            <label >No tienes una cuenta? <Link className={styles.link} to="/register"><u>Registrate</u></Link> </label>
          </div>


        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"/>
      </div>
    </div>
  )
}