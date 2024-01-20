import React, { Component } from "react"
import github from "../assets/github.png"
import classNames from 'classnames'
import projects from "./ProjectsData"
import "../styles/projectsMenu.css"

export default class ProjectsMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeProject: 1,
        }
    };

    handleProjectClick = (project) => {
        this.setState({
            activeProject: project,
        })
    }

    renderContent = (projects) => {
        return projects.map((project,index) => (
            <div key={index} className={`project-sub-container-${index + 1}`}>
                <div className="project-sub-container-inner-border">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-image-container">
                        <img className="project-image" src={project.image}/>
                    </div>
                    <h4 className="highlights-heading"> Highlights </h4>
                    <span className="line-break"></span>
                    <div className="description">{project.description}</div>
                    <div className="link-container">
                        <a href={project.github}> 
                            <img className="github-project-icon" src={github}/>
                        </a>
                    </div>
                </div>


            </div>
        ));
    }

    render() {
        const {activeProject} = this.state;
        const projectItems = [projects[1].abbre, projects[2].abbre, projects[3].abbre, projects[4].abbre];
    
        return (
            <>
            <div className="project-menu">
                <div className="project-items-container">
                    {projectItems.map((item, index) => (
                        <div 
                            key={index} 
                            className={classNames("project-item", 
                                {activeProject: activeProject === index + 1}
                            )}
                            onClick={() => this.handleProjectClick(index + 1)}
                        >
                            <h2 className="project-abbre">{item}</h2>
                        </div>
                    ))}
                </div>
                <div className="project-items-subcontainer">
                        {this.renderContent([projects[activeProject]])}
                </div>
            </div>
            </>
        );
    };
    
}