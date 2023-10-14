import image from "../assets/404.webp";
import { Link} from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex justify-center w-[1200px] h-[600px] mt-16">
      <img src={image} />

      <div className="w-1/4 bg-gray-800">
        <div className="flex flex-col items-center m-10 h-3/5">
          <h1 className="content-center text-white font-[400] text-[2rem]">No podemos encontrar la página que estás buscando</h1>
          <p className="text-center text-white mt-[70px]">Regresa a la página de inicio apretando el boton de abajo</p>
        </div>

        <div className="bg-teal-300 mx-4 px-2 py-1 text-black text-center no-underline">
          <label className="text-[20px] font-[80px]">
            <Link className="bg-teal-300 mx-4 px-2 py-1 text-black text-center no-underline" to="/">
              Pagina principal
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}
