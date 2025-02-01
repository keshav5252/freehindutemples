import React from 'react';
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <main>

        <Header />
        
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<Aboutus />} />
          {/* <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} /> */}
        </Routes>

      </main>
    </Router>
  )
}

export default App
