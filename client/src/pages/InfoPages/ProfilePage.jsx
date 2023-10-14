export default function ProfilePaga() {
  return (
    <div>
      <h1 className="text-black">Pagina del Perfil</h1>
      <div className= "absolute bg-gray-800 h-[700px] w-[500px] rounded-[20px]">
        <div className="text-center m-auto bg-white h-[30px] w-[400px] text-[17pt] font-serif font-bold rounded-[10px] mt-4">
          <p> Tus horas</p>
        </div>
        <div className="absolute bg-white h-[200px] w-[400px] rounded-[10px] mt-[40px] ml-[50px]">
          <p className="text-[17pt] font-serif font-bold mt-[31px] ml-[15px]">Especialidad:</p> <button className="absolute mt-[-20px] ml-[290px] bg-[#00ffff] w-[100px] h-[30px]">Cambiar hora</button>
          <p className="text-[17pt] font-serif font-bold mt-[31px] ml-[15px]">Fecha:</p> <button className="absolute mt-[-20px] ml-[290px] bg-[#00ffff] w-[100px] h-[30px]">Cancelar hora</button>   
          <p className="text-[17pt] font-serif font-bold mt-[31px] ml-[15px]">Doctor:</p> 
        </div>
      </div>

      <div className= "absolute mt-[100px] ml-[600px] bg-gray-800 h-[600px] w-[800px] rounded-[20px]">
        <div className="absolute bg-white h-[300px] w-[600px] mt-[35px] ml-[100px] rounded-[10px]">
          <p className="text-[17pt] font-serif font-bold ml-[15px]">Datos personales</p>
          <p className="text-[17pt] font-serif font-bold mt-[31px] ml-[24px]">Nombre:</p> <button className="absolute mt-[-47px] ml-[480px] bg-[#00ffff] w-[100px] h-[30px]">Modificar</button>
          <p className="text-[17pt] font-serif font-bold mt-[31px] ml-[24px]">Apellido:</p> <button className="absolute mt-[-47px] ml-[480px] bg-[#00ffff] w-[100px] h-[30px]">Modificar</button>
          <p className="text-[17pt] font-serif font-bold mt-[31px] ml-[24px]">Direccion:</p> <button className="absolute mt-[-47px] ml-[480px] bg-[#00ffff] w-[100px] h-[30px]">Modificar</button>
          <p className="text-[17pt] font-serif font-bold mt-[31px] ml-[24px]">Rut:</p> <button className="absolute mt-[-47px] ml-[480px] bg-[#00ffff] w-[100px] h-[30px]">Modificar</button>
        </div>

      <div>
        <div className="absolute bg-white h-[220px] w-[600px] mt-[350px] ml-[100px] rounded-[10px]">
          <p className="text-[17pt] font-serif font-bold ml-[15px]">Datos de Contacto</p> 
          <p className="text-[17pt] font-serif font-bold mt-[26px] ml-[24px]">Telefono:</p> <button className="absolute mt-[-47px] ml-[480px] bg-[#00ffff] w-[100px] h-[30px]">Modificar</button>
          <p className="text-[17pt] font-serif font-bold mt-[26px] ml-[24px]">Email:</p> <button className="absolute mt-[-47px] ml-[480px] bg-[#00ffff] w-[100px] h-[30px]">Modificar</button>
          <p className="text-[17pt] font-serif font-bold mt-[26px] ml-[24px]">Contraseña:</p> <button className="absolute mt-[-47px] ml-[480px] bg-[#00ffff] w-[100px] h-[30px]">Modificar</button>
        </div>

      </div>

      </div> 
    </div>
  )
}


