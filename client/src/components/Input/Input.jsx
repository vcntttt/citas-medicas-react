
export default function Input({type, errors, register }) {
    return (
        <div>
            <input className="text-white shadow-none bg-[#2e3238] mx-auto my-5 border-b-[white] border-[none] border-b border-solid"
            type={type} placeholder={type === "password" ? "Contraseña" : "Email"} 
            {...register(type, { required: true})}/>
            {errors[type] && <p>Este campo es requerido</p>}
        </div>
    );
  } 