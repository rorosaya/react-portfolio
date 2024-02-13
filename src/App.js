import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import DevTitle from "./devTitle/DevTitle.js"
import "./styles/app.css"

const App = () => {
  
  return (
      <Router>
        <meta name = "apple-mobile-web-app-status-bar-style" content = "black-translucent"></meta>
        <DevTitle/>
        <Nav />
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    );
};



export default App;
