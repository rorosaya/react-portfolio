import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import person from "../assets/person.png";
import projects from "../assets/projects.png";
import mail from "../assets/mail.png";
import "../styles/nav.css";

export default function Nav() {


    const location = useLocation();

    const getNavPositionClass = () =>{
        switch (location.pathname) {
            case "/":
                return "nav-about";
            case "/projects":
                return "nav-projects";
            case "/contact":
                    return "nav-contact";
            default:
                return "";    
        }
    };

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/":
                return "About";
            case "/projects":
                return "Projects";
            case "/contact":
                return "Contact";
            default:
                return ""; 
        }
    }

    const navPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    }

    const renderNavLink = (to, pageTitle, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";
        return (
            <Link to ={to} className={linkClass}>
                <img className="icon" src={imgSrc} alt={altText} />
                {<h1 className="page-title">{pageTitle}</h1>}
            </Link>
        )
    }

    return (
        <body>
            <nav class="navbar"></nav>
            <nav className={'nav ${navPositionClass}'}>
                {renderNavLink(
                    "/",
                    "About",
                    person,
                    "person icon",
                    "nav-about"
                )}
                {renderNavLink(
                    "/projects",
                    "Projects",
                    projects,
                    "projects icon",
                    "nav-projects"
                )}
                {renderNavLink(
                    "/contact",
                    "Contact",
                    mail,
                    "mail icon",
                    "nav-contact"
                )}
                    
            </nav>
        </body>

    )
}