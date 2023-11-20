import { Link } from "react-router-dom";
import image from "../../assets/jobIMG.svg";
export default function Card({item}) {
  return (
    <Link to={`/calendar/${item}`} className="lg:mx-8 md:mx-4">
      <div className="bg-onahau-400 p-5 rounded-xl">
        <img className="m-auto mb-17 w-40 h-40" src={image} alt="a" />
        <p className="m-auto text-white text-lg bg-teal-500 rounded-md text-center">{item}</p>
      </div>
    </Link>
  );
}