import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";

import Home from "../pages/home";
import Teams from "../pages/teams";
import Players from "../pages/players";
import Footer from "../components/footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-neutral-900 text-white max-w-screen-lg px-4 mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:id" element={<Players />} />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
