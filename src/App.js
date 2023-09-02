import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Presentation from './components/pages/Presentation';
import Contact from './components/pages/Contact';
import Simulator from './components/pages/Simulator';
import User from './components/pages/User';
function App() {
  return (
    <>
    <Router basename='/courier-react'>
      <Navbar></Navbar>
      <Routes>  
        <Route path="/courier-react" exact element={<Home />} />
          <Route path="/services"  element={<Services />}  />
          <Route path="/user"  element={<User/>}  />
          <Route path="/presentation"  element={<Presentation/>}  />
          <Route path="/contact"  element={<Contact/>}  />
          <Route path="/simulator"  element={<Simulator/>}  />
      </Routes>
    </Router>
    </>
      
  );
}

export default App;
