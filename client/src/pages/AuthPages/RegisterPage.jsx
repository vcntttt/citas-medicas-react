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
    <div className="flex justify-center mt-20 mb-12 mx-0">
      <img src={image} />


      <div className="bg-[#2E3238] w-1/5">

        <div className="flex h-1/4 items-center justify-center">
          <h1 className=" text-[white] font-medium text-[2rem]">Registro</h1>
        </div>


        <form className="h-3/4" action="" onSubmit={handleSubmit(onSubmit)}>

          <div className="flex flex-col text-center h-3/6">
            <Input type="email" placeholder="Email" register={register} errors={errors} />

            <Input type="password" placeholder="Contraseña" register={register} errors={errors} />

            <Input type="passwordConfirmation" placeholder="Confirmar Contraseña" register={register} errors={errors} />
          </div>


          <Toaster duration={3000} toastOptions={{ style: { background: "red", color: "#fff", border: 0 } }} />

          <div className="flex h-1/5 justify-center items-center">
            <input className="w-[200px] h-[50px] bg-[#55CCC9] hover:cursor-pointer hover:bg-[#46a4a1]"  type="submit" value="Entrar" />
          </div>

          <div className="flex h-1/4 justify-center items-center text-[white]">
            <label  >Ya tienes una cuenta? <Link className="no-underline" to="/login"><u>Inicia Sesion</u></Link> </label>


          </div>
        </form>

      </div>

    </div>
  );
}
