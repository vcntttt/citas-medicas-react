import { Link } from "react-router-dom";
import image from "../../assets/jobIMG.svg";
export default function Card({item}) {
  return (
    <Link to= {`/calendar/${item}`}>
    <div className = "inline-block mt-50 ml-153 bg-onahau-400 p-5 rounded-xl">
    <img className = "relative m-auto mb-17 w-40 h-40 " src={image} alt="a" />
    <div className = "bg-greencus-500 w-130 h-5 m-auto text-center">
    <p className = "m-auto text-white text-lg">{item}</p>
    </div>
  </div>
  </Link>
  );
}