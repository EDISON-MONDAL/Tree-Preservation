import React, { useState, createContext } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import FooterMenu from "./components/FooterMenu.jsx";
import bgPattarn from './assets/bg-body.jpg'
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Programs from "./pages/Programs.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import GalleryDetails from "./pages/GalleryDetails.jsx";

export const MyContext = createContext();

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const values = {
    menuOpen,
    setMenuOpen,
  };

  return (
    <MyContext.Provider value={values}>
      <div className="text-[#404040] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bgPattarn})`,
          backgroundRepeat: 'repeat',
        }}>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery-details" element={<GalleryDetails />} />
        </Routes>

        <Footer />

        <FooterMenu />
      </div>
    </MyContext.Provider>
  );
};

export default App;