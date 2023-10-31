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
    <div className="flex text-center justify-center mx-0 my-20">
      <div className="w-1/5 bg-[#2e3238]">
        <div className="flex justify-center items-center h-1/5">
          <h1 className="font-normal text-4xl text-white">Login</h1>
        </div>
        <form className="h-4/5" action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="h-2/5 flex flex-col justify-center items-center mb-10">
            <Input type="email" placeholder="Email" register={register} errors={errors} />
            <Input type="password"  placeholder="Contraseña" register={register} errors={errors} />
          </div>
          <div className="h-[30%] flex justify-center text-[black] ">
            <input className=" h-[50px] w-[200px] hover:cursor-pointer hover:text-black bg-[#55ccc9] hover:bg-[#55ccc9]" type="submit" value="Entrar" />
          </div>
          <div  className="h-[30%] flex justify-center items-center" >
            <label className="text-[white]" >No tienes una cuenta? <Link to="/register" className="underline">Registrate</Link> </label>
            <Toaster duration={3000} toastOptions={{ style: { background: "red", color: "#fff", border: 0 } }} />
          </div>
        </form>
      </div>
      <img className="w-2/5" src={image} />
    </div>
  )
}