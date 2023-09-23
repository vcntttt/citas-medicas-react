import { useState } from 'react';
import styles from '../styles/Formulary.module.css'
import { Link } from 'react-router-dom';


export default function Form() {

    
    const dataForm = data => {
        data.preventDefault();
        let infoData = data.target;
        console.log(infoData);
    } 

    const [Data, SetData] = useState(false);

    const handleData = () => {
        {console.log("enviados")}

        SetData(true);
    }

    return (
        <div className={styles.modal}>
            <div className={styles.ventana}>
                <h1>Ingrese datos personales</h1>
                <form className={styles.form} action=''>
                    <div className={styles.formDataInfo}>

                        <input type="text" placeholder='Rut:' />
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='Apellidos' />
                        <select className={styles.select}name="" id="" >
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                        </select>
                    </div>

                    {/* 
                    <div className={styles.formDataContact}>
                        <h2>Datos de contacto</h2>


                        <input type="text" placeholder='Rut:' />
                        <input type="text" placeholder='Telefono' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Direccion' />
                    </div>

                    */}



                </form>

    
                <input className={styles.SubmitButton} type="submit" value="enviar" onClick={handleData}/>






                <div className={styles.ExitButton}>
                    <Link to="/"><button>Salir</button></Link>

                </div>


            </div>
        </div>
    )
}