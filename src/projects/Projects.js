import React, { Component } from 'react'
import github from "../assets/github.png"
import ProjectsMenu from "./ProjectsMenu"
import "../styles/projects.css"

export default class Projects extends Component {


    render(){
        return (
            <>
                <h1 className="title">Projects</h1>
                <a  className="github-btn-container" href="https://github.com/rorosaya">
                    <button  class="btn github-btn">
                        <img className="github-btn-icon" src={github}/>
                        Github
                    </button>
                </a>

                <ProjectsMenu/>
            </>
        )
    }
    
    
}
