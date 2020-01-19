import React, { Component } from 'react';
import styles from './ProjectSelect.css';
import CSSModules from 'react-css-modules';
import ProjectSelectTile from './ProjectSelectTile/ProjectSelectTile';
import { NavLink } from 'react-router-dom';
import projects from '../../assets/projects';
import Fade from 'react-reveal/Fade';


class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container">
                <span styleName="curve" className="container">
                    <div className="row">
                        <h1>
                            {projects.headings.projects.title}
                        </h1>
                    </div>
                        <p>
                            {projects.headings.projects.description}
                        </p>
                </span>
                    <div styleName="project-select-row" className="row">
                        <NavLink styleName="project-select-link" to="/projects/experience" className="col-md-3">
                            <ProjectSelectTile name="exp" type={projects.headings.experience.title} />
                        </NavLink>
                        <NavLink styleName="project-select-link" to="/projects/side-projects" className="col-md-3">
                            <ProjectSelectTile name="wm" type={projects.headings.webMobile.title} />
                        </NavLink>
                        <NavLink styleName="project-select-link" to="/projects/data" className="col-md-3">
                            <ProjectSelectTile name="ds" type={projects.headings.ds.title} />
                        </NavLink>
                        <NavLink styleName="project-select-link" to="/projects/hackathons" className="col-md-3">
                            <ProjectSelectTile name="hack" type={projects.headings.hackathons.title} />
                        </NavLink>
                    </div>
            </div>
        )
    }
};



export default CSSModules(Projects, styles);