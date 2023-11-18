

export default function Input({ type, placeholder, errors, register }) {
    return (
        <div className=" flex flex-col items-center justify-center ">
            <input className="py-2.5 w-4/6  text-white bg-transparent border-0 border-b-2 lg:my-4"
                type={type === "passwordConfirmation" ? "password" : type} placeholder={placeholder}
                {...register(type, { required: true })} />
            {errors[type] && <p className="text-red-600">Este campo es requerido</p>}
        </div>
    );
} 
