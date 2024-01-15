import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css"

const App = () => {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={About}/>
          <Route path="/projects" element={Projects}/>
          <Route paht="/contact" element={Contact}/>
        </Routes>
      </Router>
    );
};

export default App;
