
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Assets/Navbar/Navbar';
import Shop from './Pages/Shop';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product/Product';
import Display from './Pages/Display'; 

function App() {
  return (
    <Router> {/* ✅ This must wrap everything using Link/Route */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<Men />} />
         <Route path="/women" element={<Women />} />
         <Route path="/kids" element={<Kids />} />
         <Route path="/LoginSignup" element={<LoginSignup />} />
         <Route path="/Product" element={<Product />} />
          <Route path="/display" element={<Display />} />
      </Routes>
      
    </Router>

   
  );
}

export default App;
