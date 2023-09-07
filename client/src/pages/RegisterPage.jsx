import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signUp, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
      }
    }, [isAuthenticated]);
    const onSubmit = (data) => signUp(data) 
  return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Email</label>
            <input {...register("email", { required: true })} placeholder="Email"/>
            {errors.email && <p>Este campo es requerido</p>}
            <label htmlFor="">Contraseña</label>
            <input {...register("Password", { required: true })} placeholder="Password" />
            {errors.Password && <p>Este campo es requerido</p>}
            <label htmlFor="">Repetir Contraseña</label>
            <input {...register("ConfirmPass", { required: true})} placeholder="Password" />
            {errors.ConfirmPass && <p>Este campo es requerido</p>}
            <input type="submit" />
        </form>
  )
}