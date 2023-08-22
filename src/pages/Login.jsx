import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

export default function Login() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data=> console.log(data)
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email: </label> <br />
        <input {...register ("email")} />
        <label htmlFor="psw">Password: </label>
        <input {...register ("password")} />
        <input type="submit" />
        <label >No tienes una cuenta? <Link to="/register"><u>Registrate</u></Link> </label>
    </form>
  )
}
