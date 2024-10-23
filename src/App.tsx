import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/home";
import Vans from "./pages/vans";
import AboutPage from "./pages/about";
import VanDetails from "./pages/van-details";
import Dashboard from "./pages/host/dashboard";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import HostVans from "./pages/host/vans";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/host" element={<Dashboard />}>
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
