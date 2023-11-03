import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Jobs from "./pages/DatePages/JobsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/AuthPages/LoginPage.jsx";
import Register from "./pages/AuthPages/RegisterPage.jsx";
import ProfilePage from "./pages/InfoPages/ProfilePage.jsx";
import Form from "./pages/AuthPages/FormularyPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import ConfirmPage from "./pages/DatePages/ConfirmPage.jsx";
import Layout from "./components/Header/Layout.jsx";
import CalendarPage from "./pages/DatePages/CalendarPage.jsx";
import JobsListPage from "./pages/InfoPages/JobsListPage.jsx";
import WePage from "./pages/InfoPages/WePage.jsx";
import DrsPage from "./pages/InfoPages/Drspage.jsx";
import DateFormPage from "./pages/DatePages/DateFormPage.jsx";

export default function App() {
  return (
      <Router>
        <Layout/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/we" element={<WePage />} />
          <Route path="/drs" element={<DrsPage/>} />
          <Route path="/jobsList" element={<JobsListPage />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/calendar/:id" element={<CalendarPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
          <Route path="/confirm/dr" element={<DateFormPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/formulary" element={<Form />} />
          </Route>
        </Routes>
      </Router>
  );
}