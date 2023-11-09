import { useForm } from "react-hook-form"
import { Link , useNavigate} from "react-router-dom";
import { Toaster } from "sonner";
import image from "../../assets/loginIMG.webp"
import useAuthStore from "../../store/authStore";
import useErrorHandler from "../../hooks/useErrors";
import Input from "../../components/Input/Input.jsx";
import { loginRequest } from "../../api/auth.js";
import { getProfileRequest } from "../../api/profile.js";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUserData ,setToken, errors: sigInErrors, setError } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try{
      const res = await loginRequest(data);
      setToken(res.data.token)
      const userRes = await getProfileRequest();
      setUserData(userRes.data)
      navigate('/')
    } catch (error){
      setError(error.response.data)
    }
  })
  
  useErrorHandler(sigInErrors);
  return (
    <div className=" md:flex items-center justify-center h-screen bg-[#2E3238]">
      <div className=" h-4/6 md:h-2/6 lg:h-4/5 lg:w-2/6 rounded-lg shadow-2xl">
        <div className="w-full  h-full">
          <div className="flex h-1/4 items-center justify-center md: md:h-1/6">
            <h1 className="text-white text-center text-3xl">Login</h1>
          </div>
          <form className="h-3/4" action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="h-2/6 justify-center text-center md:h-4/6 lg:h-2/6">
              <Input type="email" placeholder="Email" register={register} errors={errors} />
              <Input type="password" placeholder="Contraseña" register={register} errors={errors} />
            </div>
            <div className="  h-1/4 flex justify-center  items-center ">
              <input className="h-1/3 w-2/6 hover:cursor-pointer hover:text-black bg-[#55ccc9] hover:bg-[#55ccc9]" type="submit" value="Entrar" />
            </div>
            <div className="h-1/6  flex justify-center  items-center " >
              <label className="text-[white]" >No tienes una cuenta? <Link to="/register" className="underline">Registrate</Link> </label>
              <Toaster duration={3000} toastOptions={{ style: { background: "red", color: "#fff", border: 0 } }} />
            </div>
          </form>
        </div>
      </div>
        <img className="w-auto md:h-2/6 lg:h-4/5 md:flex hidden" src={image} />
    </div>
  )
}