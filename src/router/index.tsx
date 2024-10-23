import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";

import Home from "../pages/home";
import Teams from "../pages/teams";
import Players from "../pages/players";
import Footer from "../components/footer";
import Team from "../pages/team";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col max-w-6xl px-4 mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/:teamId" element={<Team />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:playerId" element={<Players />} />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
