import React, { Component } from 'react';
import styles from './ProjectSelect.css';
import CSSModules from 'react-css-modules';
import ProjectSelectTile from './ProjectSelectTile/ProjectSelectTile';
import { NavLink } from 'react-router-dom';
import ProjectsInfo from '../../assets/projectsInfo';


class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return(
            <div className="container">
                <span styleName="curve" className="container">
                    <div className="row">
                        <h1>
                            {ProjectsInfo.headings.projects.title}
                        </h1>
                    </div>
                        <p>
                            {ProjectsInfo.headings.projects.description}
                        </p>
                </span>
                <div styleName="project-select-row" className="row">
                    <NavLink styleName="project-select-link" to="/projects/web-mobile" className="col-md-3">
                        <ProjectSelectTile type={ProjectsInfo.headings.webMobile.title}/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/data-science" className="col-md-3">
                        <ProjectSelectTile type={ProjectsInfo.headings.ds.title}/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/experience" className="col-md-3">
                        <ProjectSelectTile type={ProjectsInfo.headings.experience.title}/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/hackathons" className="col-md-3">
                        <ProjectSelectTile type={ProjectsInfo.headings.hackathons.title}/>
                    </NavLink>
                </div>
            </div>
        )
    }
};



export default CSSModules(Projects, styles);