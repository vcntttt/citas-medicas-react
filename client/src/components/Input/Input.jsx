

export default function Input({ type, placeholder, errors, register }) {
    return (
        <div>
            <input className="py-2.5 w-1/3 pr-10 text-white bg-transparent border-0 border-b-2"
                type={type === "passwordConfirmation" ? "password" : type} placeholder={placeholder}
                {...register(type, { required: true })} />
            {errors[type] && <p className="text-red-600">Este campo es requerido</p>}

        </div>


    );
} 