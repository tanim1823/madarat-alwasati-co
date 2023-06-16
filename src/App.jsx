import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Protfolio from "./pages/Protfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Contract from "./pages/Contract";
import Projects from "./pages/Projects";
import MissionVision from "./components/MissionVision";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission_vision" element={<MissionVision />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}
/**
 
 https://drive.google.com/file/d/16EmlFwu6J1EtA4vqPOSYeAWZaDBsTu-L/view?usp=drive_link
 
 */
export default App;
