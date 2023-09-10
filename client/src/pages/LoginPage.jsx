import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";


export default function Login() {

    const {register, handleSubmit} = useForm();
    const {signIn, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const onSubmit = (data) => (signIn(data));

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
    }},[isAuthenticated]);
    
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label>Email: </label>
        <input {...register ("email", { required: true })} placeholder="Email" />
        <label >Password: </label>
        <input type="password" {...register ("password", { required: true })} placeholder="Password" />
        <input type="submit" />
        <label >No tienes una cuenta? <Link to="/register"><u>Registrate</u></Link> </label>
    </form>
  )
}