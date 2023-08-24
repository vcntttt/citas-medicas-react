import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
    const {register, handleSubmit} = useForm();
    const {signIn} = useAuth();
    const onSubmit = (data) => signIn(data);

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
