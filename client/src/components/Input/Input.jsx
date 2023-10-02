import styles from './Input.module.css';
import { useForm } from "react-hook-form"

export default function Input({typeText,placeHolder,name,registerMethod}) {

    return (

        <input type={typeText} placeholder={placeHolder} {...registerMethod(name, { required: true})}/>

    );
  }