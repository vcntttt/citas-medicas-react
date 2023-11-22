import image from "../../assets/registerImg.webp";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Toaster } from "sonner";
import useAuthStore from "../../store/authStore";
import useErrorHandler from "../../hooks/useErrors";
import useIfAuth from "../../hooks/useIfAuth";
import Input from "../../components/Input/Input.jsx";
import { registerRequest } from "../../api/auth.js";
export default function Register() {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const { setToken, setUserData, setError, errors: registerErrors } = useAuthStore();

  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    try{
      const res = await registerRequest(data);
      setToken(res.data.token)
      setUserData([])
      navigate('/')
    } catch (error){
      setError(error.response.data)
    }
  })
  useErrorHandler(registerErrors);
  useIfAuth();

  return (
    <div className="flex flex-col-reverse h-screen w-screen md:flex-row items-center justify-center  bg-[#2E3238]">

      <img className="hidden md:block w-auto md:h-3/6 md:mr-3 md:ml-3 lg:h-4/5 " src={image} />

      <div className="h-4/6 w-full  items-center   md:h-3/6 ml:lg:shadow-2xl lg:h-4/5 lg:w-2/6 lg:shadow-2xl">

        <div className="  w-6/6 md:bg-[#2E3238] h-full   lg:bg-[#2E3238]">
          
          <div className="flex h-1/4 items-center justify-center md:h-1/6 lg:lg:bg-[#2E3238] ">
            <h1 className=" text-white text-center text-3xl">Registro</h1>
          </div>
          <form className=" h-3/4" action="" onSubmit={handleSubmit(onSubmit)}>

            <div className=" flex-col h-3/6  ">
              <Input type="email" placeholder="Email" register={register} errors={errors} />

              <Input type="password" placeholder="Contraseña" register={register} errors={errors} />

              <Input type="passwordConfirmation" placeholder="Confirmar Contraseña" register={register} errors={errors} />
            </div>


            <Toaster duration={3000} toastOptions={{ style: { background: "red", color: "#fff", border: 0 } }} />

            <div className="h-2/6 flex items-center justify-center                                                        ">
              <input className="w-[200px] h-[50px] bg-[#55CCC9] hover:cursor-pointer hover:bg-[#46a4a1]" type="submit" value="Entrar" />
            </div>

            <div className=" h-1/6 flex justify-center text-center md:text-xs  md:px-5 md:h-2/6 items-center  my-0    lg:text-lg                                    ">
              <label className="text-[white]"  >Ya tienes una cuenta? <Link className="no-underline" to="/login"><u>Inicia Sesion</u></Link> </label>
            </div>

          </form>

        </div>



      </div>

    </div>
  );
}
