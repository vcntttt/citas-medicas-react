import styles from "../../styles/Register.module.css";
import image from "../../assets/registerImg.webp";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Toaster} from "sonner";
import useAuthStore from "../../store/authStore";
import useErrorHandler from "../../hooks/useErrors";
import useIfAuth from "../../hooks/useIfAuth";
import Input from "../../components/Input/Input.jsx";
export default function Register() {

  const {register, handleSubmit, formState: { errors },} = useForm();

  const { signUp, errors: registerErrors} = useAuthStore();
  
  const navigate = useNavigate();
  const onSubmit =  handleSubmit(async (data) => {
    signUp(data, navigate);
  })
  useErrorHandler(registerErrors);
  useIfAuth();

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

              <Input typeText="email" placeHolder="Email" name="email" registerMethod={register} />
              {errors.email && <p className={styles.errorField}>Este campo es requerido</p>}

            </div>

            <div className={styles.inputContainer}>
              <label htmlFor=""></label>

              <Input typeText="password" placeHolder="Contraseña" name="password" registerMethod={register} />
              {errors.password && <p className={styles.errorField}>Este campo es requerido</p>}
              
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor=""></label>

              <Input typeText="password" placeHolder="Confirmar Contraseña" name="passwordConfirmation" registerMethod={register} />
              {errors.passwordConfirmation && <p className={styles.errorField}>Este campo es requerido</p>}

            </div>
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
          <div className={styles.containerSubmit}>
            
            <input className={styles.submit} type="submit" value="Entrar" />
          </div>
          <label className={styles.containerLink} >Ya tienes una cuenta? <Link className={styles.link} to="/login"><u>Inicia Sesion</u></Link> </label>
        </form>
      </div>
    </div>
  );
}
