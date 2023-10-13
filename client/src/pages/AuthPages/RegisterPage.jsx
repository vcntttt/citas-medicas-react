import styles from "../../styles/Register.module.css";
import image from "../../assets/registerImg.webp";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Toaster } from "sonner";
import useAuthStore from "../../store/authStore";
import useErrorHandler from "../../hooks/useErrors";
import useIfAuth from "../../hooks/useIfAuth";
import Input from "../../components/Input/Input.jsx";
export default function Register() {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const { signUp, errors: registerErrors } = useAuthStore();

  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    signUp(data, navigate);
  })
  useErrorHandler(registerErrors);
  useIfAuth();

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />


      <div className={styles.register}>

        <div className={styles.registerTitle}>
          <h1>Registro</h1>
        </div>


        <form className={styles.registerMenu} action="" onSubmit={handleSubmit(onSubmit)}>

          <div className={styles.registerMenuInput}>
            <Input type="email" placeholder="Email" register={register} errors={errors} />

            <Input type="password" placeholder="Contraseña" register={register} errors={errors} />

            <Input type="passwordConfirmation" placeholder="Confirmar Contraseña" register={register} errors={errors} />
          </div>


          <Toaster duration={3000} toastOptions={{ style: { background: "red", color: "#fff", border: 0 } }} />

          <div className={styles.registerMenuButton}>
            <input type="submit" value="Entrar" />
          </div>

          <div className={styles.registerMenuLink}>
            <label  >Ya tienes una cuenta? <Link className={styles.link} to="/login"><u>Inicia Sesion</u></Link> </label>


          </div>
        </form>

      </div>

    </div>
  );
}
