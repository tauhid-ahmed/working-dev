import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/home";
import Vans from "./pages/vans";
import AboutPage from "./pages/about";
import VanDetails from "./pages/van-details";
import HostLayout from "./pages/host/layout";
import Dashboard from "./pages/host/dashboard";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import HostVans from "./pages/host/vans";
import HostVanDetails from "./pages/host/vans-details";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />} />
          </Route>

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetails />} />
          </Route>

          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
