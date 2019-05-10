import React, { Component } from 'react';
import styles from './ProjectDetails.css';
import CSSModules from 'react-css-modules';
// import ProjectSelectTile from './ProjectSelectTile/ProjectSelectTile';
// import { NavLink } from 'react-router-dom';
// import ProjectsInfo from '../../../../assets/projectsInfo';
// import Fade from 'react-reveal/Fade';


class Huddle extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return(
            <div className="container">
                <span styleName="curve" className="container">
                    <div className="row">
                        <h1>
                            {/* {ProjectsInfo.headings.projects.title} */}
                        </h1>
                    </div>
                    <p>
                        {/* {ProjectsInfo.headings.projects.description} */}
                    </p>
                </span>
            </div>
        )
    }
};



export default CSSModules(Huddle, styles);