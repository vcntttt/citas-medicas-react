import styles from "../styles/Register.module.css";
import image from "../assets/foto_registro_1.jpeg";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function Register() {
  const {register, handleSubmit, formState: { errors },} = useForm();

  const { signUp, isAuthenticated, errors: registerErrors} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  
  const onSubmit =  handleSubmit(async (data) => {
    signUp(data);
  })

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} />
      </div>

      <div className={styles.registerMenu}>
        <div className={styles.containerTitle}>
          <h1>Registro</h1>
        </div>

        <form
          className={styles.form}
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.containerInput}>
            <div className={styles.inputContainer}>
              <label htmlFor=""></label>
              <input
                type="email"
                className={styles.input}
                {...register("email", { required: true })}
                placeholder="Email"
              />
              {errors.email && <p className={styles.errorField}>Este campo es requerido</p>}
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor=""></label>
              <input
                type="password"
                className={styles.input}
                {...register("password", { required: true })}
                placeholder="Contraseña"
              />
              {errors.password && <p className={styles.errorField}>Este campo es requerido</p>}
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor=""></label>
              <input
                type="password"
                className={styles.input}
                {...register("passwordConfirmation", { required: true })}
                placeholder="Confirmar Contraseña"
              />
              {errors.passwordConfirmation && <p className={styles.errorField}>Este campo es requerido</p>}
            </div>
          </div>
          {registerErrors.map((error,i) => (
        <p className={styles.errorField} key={i}>{error}</p>
      ))}
          <div className={styles.containerSubmit}>
            
            <input className={styles.submit} type="submit" value="Entrar" />
          </div>
          <label >Ya tienes una cuenta? <Link className={styles.link} to="/login"><u>Registrate</u></Link> </label>
        </form>
      </div>
    </div>
  );
}
