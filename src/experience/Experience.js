import React, { Component } from 'react';
import resume from "../assets/resume.pdf";
import "../styles/experience.css";

const Experience = () => {

    return (
        <>
        <h1 className="title">Experience</h1>
        <a  className="cv-btn-container" href={resume} download="Rawad's Resume 2024" >
            <button  class="btn cv-btn">Download CV</button>
        </a>
        <div>
                
        </div>
        </>
    )
    
}

export default Experience;
