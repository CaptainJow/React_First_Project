import React from "react";
import Navbar from "./Components/Nav/Navbar";
//import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Exper/Experience";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import { Route , Routes }from "react-router-dom" ; 
function App() {
  return (<>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="#socials" element={<Footer />} />
        </Routes>
        <Experience />
        <Footer />
  </>

  );
}

export default App;
