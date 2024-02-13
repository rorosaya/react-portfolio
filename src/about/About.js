import React, { Component } from 'react';
import profilePic from "../assets/Rawad.png";
import "../styles/about.css";

const About = () => {
    return (
        <>
        <h1 className="title">About</h1>
        <img id="profilePic" src={profilePic}/>
        <div id="aboutBodyContainer">
            <p id="intro">Hello, I'm</p>
            <p id='introName'>Rawad</p>
            <p className="description" id="bio">
                I am a first generation
                <span className="highlight"> Lebanese</span> 
                -American and aspiring Software Engineer.
                <br/> 
                <br/>
                My passion for coding blossomed in my senior year
                of high school, where I participated in 
                my first coding competition (
                <span className="highlight">and won!</span>
                ). This spark fueled
                me to continue my education in 
                <span className="highlight"> Computer Engineering </span>
                at
                <span className="highlight"> Rutgers University - New Brunswick </span>
                where I learned about many computer science fundamentals
                including
                <span className="highlight"> Machine Learning</span>,
                <span className="highlight"> Network Security</span>, and
                <span className="highlight"> Fullstack Development</span>,
                just to name a few, and continued to graduate at 
                the top of my class with the honor of 
                <span className="highlight"> Summa Cum Laude</span>!
                <br/> 
                <br/>
                <span className="line-break"></span>
                <br/> 
                <br/>
            </p>
            <h2 className="sub-heading">Get to know me</h2>
            <p className="description" id="bio">
                <br/>
                Throughout my childhood I would take annual trips
                to visit my relatives in Lebanon which gave me the
                opportunity to learn
                <span className="highlight"> Arabic </span>
                and
                <span className="highlight"> French</span>.
                This has aided me in connecting with numerous
                people across the globe, and sparked in me a passion
                for travel! I love learning about and immersifying 
                myself with different cultures, and I hope to someday
                have travelled the globe doing so. 
                <br/>
                <br/>
                Some of my other hobbies include reading, playing the
                piano, as well as multiple outlets of art, along with
                digital art, photography, and drawing.
            </p>
        </div>
        </>
    );
};

export default About;