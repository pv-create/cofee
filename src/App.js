import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Home';
import About from './component/About';
import Menu from './component/Menu';
import React from 'react';
import { Route } from 'react-router-dom';
import NaviBar from './component/Navibar';
import Footer from './component/Footer';


import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';




function App() {
  return (
    <>
      <NaviBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App;
