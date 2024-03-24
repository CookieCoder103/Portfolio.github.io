// ========================== 
//    Components Imported     
// ========================== 
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import Testimonials from "./Components/Testimonials";
import Products from "./Components/Products";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer";

// https://www.youtube.com/watch?v=CgkZ7MvWUAA&ab_channel=BroCode 

export default function App() {
  return (
    <>
    <Navbar />
      <div className="appContainer">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Routes> 
      <Footer />
    </div>
    </>
  );
}


