import styles from "../styles/Register.module.css";
import image from "../assets/foto_registro_1.jpeg";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../api/auth";
export default function Register() {
  const {register, handleSubmit, formState: { errors },} = useForm();

  const { signUp, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  const onSubmit = async (data) => {
    const res = await registerRequest(data);
    console.log(res);
  };
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
                className={styles.input}
                {...register("email", { required: true })}
                placeholder="Email"
              />
              {errors.email && <p>Este campo es requerido</p>}
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor=""></label>
              <input
                className={styles.input}
                {...register("Password", { required: true })}
                placeholder="Contraseña"
              />
              {errors.Password && <p>Este campo es requerido</p>}
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor=""></label>
              <input
                className={styles.input}
                {...register("ConfirmPass", { required: true })}
                placeholder="Confirmar Contraseña"
              />
              {errors.ConfirmPass && <p>Este campo es requerido</p>}
            </div>
          </div>

          <div className={styles.containerSubmit}>
            <input className={styles.submit} type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </div>
  );
}
