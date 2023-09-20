import styles from '../styles/Formulary.module.css'


export default function Form() {

    const dataForm = data => {
        data.preventDefault();
        let infoData = data.target;
        console.log(infoData);
    } 

    return (
        <div className={styles.modal}>
            <div className={styles.ventana}>
                <h1>Formulario</h1>
                <form className={styles.form}>
                    <h2>Datos personales</h2>
                    <div className={styles.formDataInfo}>
                        <input type="text" placeholder='Rut:' />
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='Primer apellido' />
                        <input type="text" placeholder='Segundo apellido' />
                        <select name="" id="">
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                        </select>
                        <input type="text" placeholder='Direccion' />
                    </div>
                    <h2>Datos de contacto</h2>
                    <div className={styles.formDataContact}>
                    <input type="text" placeholder='Rut:' />
                        <input type="text" placeholder='Telefono' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <input type="submit" value="enviar"/>

                </form>


            </div>
        </div>
    )
}