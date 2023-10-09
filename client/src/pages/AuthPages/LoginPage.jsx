import styles from "../../styles/Login.module.css";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import image from "../../assets/loginIMG.webp"
import useAuthStore from "../../store/authStore";
import useErrorHandler from "../../hooks/useErrors";
import useIfAuth from "../../hooks/useIfAuth";
import Input from "../../components/Input/Input.jsx";
export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, errors: sigInErrors } = useAuthStore();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signIn(data, navigate);
  })
  useIfAuth();
  useErrorHandler(sigInErrors);
  return (
    <div className={styles.container}>

      <div className={styles.user}>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Login</h1>
        </div>

        <form className={styles.form} action="" onSubmit={handleSubmit(onSubmit)}>

          <div className={styles.inputs}>
            <Input type="email" register={register} errors={errors} />
            <Input type="password" register={register} errors={errors} />
          </div>

          <div className={styles.containerSubmit}>
            <input className={styles.submit} type="submit" value="Entrar" />
          </div>

          <div  className={styles.registerContainer} >
            <label className={styles.register} >No tienes una cuenta? <Link to="/register">Registrate</Link> </label>
            <Toaster duration={3000} toastOptions={{ style: { background: "red", color: "#fff", border: 0 } }} />
          </div>

        </form>

      </div>


      <img className={styles.image} src={image} />

    </div>
  )
}