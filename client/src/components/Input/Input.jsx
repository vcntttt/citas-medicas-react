import { useForm } from "react-hook-form"

export default function Input({inputMethod,registerMethod}) {

    const {register, handleSubmit, formState: { errors },} = useForm();

    let typeText,placeHolder,name = ""

    if (inputMethod =="email" ) {
        console.log("cosas")
        typeText = "text"
        placeHolder = "Email"
        name = "email"
    } else if (inputMethod =="password" ) {
        typeText = "password"
        placeHolder = "Contraseña"
        name = "password"
    } else if (inputMethod =="passwordConfirmation" ) {
        typeText = "password"
        placeHolder = "Confirmar Contraseña"
        name = "passwordConfirmation"
    }else {

    }


    return (

        <div>
            <input className='' type={typeText} placeholder={placeHolder} {...registerMethod(name, { required: true})}/>
            {errors.name && <p>Este campo es requerido</p>}


        </div>

    );
  }