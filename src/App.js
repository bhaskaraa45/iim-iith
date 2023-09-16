import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home_page.jsx";
import TeamPage from "./pages/team_page.js";
import ScrollToTop from "./services/scrollToTop.js";
import AboutPage from "./pages/about_page.jsx";
import GalleryPage from "./pages/gallery_page.jsx"

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/team"  element = {<TeamPage/>}/>
        <Route exact path="/about"  element = {<AboutPage/>}/>
        <Route exact path="/gallery"  element = {<GalleryPage/>}/>
      </Routes>
    </Router>

    
  );
}

export default App;
