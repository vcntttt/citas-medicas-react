import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import Jobs from './pages/JobsPage.jsx';
import DrsPage from './pages/Drspage.jsx';
import NotFound from './pages/NotFound.jsx';
export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/drspage" element={<DrsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  )
}
