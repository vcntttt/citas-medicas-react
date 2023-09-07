import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Jobs from "./pages/JobsPage.jsx";
import DrsPage from "./pages/Drspage.jsx";
import NotFound from "./pages/NotFound.jsx";
import MyCalendar from "./pages/CalendarPage.jsx";
import NavBar from "./components/Header/NavBar.jsx";
import Login from "./pages/LoginPage.jsx";
import Register from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PickPage from "./pages/PickStardarPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/drspage" element={<DrsPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/calendar" element={<MyCalendar />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pick" element={<PickPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}