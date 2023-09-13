import { useLocation } from "react-router-dom";
import NavBar from "../Header/NavBar.jsx";
export default function Layout() {
    const location = useLocation();
    const path = location.pathname;
  if (path === "/login" || path === "/register") {
    return null;
  }
  return (
    <div>
      <NavBar />
    </div>
  );
}
