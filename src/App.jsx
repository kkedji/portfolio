import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Applications from './pages/Applications';
import Projects from './pages/Projects';
import About from './pages/About';
import Journey from './pages/Journey';
import Realisations from './pages/Realisations';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/about" element={<About />} />
          <Route path="/parcours" element={<Journey />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
