import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/home";
import Vans from "./pages/vans";
import AboutPage from "./pages/about";
import VanDetails from "./pages/van-details";
import Host from "./pages/host";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/host" element={<Host />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
