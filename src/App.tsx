import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";

export default function App() {
  return (
    <Layout>
      <Router>
        <Layout.Header>Header</Layout.Header>
        <Layout.Body>
          <Routes>
            <Route path="/" element={<>dsd</>} />
          </Routes>
        </Layout.Body>
        <Layout.Footer>Footer</Layout.Footer>
      </Router>
    </Layout>
  );
}
