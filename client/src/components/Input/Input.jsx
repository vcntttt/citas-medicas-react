export default function Input({type,placeholder, errors, register }) {
    return (
        <div>
            <input className="text-white shadow-none bg-[#2e3238] mx-auto my-5 border-b-[white] border-[none] border-b border-solid"
            type={type === "passwordConfirmation" ? "password" : type} placeholder={placeholder} 
            {...register(type, { required: true})}/>
            {errors[type] && <p className="text-red-600">Este campo es requerido</p>}
        </div>
    );
  }