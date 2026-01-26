
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SmartAssistant from './components/SmartAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/developments" element={<Home />} /> {/* For this demo, using Home's properties section */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SmartAssistant />
      </Layout>
    </Router>
  );
};

export default App;
