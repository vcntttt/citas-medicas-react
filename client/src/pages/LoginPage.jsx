import styles from "../styles/Login.module.css";
import image from "../assets/doctor.jpg";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";


export default function Login() {

    const {register, handleSubmit} = useForm();
    const {signIn, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const onSubmit = (data) => (signIn(data));

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
    }},[isAuthenticated]);
    
  return (
    <div className={styles.container}>
      <div className={styles.registerMenu}>
        <div className={styles.containerTitle}>
          <h1>Login</h1>
        </div>
        <form className={styles.form} action="" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.containerInput}>
            <div className={styles.input}>
              <label>Email: </label>
              <input {...register ("email", { required: true })} placeholder="Email" />
            </div>
            <div className={styles.input}>
              <label >Password: </label>
              <input type="password" {...register ("password", { required: true })} placeholder="Password" />
            </div>
          </div>
          <div className={styles.submit}>
            <input className={styles.bottom} type="submit" />
          </div>
          <div className={styles.register}>
            <label >No tienes una cuenta? <Link to="/register"><u>Registrate</u></Link> </label>
          </div>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={image}/>
      </div>

    </div>

  )
}