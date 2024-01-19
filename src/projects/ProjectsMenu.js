import React, { Component } from 'react'
import classNames from 'classnames'
import project from "./ProjectsData"
import "../style/projects.css"
import { render } from 'react-dom'

export default class ProjectsMenu extends Component {
    contructor(props) {
        super(props)
        this.state = {
            activeProject: 1,
        }
    };

    handleProjectClick = (project) => {
        this.ListeningStateChangedEvent({
            activeProject: project,
        })
    }

    renderContent = (projects) => {
        return projects.map((project,index) => (
            <div key={index} className={'project-sub-container-${index + 1}'}>
                <h3>(project.title)</h3>
                <img src={project.image}/>
                <div>project.description</div>
                <div className="link-container">
                    <a href={project.github}> GITHUB </a>
                </div>

            </div>
        ));
    }

    render() {
        const {activeProject} = this.state;
        const projectItem = ["PROJECT 1", "PROJECT 2", "PROJECT 3"];
    
        return (
            <>
            <h1 className="title">Projects</h1>
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
                            <h2 className="title">{item}</h2>
                        </div>
                    ))}
                </div>
                <div className="project-items-subcontainer">

                </div>
            </div>
            </>
        );
    };
    
}