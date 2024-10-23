import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Header from "./components/header";
import Homepage from "./pages/home";
import Vans from "./pages/vans";

export default function App() {
  return (
    <Layout>
      <Router>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Body>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/vans" element={<Vans />} />
          </Routes>
        </Layout.Body>
        <Layout.Footer>Footer</Layout.Footer>
      </Router>
    </Layout>
  );
}
