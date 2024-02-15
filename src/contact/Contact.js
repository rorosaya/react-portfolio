import React, { Component } from 'react'
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import "../styles/contact.css"

const Contact = () => {

    
    return (
        <>
        <h1 className="title">Contact</h1>
        <br/>
        <h2 className="sub-heading">Get In Touch</h2>
        <div className="contact-info-outer-container">
            <a className="contact-info-link-container" id="contactEmail" href="mailto:rawad.sayah.j@gmail.com">
                <img className="contact-icon" src={mail}/>
                <p className="contact-text">rawad.sayah.j@gmail.com</p>
            </a>
            <a className="contact-info-link-container" id="contactLinkedIn" href="https://linkedin.com/in/rawadsayah">
                    <img className="contact-icon" src={linkedin}/>
                    <p className="contact-text">LinkedIn</p> 
            </a>
        </div>
        </>
    )
    
}

export default Contact;
