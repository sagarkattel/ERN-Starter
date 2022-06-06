import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Route,Routes} from "react-router-dom";
import Navbar from './Navbar';
import Customers from "./Customers";


const App = () => {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       </Route>
      </Routes>
    </div>
  )
}

export default App