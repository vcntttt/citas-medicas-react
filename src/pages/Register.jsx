import { useForm } from "react-hook-form"


export default function Register() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data) 
  return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Email</label>
            <input {...register("email")} />
            <label htmlFor="">Contraseña</label>
            <input {...register("Password")} />
            <label htmlFor="">Repetir Contraseña</label>
            <input {...register("ConfirmPass")} />
            <input type="submit" />
        </form>
  )
}