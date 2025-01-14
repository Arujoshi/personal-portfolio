import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import Contact from "./Contact"; // Make sure to create a Contact component
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import './App.css';

function App() {
    return (
      <Router>
      <Layout>
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
      </Layout>
    </Router>
    );
  };

export default App;
