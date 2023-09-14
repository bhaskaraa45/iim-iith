import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home_page.jsx";
import TeamPage from "./pages/team_page.js";
import ScrollToTop from "./services/scrollToTop.js";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/team"  element = {<TeamPage/>}/>
        
      </Routes>
    </Router>

    
  );
}

export default App;
