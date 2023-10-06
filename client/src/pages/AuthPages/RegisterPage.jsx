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

              <Input inputMethod="email"  registerMethod={register} />

            </div>

            <div className={styles.inputContainer}>
              <label htmlFor=""></label>

              <Input inputMethod="password" registerMethod={register} />
              
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor=""></label>

              <Input inputMethod="passwordConfirmation" registerMethod={register} />

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
