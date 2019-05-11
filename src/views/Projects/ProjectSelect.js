import React, { Component } from 'react';
import styles from './ProjectSelect.css';
import CSSModules from 'react-css-modules';
import ProjectSelectTile from './ProjectSelectTile/ProjectSelectTile';
import { NavLink } from 'react-router-dom';
import ProjectsInfo from '../../assets/projectsInfo';
import Fade from 'react-reveal/Fade';


class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return(
            <div className="container">
                <span styleName="curve" className="container">
                    <Fade bottom>
                    <div className="row">
                        <h1>
                            {ProjectsInfo.headings.projects.title}
                        </h1>
                    </div>
                    <p>
                        {ProjectsInfo.headings.projects.description}
                    </p>
                    </Fade>
                </span>
                <Fade bottom>
                <div styleName="project-select-row" className="row">
                    <NavLink styleName="project-select-link" to="/projects/experience" className="col-md-3">
                        <ProjectSelectTile name="exp" type={ProjectsInfo.headings.experience.title}/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/web-mobile" className="col-md-3">
                        <ProjectSelectTile name="wm" type={ProjectsInfo.headings.webMobile.title}/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/data-science" className="col-md-3">
                        <ProjectSelectTile name="ds" type={ProjectsInfo.headings.ds.title}/>
                    </NavLink>
                    <NavLink styleName="project-select-link" to="/projects/hackathons" className="col-md-3">
                        <ProjectSelectTile name="hack" type={ProjectsInfo.headings.hackathons.title}/>
                    </NavLink>
                </div>
                </Fade>
            </div>
        )
    }
};



export default CSSModules(Projects, styles);