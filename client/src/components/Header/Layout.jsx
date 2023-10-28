import { useLocation } from "react-router-dom";
import NavBar from "../Header/NavBar.jsx";
export default function Layout() {
    const location = useLocation();
    const path = location.pathname;
  if (path === "/login" || path === "/register") {
    return null;
  }
  let styles = ''
  if (path === "/drs") {
    styles = 'bg-slate-800 text-white';
  }
  if(path == "/we" || path == "/jobs") {
    styles = 'bg-greycus-800 text-white';
  }
  return (
    <div>
      <NavBar styles={styles}/>
    </div>
  );
}