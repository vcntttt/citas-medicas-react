import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import Jobs from "./pages/JobsPage.jsx";
import DrsPage from "./pages/Drspage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/LoginPage.jsx";
import Register from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Form from "./pages/FormularyPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import ConfirmPage from "./pages/ConfirmPage.jsx";
import Layout from "./components/Header/Layout.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/drspage" element={<DrsPage/>} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/calendar/:id" element={<CalendarPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/formulary" element={<Form />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}