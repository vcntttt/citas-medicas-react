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
import { AuthProvider } from "./context/AuthContext.jsx";
import ConfirmPage from "./pages/ConfirmPage.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/drspage" element={<DrsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/calendar/:id" element={<MyCalendar />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<Jobs />} />
        </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}