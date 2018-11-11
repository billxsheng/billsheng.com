import React, { Component } from 'react';
import styles from './ProjectSelect.css';
import CSSModules from 'react-css-modules';
import ProjectSelectTile from './ProjectSelectTile/ProjectSelectTile';
import { NavLink } from 'react-router-dom';


class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    

    render() {

        return(
            <div className="container">
                <div styleName="curve">
                    <div className="row">
                        <h1>
                            Projects
                        </h1>
                    </div>
                        <p>
                            A collection of personal projects and experiences.
                        </p>
                </div>
                <div styleName="project-select-row" className="row">
                    <NavLink styleName="project-select-link" to="/projects/web-mobile" className="col-md-3">
                        <ProjectSelectTile type="Web & Mobile"/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/data-science" className="col-md-3">
                        <ProjectSelectTile type="Data Science"/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/internships-experience" className="col-md-3">
                        <ProjectSelectTile type="Internships & Experience"/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/hackathons" className="col-md-3">
                        <ProjectSelectTile type="Hackathons"/>
                    </NavLink>
                </div>
            </div>
        )
    }
};



export default CSSModules(Projects, styles);